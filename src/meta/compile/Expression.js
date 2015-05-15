import Loc from 'esast/dist/Loc'
import tupl, { abstract } from 'tupl/dist/tupl'
import { Nullable, Union } from 'tupl/dist/type'
import { JsGlobals } from './private/Lang'

const Expression = abstract('Expression', Object, 'doc')
export default Expression

export const
	LineContent = abstract('ValOrDo', Expression, 'Valid part of a Block.'),
	Do = abstract('Do', LineContent, `
		These can only appear as lines in a Block.
		Not to be confused with Generator expressions resulting from \`do\` keyword.`),
	Val = abstract('Val', LineContent, 'These can appear in any expression.')

const makeType = superType => (name, doc, namesTypes, protoProps, tuplProps) =>
	// TODO: provide actual docs...
	tupl(name, superType, 'doc', [ 'loc', Loc ].concat(namesTypes), protoProps, tuplProps)
const
	ee = makeType(Expression), ed = makeType(Do), ev = makeType(Val)

export const
	LocalDeclare = ee('LocalDeclare',
		'TODO:DOC',
		[
			'name', String,
			'opType', Nullable(Val),
			'isLazy', Boolean
		],
		{ },
		{
			displayName: loc => LocalDeclare.plain(loc, 'displayName'),
			focus: loc => LocalDeclare.plain(loc, '_'),
			noType: (loc, name, isLazy) => LocalDeclare(loc, name, null, isLazy),
			plain: (loc, name) => LocalDeclare.noType(loc, name, false)
		}),
	LocalDeclareRes = makeType(LocalDeclare)('LocalDeclareRes',
		'TODO:DOC',
		[ 'opType', Nullable(Val) ],
		{
			name: 'res',
			isLazy: false
		}),

	Debug = ed('Debug',
		'TODO:DOC',
		[ 'lines', [LineContent] ]),

	Block = abstract('Block', Expression, 'TODO:DOC'),
	BlockDo = makeType(Block)('BlockDo',
		'TODO:DOC',
		[ 'lines', [LineContent] ]),
	BlockVal = abstract('BlockVal', Block, 'TODO:DOC'),
	BlockWithReturn = makeType(BlockVal)('BlockWithReturn',
		'TODO:DOC',
		[ 'lines', [LineContent], 'returned', Val ]),

	BlockObj = makeType(BlockVal)('BlockObj',
		'TODO:DOC',
		[
			'lines', [LineContent],
			'keys', [LocalDeclare],
			'opObjed', Nullable(Val),
			'opDisplayName', Nullable(String)
		]),

	BagEntry = ee('BagEntry',
		'TODO:DOC',
		[ 'value', Val ]),
	BlockBag = makeType(BlockVal)('BlockBag',
		'TODO:DOC',
		[ 'lines', [Union(LineContent, BagEntry)] ]),

	MapEntry = ee('MapEntry',
		'TODO:DOC',
		[ 'key', Val, 'val', Val ]),
	BlockMap = makeType(BlockVal)('BlockMap',
		'TODO:DOC',
		[ 'lines', [Union(LineContent, MapEntry)] ]),

	Assign = ed('Assign',
		'TODO:DOC',
		[
			'assignee', LocalDeclare,
			'value', Val
		],
		{ },
		{ focus: (loc, value) => Assign(loc, LocalDeclare.focus(loc), value) }),
	AssignDestructure = ed('AssignDestructure',
		'TODO:DOC',
		[
			'assignees', [LocalDeclare],
			'value', Val,
			'isLazy', Boolean
		]),
	LocalAccess = ev('LocalAccess',
		'TODO:DOC',
		[ 'name', String ],
		{ },
		{ focus: loc => LocalAccess(loc, '_') }),
	GlobalAccess = ev('GlobalAccess',
		'TODO:DOC',
		[ 'name', JsGlobals ]),
	// Module
	UseDo = ee('UseDo',
		'TODO:DOC',
		[ 'path', String ]),
	Use = ee('Use',
		'TODO:DOC',
		[
			'path', String,
			'used', [LocalDeclare],
			'opUseDefault', Nullable(LocalDeclare)
		]),
	Module = ee('Module',
		'TODO:DOC',
		[
			'doUses', [UseDo],
			'uses', [Use],
			'debugUses', [Use],
			'lines', [Do],
			'exports', [LocalDeclare],
			'opDefaultExport', Nullable(Val)
		]),

	// Data
	BagSimple = ev('ListSimple',
		'TODO:DOC',
		[ 'parts', [Val] ]),
	ObjPair = ee('ObjPair',
		'TODO:DOC',
		[
			'key', String,
			'value', Val
		]),
	// Verifier checks that no two pairs may have the same key.
	ObjSimple = ev('ObjSimple',
		'TODO:DOC',
		[ 'pairs', [ObjPair] ]),

	// Case
	Pattern = ee('Pattern',
		'TODO:DOC',
		[
			'type', Val,
			'locals', [LocalDeclare],
			'patterned', LocalAccess
		]),
	CaseDoPart = ee('CaseDoPart',
		'TODO:DOC',
		[
			'test', Union(Val, Pattern),
			'result', BlockDo
		]),
	CaseValPart = ee('CaseValPart',
		'TODO:DOC',
		[
			'test', Union(Val, Pattern),
			'result', BlockVal
		]),
	CaseDo = ed('CaseDo',
		'TODO:DOC',
		[
			'opCased', Nullable(Assign),
			'parts', [CaseDoPart],
			'opElse', Nullable(BlockDo)
		]),
	// Unlike CaseDo, this has `return` statements.
	CaseVal = ev('CaseVal',
		'TODO:DOC',
		[
			'opCased', Nullable(Assign),
			'parts', [CaseValPart],
			'opElse', Nullable(BlockVal)
		]),

	// Statements
	Loop = ed('Loop',
		'TODO:DOC',
		[ 'block', BlockDo ]),
	EndLoop = ed('EndLoop',
		'TODO:DOC',
		[ ]),

	// Generators
	Yield = ev('Yield',
		'TODO:DOC',
		[ 'yielded', Val ]),
	YieldTo = ev('YieldTo',
		'TODO:DOC',
		[ 'yieldedTo', Val ]),

	// Expressions
	Splat = ee('Splat',
		'TODO:DOC',
		[ 'splatted', Val ]),
	Call = ev('Call',
		'TODO:DOC',
		[
			'called', Val,
			'args', [Union(Val, Splat)]
		],
		{ },
		{
			contains: (loc, testType, tested) =>
				Call(loc, SpecialVal.contains(loc), [ testType, tested ]),
			sub: (loc, args) => Call(loc, SpecialVal.sub(loc), args)
		}),
	BlockWrap = ev('BlockWrap',
		'TODO:DOC',
		[ 'block', BlockVal ]),

	Fun = ev('Fun',
		'TODO:DOC',
		[
			'isGenerator', Boolean,
			'args', [LocalDeclare],
			'opRestArg', Nullable(LocalDeclare),
			'block', Block,
			'opIn', Nullable(Debug),
			// If non-empty, block should be a BlockVal,
			// and either it has a type or opOut is non-empty.
			'opResDeclare', Nullable(LocalDeclareRes),
			'opOut', Nullable(Debug),
			'name', Nullable(String)
		]),

	Lazy = ev('Lazy',
		'TODO:DOC',
		[ 'value', Val ]),
	NumberLiteral = ev('NumberLiteral',
		'TODO:DOC',
		[ 'value', Number ]),
	Member = ev('Member',
		'TODO:DOC',
		[
			'object', Val,
			'name', String
		]),
	// parts are Strings interleaved with Vals.
	Quote = ev('Quote',
		'TODO:DOC',
		[ 'parts', [Object] ],
		{ },
		{
			forString: (loc, str) => Quote(loc, [ str ])
		}),

	SD_Debugger = 0,
	SpecialDo = ed('SpecialDo',
		'TODO:DOC',
		[ 'kind', Number ],
		{ },
		{
			debugger: loc => SpecialDo(loc, SD_Debugger)
		}),

	SV_Contains = 0,
	SV_False = 1,
	SV_Null = 2,
	SV_Sub = 3,
	SV_This = 4,
	SV_ThisModuleDirectory = 5,
	SV_True = 6,
	SV_Undefined = 7,
	// k is a SP_***
	SpecialVal = ev('Special',
		'TODO:DOC',
		[ 'kind', Number ],
		{ },
		{
			contains: loc => SpecialVal(loc, SV_Contains),
			sub: loc => SpecialVal(loc, SV_Sub),
			null: loc => SpecialVal(loc, SV_Null)
		})
