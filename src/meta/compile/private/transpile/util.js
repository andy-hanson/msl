import { ArrayExpression, AssignmentExpression, BreakStatement, CallExpression, ExpressionStatement,
	Identifier, Literal, ReturnStatement, VariableDeclarator } from 'esast/dist/ast'
import { member, thunk } from 'esast/dist/util'
import { unshift } from '../U/Bag'
import { ifElse, None } from '../U/Op'
import { assert } from '../U/util'
import { t0 } from './transpile'
import { idForDeclareCached, idForDeclareNew } from './esast-util'

export const
	LitEmptyArray = ArrayExpression([]),
	LitEmptyString = Literal(''),
	LitNull = Literal(null),
	LitStrDisplayName = Literal('displayName'),
	Break = BreakStatement(),
	ReturnRes = ReturnStatement(Identifier('res')),
	IdDefine = Identifier('define'),
	IdDisplayName = Identifier('displayName'),
	IdExports = Identifier('exports'),
	IdArguments = Identifier('arguments'),
	IdArraySliceCall = member(member(LitEmptyArray, 'slice'), 'call'),
	IdFunctionApplyCall = member(member(Identifier('Function'), 'apply'), 'call'),
	IdModule = Identifier('module'),
	IdMs = Identifier('_ms')

const ms = name => {
	const m = member(IdMs, name)
	return (...args) => CallExpression(m, args)
}
export const
	msGetDefaultExport = ms('getDefaultExport'),
	msGet = ms('get'),
	msGetModule = ms('getModule'),
	msLazyGetModule = ms('lazyGetModule'),
	msArr = ms('arr'),
	msBool = ms('bool'),
	msExtract = ms('extract'),
	msLset = ms('lset'),
	msSet = ms('set'),
	msMap = ms('map'),
	msShow = ms('show'),
	msCheckContains = ms('checkContains'),
	msUnlazy = ms('unlazy'),
	msLazy = ms('lazy'),
	msLazyGet = ms('lazyProp')

export const
	makeDestructureDeclarators = (cx, loc, assignees, isLazy, value, k, isModule) => {
		const destructuredName = `_$${loc.start.line}`
		const idDestructured = Identifier(destructuredName)
		const declarators = assignees.map(assignee => {
			// TODO: Don't compile it if it's never accessed
			const get = getMember(cx, idDestructured, assignee.name, isLazy, isModule)
			return makeDeclarator(cx, assignee.loc, assignee, k, get, isLazy)
		})
		// Getting lazy module is done by ms.lazyGetModule.
		const val = (isLazy && !isModule) ? lazyWrap(value) : value
		return unshift(VariableDeclarator(idDestructured, val), declarators)
	},

	makeDeclarator = (cx, loc, assignee, k, value, valueIsAlreadyLazy) => {
		// TODO: assert(isEmpty(assignee.opType))
		// or TODO: Allow type check on lazy value?
		value = assignee.isLazy ? value :
			maybeWrapInCheckContains(cx, value, assignee.opType, assignee.name)

		if (k === 'export') {
			// TODO:ES6
			assert(!assignee.isLazy)
			return VariableDeclarator(
				idForDeclareCached(assignee),
				AssignmentExpression('=', member(IdExports, assignee.name), value))
		} else {
			const val = assignee.isLazy && !valueIsAlreadyLazy ? lazyWrap(value) : value
			assert(assignee.isLazy || !valueIsAlreadyLazy)
			return VariableDeclarator(idForDeclareCached(assignee), val)
		}
	},

	accessLocal = (localAccess, vr) =>
		accessLocalDeclare(vr.accessToLocal.get(localAccess)),

	accessLocalDeclare = localDeclare =>
		localDeclare.isLazy ?
			msUnlazy(idForDeclareCached(localDeclare)) :
			idForDeclareNew(localDeclare),

	maybeWrapInCheckContains = (cx, ast, opType, name) =>
		cx.opts.includeTypeChecks() ?
			ifElse(opType,
				typ => msCheckContains(t0(typ), ast, Literal(name)),
				() => ast) :
			ast,

	opLocalCheck = (cx, local, isLazy) => {
		// TODO: Way to typecheck lazies
		if (!cx.opts.includeTypeChecks() || isLazy)
			return None
		else return local.opType.map(typ =>
			ExpressionStatement(msCheckContains(
				t0(typ),
				accessLocalDeclare(local),
				Literal(local.name))))
	},

	lazyWrap = value => msLazy(thunk(value))

const getMember = (cx, astObject, gotName, isLazy, isModule) => {
	if (isLazy)
		return msLazyGet(astObject, Literal(gotName))
	else if (isModule && cx.opts.includeUseChecks())
		return msGet(astObject, Literal(gotName))
	else
		return member(astObject, gotName)
}
