import { JsGlobals, KAssign, KFun, SpecialKeywords, UseKeywords } from './Lang'
import Span, { spanType } from './Span'
import { setUnion } from './U'
import { cons } from './U/Bag'
import Op, { None } from './U/Op'
import { abstractType } from './U/types'

const Expression = abstractType('Expression', Object)
export default Expression
// These can only appear as lines in a Block.
// Not to be confused with Generator expressions resulting from `do` keyword.
export const Do = abstractType('Do', Expression)
// These can appear in any expression.
export const Val = abstractType('Val', Expression)

const ee = (name, props) => spanType(name, Expression, props)
const ed = (name, props) => spanType(name, Do, props)
const ev = (name, props) => spanType(name, Val, props)

export const Debug = ed('Debug', { lines: [Expression] })
export const Block = spanType('Block', Expression, {
	lines: [Expression],
	opReturn: Op(Val),
	opIn: Op(Debug), opOut: Op(Debug)
})

export const ModuleDefaultExport = ed('ModuleDefaultExport', { value: Val })

// Locals
export const LocalDeclare = ee('LocalDeclare', {
	name: String,
	opType: Op(Val),
	isLazy: Boolean,
	okToNotUse: Boolean
})
Object.assign(LocalDeclare, {
	focus: span => LocalDeclare({
		span,
		name: '_',
		opType: None,
		isLazy: false,
		okToNotUse: false
	}),
	res: span => LocalDeclare({
		span,
		name: 'res',
		opType: None,
		isLazy: false,
		okToNotUse: true
	})
})

export const Assign = ed('Assign', { assignee: LocalDeclare, k: KAssign, value: Val })
Assign.focus = (span, value) => Assign({
	span,
	assignee: LocalDeclare.focus(span),
	k: '=',
	value
})

export const AssignDestructure = ed('AssignDestructure', {
	assignees: [LocalDeclare],
	k: KAssign,
	value: Val,
	isLazy: Boolean
})
export const LocalAccess = ev('LocalAccess', { name: String })
LocalAccess.focus = span => LocalAccess({ span, name: '_' })

export const GlobalAccess = ev('GlobalAccess', { name: JsGlobals })
Object.assign(GlobalAccess, {
	null: span => GlobalAccess({ span, name: 'null' }),
	true: span => GlobalAccess({ span, name: 'true' })
})

// Module
export const UseDo = ee('UseDo', { path: String })
export const Use = ee('Use', {
	used: [LocalDeclare],
	path: String
})
// The body of a module will contain ModuleExport and ModuleDefaultExport_s
export const Module = ed('Module', {
	doUses: [UseDo],
	uses: [Use],
	debugUses: [Use],
	block: Block
})

// Data
export const ListEntry = ed('ListEntry', { value: Val, index: Number })
export const ListReturn = ev('ListReturn', { length: Number })
export const ListSimple = ev('ListSimple', { parts: [Val] })
export const MapEntry = ed('MapEntry', { key: Val, val: Val, index: Number })
export const MapReturn = ev('Map', { length: Number })
export const ObjReturn = ev('ObjReturn', {
	keys: [LocalDeclare],
	debugKeys: [LocalDeclare],
	opObjed: Op(Val),
	opDisplayName: Op(String)
})
export const ObjSimple = ev('ObjSimple', {
	// values are Vals
	keysVals: Object
})

// Case
export const CasePart = ee('CasePart', { test: Val, result: Block })
export const CaseDo = ed('CaseDo', {
	opCased: Op(Assign),
	parts: [CasePart],
	opElse: Op(Block)
})
// Unlike CaseDo, this has `return` statements.
export const CaseVal = ev('CaseVal', {
	opCased: Op(Assign),
	parts: [CasePart],
	opElse: Op(Block)
})

// Statements
export const BlockWrap = ev('BlockWrap', { block: Block })
export const Loop = ed('Loop', { block: Block })
export const EndLoop = ed('EndLoop', { })

// Generators
export const Yield = ev('Yield', { yielded: Val })
export const YieldTo = ev('YieldTo', { yieldedTo: Val })

// Expressions
export const Call = ev('Call', { called: Val, args: [Val] })
Object.assign(Call, {
	contains: (span, testType, tested) =>
		Call({ span, called: Special.contains(span), args: [ testType, tested ] }),
	sub: (span, args) =>
		Call({ span, called: Special.sub(span), args })
})
// For use in a Call
export const Splat = ev('Splat', { splatted: Val })

export const Fun = ev('Fun', {
	args: [LocalDeclare],
	opRestArg: Op(LocalDeclare),
	block: Block,
	opReturnType: Op(Val),
	k: KFun
})

export const Lazy = ev('Lazy', { value: Val })
export const ELiteral = ev('Literal', { value: String, k: new Set([Number, String, 'js']) })
export const Member = ev('Member', { object: Val, name: String })
export const Quote = ev('Quote', { parts: [Val] })

// TODO: Get rid of null
const KSpecial = setUnion(SpecialKeywords, [ 'contains', 'debugger', 'sub', 'null' ])
export const Special = ev('Special', { k: KSpecial })
Object.assign(Special, {
	contains: span => Special({ span, k: 'contains' }),
	debugger: span => Special({ span, k: 'debugger' }),
	sub: span => Special({ span, k: 'sub' })
})