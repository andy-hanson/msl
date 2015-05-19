import { code } from '../CompileError'
import * as EExports from '../Expression'
import { Assign, AssignDestructure, BlockVal, Call, Debug, Do, BagEntry,
	LocalDeclareRes, MapEntry, Pattern, SpecialDo, Yield, YieldTo } from '../Expression'
import { cat, head, ifElse, implementMany, isEmpty, mapKeys, newSet, opEach } from './util'
import VerifyResults, { LocalInfo } from './VerifyResults'

const vm = es => es.forEach(e => e.verify())
const vop = op => opEach(op, _ => _.verify())

let
	cx,
	locals,
	// Locals for this block.
	// Replaces `locals` when entering into sub-function.
	pendingBlockLocals,
	isInDebug,
	isInGenerator,
	opLoop,
	vr

const
	init = _cx => {
		cx = _cx
		locals = new Map()
		pendingBlockLocals = []
		isInDebug = false
		isInGenerator = false
		opLoop = null
		vr = new VerifyResults()
	},
	// Release for garbage collection
	uninit = () => {
		locals = pendingBlockLocals = opLoop = vr = undefined
	},

	withInGenerator = (_isInGenerator, fun) => {
		const g = isInGenerator
		isInGenerator = _isInGenerator
		fun()
		isInGenerator = g
	},

	plusLocal = (addedLocal, fun) => {
		const shadowed = locals.get(addedLocal.name)
		locals.set(addedLocal.name, addedLocal)
		fun()
		_removeLocal(addedLocal.name, shadowed)
	},

	plusLocals = (addedLocals, fun) => {
		const shadowed = new Map()
		addedLocals.forEach(_ => {
			const got = locals.get(_.name)
			if (got !== undefined)
				shadowed.set(_.name, got)
			locals.set(_.name, _)
		})
		fun()
		addedLocals.forEach(_ => _removeLocal(_.name, shadowed.get(_.name)))
	},

	_removeLocal = (name, shadowed) => {
		if (shadowed === undefined)
			locals.delete(name)
		else
			locals.set(name, shadowed)
	},

	plusPendingBlockLocals = (pending, fun) => {
		const oldLength = pendingBlockLocals.length
		pendingBlockLocals.push(...pending)
		fun()
		while (pendingBlockLocals.length > oldLength)
			pendingBlockLocals.pop()
	},

	withInLoop = (loop, fun) => {
		const l = opLoop
		opLoop = loop
		fun()
		opLoop = l
	},

	withInDebug = (_isInDebug, fun) => {
		const d = isInDebug
		isInDebug = _isInDebug
		fun()
		isInDebug = d
	},

	withBlockLocals = fun => {
		const bl = pendingBlockLocals
		pendingBlockLocals = []
		plusLocals(bl, fun)
		pendingBlockLocals = bl
	},

	accessLocal = (declare, access, isDebugAccess) =>
		_addAccess(vr.localToInfo.get(declare), access, isDebugAccess),
	accessLocalForReturn = (declare, access) => {
		const info = vr.localToInfo.get(declare)
		_addAccess(info, access, info.isInDebug)
	},
	_addAccess = (localInfo, access, isDebugAccess) =>
		(isDebugAccess ? localInfo.debugAccesses : localInfo.nonDebugAccesses).push(access),


	// VerifyResults setters
	registerLocal = local =>
		vr.localToInfo.set(local, LocalInfo(isInDebug, [], [])),

	setEntryIndex = (listMapEntry, index) =>
		vr.entryToIndex.set(listMapEntry, index)

export default function verify(cx, e) {
	init(cx)
	e.verify()
	verifyLocalUse()
	const out = vr
	uninit()
	return out
}

const verifyLocalUse = () => {
	vr.localToInfo.forEach((info, local) => {
		if (!(local instanceof LocalDeclareRes)) {
			const noNonDebug = isEmpty(info.nonDebugAccesses)
			if (noNonDebug && isEmpty(info.debugAccesses))
				cx.warn(local.loc, () => `Unused local variable ${code(local.name)}.`)
			else if (info.isInDebug)
				cx.warnIf(!noNonDebug, () => head(info.nonDebugAccesses).loc, () =>
					`Debug-only local ${code(local.name)} used outside of debug.`)
			else
				cx.warnIf(noNonDebug, local.loc, () =>
					`Local ${code(local.name)} used only in debug.`)
		}
	})
}

implementMany(EExports, 'verify', {
	Assign() {
		const doV = () => {
			this.assignee.verify()
			this.value.verify()
		}
		if (this.assignee.isLazy())
			withBlockLocals(doV)
		else
			doV()
	},

	AssignDestructure() {
		this.value.verify()
		vm(this.assignees)
	},

	AssignMutate() {
		const declare = getLocalDeclare(this.name, this.loc)
		cx.check(declare.isMutable(), this.loc, () => `${code(this.name)} is not mutable.`)
		// TODO: Track assignments. Mutable local must be mutated somewhere.
		this.value.verify()
	},

	BagEntry() { this.value.verify() },

	BagSimple() { vm(this.parts) },

	BlockDo() { verifyLines(this.lines) },

	BlockWithReturn() {
		const { newLocals } = verifyLines(this.lines)
		plusLocals(newLocals, () => this.returned.verify())
	},

	BlockObj() {
		const { newLocals } = verifyLines(this.lines)
		this.keys.forEach(_ => accessLocalForReturn(_, this))
		opEach(this.opObjed, _ => plusLocals(newLocals, () => _.verify()))
	},

	BlockBag: blockBagOrMap,
	BlockMap: blockBagOrMap,

	BlockWrap() {
		this.block.verify()
	},

	BreakDo() {
		if (opLoop === null)
			cx.fail(this.loc, 'Not in a loop.')
	},

	Call() {
		this.called.verify()
		vm(this.args)
	},

	CaseDo: verifyCase,
	CaseDoPart: verifyCasePart,
	CaseVal: verifyCase,
	CaseValPart: verifyCasePart,

	// Only reach here for in/out condition
	Debug() { verifyLines([ this ]) },

	ForDoPlain() {
		withInLoop(this, () => this.block.verify())
	},

	ForDoWithBag() {
		registerLocal(this.element)
		this.element.verify()
		this.bag.verify()
		plusLocal(this.element, () => withInLoop(this, () => this.block.verify()))
	},

	Fun() {
		withBlockLocals(() => {
			cx.check(this.opResDeclare === null || this.block instanceof BlockVal, this.loc,
				'Function with return condition must return something.')
			this.args.forEach(arg => vop(arg.opType))
			withInGenerator(this.isGenerator, () => {
				const allArgs = cat(this.args, this.opRestArg)
				allArgs.forEach(_ => registerLocal(_))
				plusLocals(allArgs, () => {
					vop(this.opIn)
					this.block.verify()
					opEach(this.opResDeclare, _ => {
						_.verify()
						registerLocal(_)
					})
					const verifyOut = () => opEach(this.opOut, _ => _.verify())
					ifElse(this.opResDeclare, rd => plusLocals([ rd ], verifyOut), verifyOut)
				})
			})
		})
	},

	GlobalAccess() { },

	IfDo: ifOrUnlessDo,

	Lazy() { withBlockLocals(() => this.value.verify()) },

	LocalAccess() {
		const declare = getLocalDeclare(this.name, this.loc)
		vr.accessToLocal.set(this, declare)
		accessLocal(declare, this, isInDebug)
	},

	// Adding LocalDeclares to the available locals is done by Fun or lineNewLocals.
	LocalDeclare() { vop(this.opType) },

	NumberLiteral() { },

	MapEntry() {
		this.key.verify()
		this.val.verify()
	},

	Member() { this.object.verify() },

	Module() {
		// No need to verify this.doUses.
		const useLocals = verifyUses(this.uses, this.debugUses)
		plusLocals(useLocals, () => {
			const { newLocals } = verifyLines(this.lines)
			this.exports.forEach(ex => accessLocalForReturn(ex, this))
			opEach(this.opDefaultExport, _ => plusLocals(newLocals, () => _.verify()))
		})

		const exports = newSet(this.exports)
		const markExportLines = line => {
			if (line instanceof Assign && exports.has(line.assignee) ||
				line instanceof AssignDestructure && line.assignees.some(_ => exports.has(_)))
				vr.exportAssigns.add(line)
			else if (line instanceof Debug)
				line.lines.forEach(markExportLines)
		}
		this.lines.forEach(markExportLines)
	},

	ObjSimple() {
		const keys = new Set()
		this.pairs.forEach(pair => {
			cx.check(!keys.has(pair.key), pair.loc, () => `Duplicate key ${pair.key}`)
			keys.add(pair.key)
			pair.value.verify()
		})
	},

	Quote() {
		this.parts.forEach(_ => {
			if (typeof _ !== 'string')
				_.verify()
		})
	},

	SpecialDo() { },

	SpecialVal() { },

	Splat() { this.splatted.verify() },

	UnlessDo: ifOrUnlessDo,

	Yield() {
		cx.check(isInGenerator, this.loc, 'Cannot yield outside of generator context')
		this.yielded.verify()
	},

	YieldTo() {
		cx.check(isInGenerator, this.loc, 'Cannot yield outside of generator context')
		this.yieldedTo.verify()
	}
})

function blockBagOrMap() {
	const { listMapLength } = verifyLines(this.lines)
	vr.blockToLength.set(this, listMapLength)
}

function ifOrUnlessDo() {
	this.test.verify()
	this.result.verify()
}

function verifyCase() {
	const doit = () => {
		vm(this.parts)
		vop(this.opElse)
	}
	ifElse(this.opCased,
		_ => {
			_.verify()
			registerLocal(_.assignee)
			plusLocal(_.assignee, doit)
		},
		doit)
}

function verifyCasePart() {
	if (this.test instanceof Pattern) {
		this.test.type.verify()
		this.test.patterned.verify()
		vm(this.test.locals)
		this.test.locals.forEach(registerLocal)
		plusLocals(this.test.locals, () => this.result.verify())
	} else {
		this.test.verify()
		this.result.verify()
	}
}

const
	getLocalDeclare = (name, accessLoc) => {
		const declare = locals.get(name)
		cx.check(declare !== undefined, accessLoc, () =>
			`No such local ${code(name)}.\nLocals are:\n${code(mapKeys(locals).join(' '))}.`)
		return declare
	},

	lineNewLocals = line =>
		line instanceof Assign ?
			[ line.assignee ] :
			line instanceof AssignDestructure ?
			line.assignees :
			[ ],

	verifyUses = (uses, debugUses) => {
		const useLocals = []
		const
			verifyUse = use => {
				use.used.forEach(useLocal)
				opEach(use.opUseDefault, useLocal)
			},
			useLocal = _ => {
				registerLocal(_)
				useLocals.push(_)
			}
		uses.forEach(verifyUse)
		withInDebug(true, () => debugUses.forEach(verifyUse))
		return useLocals
	},

	verifyLines = lines => {
		const newLocals = [ ]
		// First, get locals for the whole block.
		const getLineLocals = line => {
			if (line instanceof Debug)
				withInDebug(true, () => line.lines.forEach(getLineLocals))
			else {
				const news = lineNewLocals(line)
				news.forEach(registerLocal)
				newLocals.push(...news)
			}
		}

		lines.forEach(getLineLocals)

		const thisBlockLocalNames = new Set()
		const shadowed = new Map()

		let listMapLength = 0

		const verifyLine = line => {
			if (line instanceof Debug)
				// TODO: Do anything in this situation?
				// cx.check(!inDebug, line.loc, 'Redundant `debug`.')
				withInDebug(true, () => line.lines.forEach(verifyLine))
			else {
				verifyIsStatement(line)
				lineNewLocals(line).forEach(l => {
					const got = locals.get(l.name)
					if (got !== undefined) {
						cx.check(!thisBlockLocalNames.has(l.name), l.loc,
							() => `A local ${code(l.name)} is already in this block.`)
						shadowed.set(l.name, got)
					}
					locals.set(l.name, l)
					thisBlockLocalNames.add(l.name)
				})
				if (line instanceof BagEntry || line instanceof MapEntry) {
					setEntryIndex(line, listMapLength)
					listMapLength = listMapLength + 1
				}
				line.verify()
			}
		}

		plusPendingBlockLocals(newLocals, () => lines.forEach(verifyLine))

		newLocals.forEach(l => {
			const s = shadowed.get(l.name)
			if (s === undefined)
				locals.delete(l.name)
			else
				locals.set(l.name, s)
		})

		return { newLocals, listMapLength }
	},

	verifyIsStatement = line => {
		const isStatement =
			line instanceof Do ||
			line instanceof Call ||
			line instanceof Yield ||
			line instanceof YieldTo ||
			line instanceof BagEntry ||
			line instanceof MapEntry ||
			line instanceof SpecialDo
		cx.check(isStatement, line.loc, 'Expression in statement position.')
	}
