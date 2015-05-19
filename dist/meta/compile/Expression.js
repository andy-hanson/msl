if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports', 'esast/dist/Loc', 'tupl/dist/tupl', 'tupl/dist/type', './private/language'], function (exports, _esastDistLoc, _tuplDistTupl, _tuplDistType, _privateLanguage) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _Loc = _interopRequire(_esastDistLoc);

	var _tupl = _interopRequire(_tuplDistTupl);

	const Expression = (0, _tuplDistTupl.abstract)('Expression', Object, 'doc');
	exports.default = Expression;
	const LineContent = (0, _tuplDistTupl.abstract)('ValOrDo', Expression, 'Valid part of a Block.'),
	      Do = (0, _tuplDistTupl.abstract)('Do', LineContent, '\n\t\tThese can only appear as lines in a Block.\n\t\tNot to be confused with Generator expressions resulting from `do` keyword.'),
	      Val = (0, _tuplDistTupl.abstract)('Val', LineContent, 'These can appear in any expression.');

	exports.LineContent = LineContent;
	exports.Do = Do;
	exports.Val = Val;
	const makeType = function (superType) {
		return function (name, doc, namesTypes, protoProps, tuplProps) {
			return (
				// TODO: provide actual docs...
				(0, _tupl)(name, superType, doc, ['loc', _Loc].concat(namesTypes), protoProps, tuplProps)
			);
		};
	};
	const ee = makeType(Expression),
	      ed = makeType(Do),
	      ev = makeType(Val);

	const LD_Const = 0,
	      LD_Lazy = 1,
	      LD_Mutable = 2,
	      LocalDeclare = ee('LocalDeclare', 'TODO:DOC', ['name', String, 'opType', (0, _tuplDistType.Nullable)(Val), 'kind', Number], {
		isLazy: function () {
			return this.kind === LD_Lazy;
		},
		isMutable: function () {
			return this.kind === LD_Mutable;
		}
	}, {
		// Can't call this 'name' because LocalDeclare.name is 'LocalDeclare'
		declareName: function (loc) {
			return LocalDeclare.plain(loc, 'name');
		},
		focus: function (loc) {
			return LocalDeclare.plain(loc, '_');
		},
		noType: function (loc, name, isLazy) {
			return LocalDeclare(loc, name, null, isLazy ? LD_Lazy : LD_Const);
		},
		plain: function (loc, name) {
			return LocalDeclare.noType(loc, name, false);
		}
	}),
	      LocalDeclareRes = makeType(LocalDeclare)('LocalDeclareRes', 'TODO:DOC', ['opType', (0, _tuplDistType.Nullable)(Val)], {
		name: 'res',
		kind: LD_Const
	}),
	      Debug = ed('Debug', 'TODO:DOC', ['lines', [LineContent]]),
	      Block = (0, _tuplDistTupl.abstract)('Block', Expression, 'TODO:DOC'),
	      BlockDo = makeType(Block)('BlockDo', 'TODO:DOC', ['lines', [LineContent]]),
	      BlockVal = (0, _tuplDistTupl.abstract)('BlockVal', Block, 'TODO:DOC'),
	      BlockWithReturn = makeType(BlockVal)('BlockWithReturn', 'TODO:DOC', ['lines', [LineContent], 'returned', Val]),
	      BlockObj = makeType(BlockVal)('BlockObj', 'TODO:DOC', ['lines', [LineContent], 'keys', [LocalDeclare], 'opObjed', (0, _tuplDistType.Nullable)(Val), 'opName', (0, _tuplDistType.Nullable)(String)]),
	      BagEntry = ee('BagEntry', 'TODO:DOC', ['value', Val]),
	      BlockBag = makeType(BlockVal)('BlockBag', 'TODO:DOC', ['lines', [(0, _tuplDistType.Union)(LineContent, BagEntry)]]),
	      MapEntry = ee('MapEntry', 'TODO:DOC', ['key', Val, 'val', Val]),
	      BlockMap = makeType(BlockVal)('BlockMap', 'TODO:DOC', ['lines', [(0, _tuplDistType.Union)(LineContent, MapEntry)]]),
	      LocalAccess = ev('LocalAccess', 'TODO:DOC', ['name', String], {}, { focus: function (loc) {
			return LocalAccess(loc, '_');
		} }),
	      Assign = ed('Assign', 'TODO:DOC', ['assignee', LocalDeclare, 'value', Val], {}, { focus: function (loc, value) {
			return Assign(loc, LocalDeclare.focus(loc), value);
		} }),
	      AssignDestructure = ed('AssignDestructure', 'TODO:DOC', ['assignees', [LocalDeclare], 'value', Val], {
		// All assignees must share the same kind.
		kind: function () {
			return this.assignees[0].kind;
		}
	}),
	      AssignMutate = ed('AssignMutate', 'TODO:DOC', ['name', String, 'value', Val]),
	      GlobalAccess = ev('GlobalAccess', 'TODO:DOC', ['name', _privateLanguage.JsGlobals]),
	     

	// Module
	UseDo = ee('UseDo', 'TODO:DOC', ['path', String]),
	      Use = ee('Use', 'TODO:DOC', ['path', String, 'used', [LocalDeclare], 'opUseDefault', (0, _tuplDistType.Nullable)(LocalDeclare)]),
	      Module = ee('Module', 'TODO:DOC', ['doUses', [UseDo], 'uses', [Use], 'debugUses', [Use], 'lines', [Do], 'exports', [LocalDeclare], 'opDefaultExport', (0, _tuplDistType.Nullable)(Val)]),
	     

	// Data
	BagSimple = ev('ListSimple', 'TODO:DOC', ['parts', [Val]]),
	      ObjPair = ee('ObjPair', 'TODO:DOC', ['key', String, 'value', Val]),
	     
	// Verifier checks that no two pairs may have the same key.
	ObjSimple = ev('ObjSimple', 'TODO:DOC', ['pairs', [ObjPair]]),
	     

	// Case
	Pattern = ee('Pattern', 'TODO:DOC', ['type', Val, 'locals', [LocalDeclare], 'patterned', LocalAccess]),
	      CaseDoPart = ee('CaseDoPart', 'TODO:DOC', ['test', (0, _tuplDistType.Union)(Val, Pattern), 'result', BlockDo]),
	      CaseValPart = ee('CaseValPart', 'TODO:DOC', ['test', (0, _tuplDistType.Union)(Val, Pattern), 'result', BlockVal]),
	      CaseDo = ed('CaseDo', 'TODO:DOC', ['opCased', (0, _tuplDistType.Nullable)(Assign), 'parts', [CaseDoPart], 'opElse', (0, _tuplDistType.Nullable)(BlockDo)]),
	     
	// Unlike CaseDo, this has `return` statements.
	CaseVal = ev('CaseVal', 'TODO:DOC', ['opCased', (0, _tuplDistType.Nullable)(Assign), 'parts', [CaseValPart], 'opElse', (0, _tuplDistType.Nullable)(BlockVal)]),
	     

	// Loops
	ForDoPlain = ed('ForDoPlain', 'TODO:DOC', ['block', BlockDo]),
	      ForDoWithBag = ed('ForDoWithBag', 'TODO:DOC', ['element', LocalDeclare, 'bag', Val, 'block', BlockDo]),
	      BreakDo = ed('BreakDo', 'TODO:DOC', []),
	     

	// Other statements
	IfDo = ed('IfDo', 'TODO:DOC', ['test', Val, 'result', BlockDo]),
	      UnlessDo = ed('UnlessDo', 'TODO:DOC', ['test', Val, 'result', BlockDo]),
	     

	// Generators
	Yield = ev('Yield', 'TODO:DOC', ['yielded', Val]),
	      YieldTo = ev('YieldTo', 'TODO:DOC', ['yieldedTo', Val]),
	     

	// Expressions
	Splat = ee('Splat', 'TODO:DOC', ['splatted', Val]),
	      Call = ev('Call', 'TODO:DOC', ['called', Val, 'args', [(0, _tuplDistType.Union)(Val, Splat)]], {}, {
		contains: function (loc, testType, tested) {
			return Call(loc, SpecialVal(loc, SV_Contains), [testType, tested]);
		},
		sub: function (loc, args) {
			return Call(loc, SpecialVal(loc, SV_Sub), args);
		}
	}),
	      BlockWrap = ev('BlockWrap', 'TODO:DOC', ['block', BlockVal]),
	      Fun = ev('Fun', 'TODO:DOC', ['isGenerator', Boolean, 'args', [LocalDeclare], 'opRestArg', (0, _tuplDistType.Nullable)(LocalDeclare), 'block', Block, 'opIn', (0, _tuplDistType.Nullable)(Debug),
	// If non-empty, block should be a BlockVal,
	// and either it has a type or opOut is non-empty.
	'opResDeclare', (0, _tuplDistType.Nullable)(LocalDeclareRes), 'opOut', (0, _tuplDistType.Nullable)(Debug), 'name', (0, _tuplDistType.Nullable)(String)]),
	      Lazy = ev('Lazy', 'TODO:DOC', ['value', Val]),
	      NumberLiteral = ev('NumberLiteral', 'TODO:DOC', ['value', Number]),
	      Member = ev('Member', 'TODO:DOC', ['object', Val, 'name', String]),
	     
	// parts are Strings interleaved with Vals.
	Quote = ev('Quote', 'TODO:DOC', ['parts', [Object]], {}, {
		forString: function (loc, str) {
			return Quote(loc, [str]);
		}
	}),
	      SD_Debugger = 0,
	      SpecialDo = ed('SpecialDo', 'TODO:DOC', ['kind', Number]),
	      SV_Contains = 0,
	      SV_False = 1,
	      SV_Null = 2,
	      SV_Sub = 3,
	      SV_This = 4,
	      SV_ThisModuleDirectory = 5,
	      SV_True = 6,
	      SV_Undefined = 7,
	     
	// k is a SP_***
	SpecialVal = ev('Special', 'TODO:DOC', ['kind', Number]);
	exports.LD_Const = LD_Const;
	exports.LD_Lazy = LD_Lazy;
	exports.LD_Mutable = LD_Mutable;
	exports.LocalDeclare = LocalDeclare;
	exports.LocalDeclareRes = LocalDeclareRes;
	exports.Debug = Debug;
	exports.Block = Block;
	exports.BlockDo = BlockDo;
	exports.BlockVal = BlockVal;
	exports.BlockWithReturn = BlockWithReturn;
	exports.BlockObj = BlockObj;
	exports.BagEntry = BagEntry;
	exports.BlockBag = BlockBag;
	exports.MapEntry = MapEntry;
	exports.BlockMap = BlockMap;
	exports.LocalAccess = LocalAccess;
	exports.Assign = Assign;
	exports.AssignDestructure = AssignDestructure;
	exports.AssignMutate = AssignMutate;
	exports.GlobalAccess = GlobalAccess;
	exports.UseDo = UseDo;
	exports.Use = Use;
	exports.Module = Module;
	exports.BagSimple = BagSimple;
	exports.ObjPair = ObjPair;
	exports.ObjSimple = ObjSimple;
	exports.Pattern = Pattern;
	exports.CaseDoPart = CaseDoPart;
	exports.CaseValPart = CaseValPart;
	exports.CaseDo = CaseDo;
	exports.CaseVal = CaseVal;
	exports.ForDoPlain = ForDoPlain;
	exports.ForDoWithBag = ForDoWithBag;
	exports.BreakDo = BreakDo;
	exports.IfDo = IfDo;
	exports.UnlessDo = UnlessDo;
	exports.Yield = Yield;
	exports.YieldTo = YieldTo;
	exports.Splat = Splat;
	exports.Call = Call;
	exports.BlockWrap = BlockWrap;
	exports.Fun = Fun;
	exports.Lazy = Lazy;
	exports.NumberLiteral = NumberLiteral;
	exports.Member = Member;
	exports.Quote = Quote;
	exports.SD_Debugger = SD_Debugger;
	exports.SpecialDo = SpecialDo;
	exports.SV_Contains = SV_Contains;
	exports.SV_False = SV_False;
	exports.SV_Null = SV_Null;
	exports.SV_Sub = SV_Sub;
	exports.SV_This = SV_This;
	exports.SV_ThisModuleDirectory = SV_ThisModuleDirectory;
	exports.SV_True = SV_True;
	exports.SV_Undefined = SV_Undefined;
	exports.SpecialVal = SpecialVal;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEvY29tcGlsZS9FeHByZXNzaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFLQSxPQUFNLFVBQVUsR0FBRyxrQkFKSixRQUFRLEVBSUssWUFBWSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQTttQkFDekMsVUFBVTtBQUVsQixPQUNOLFdBQVcsR0FBRyxrQkFSQSxRQUFRLEVBUUMsU0FBUyxFQUFFLFVBQVUsRUFBRSx3QkFBd0IsQ0FBQztPQUN2RSxFQUFFLEdBQUcsa0JBVFMsUUFBUSxFQVNSLElBQUksRUFBRSxXQUFXLHFJQUVnRDtPQUMvRSxHQUFHLEdBQUcsa0JBWlEsUUFBUSxFQVlQLEtBQUssRUFBRSxXQUFXLEVBQUUscUNBQXFDLENBQUMsQ0FBQTs7U0FKekUsV0FBVyxHQUFYLFdBQVc7U0FDWCxFQUFFLEdBQUYsRUFBRTtTQUdGLEdBQUcsR0FBSCxHQUFHO0FBRUosT0FBTSxRQUFRLEdBQUcsVUFBQSxTQUFTO1NBQUksVUFBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUzs7O0FBRTFFLGVBQUssSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBRSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLFNBQVM7SUFBQztHQUFBO0VBQUEsQ0FBQTtBQUNyRixPQUNDLEVBQUUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO09BQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7T0FBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBOztBQUUxRCxPQUNOLFFBQVEsR0FBRyxDQUFDO09BQ1osT0FBTyxHQUFHLENBQUM7T0FDWCxVQUFVLEdBQUcsQ0FBQztPQUNkLFlBQVksR0FBRyxFQUFFLENBQUMsY0FBYyxFQUMvQixVQUFVLEVBQ1YsQ0FDQyxNQUFNLEVBQUUsTUFBTSxFQUNkLFFBQVEsRUFBRSxr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LE9BQU8sR0FBUCxPQUFPO1NBS1AsS0FBSyxHQUFMLEtBQUs7U0FHTCxJQUFJLEdBQUosSUFBSTtTQVlKLFNBQVMsR0FBVCxTQUFTO1NBSVQsR0FBRyxHQUFILEdBQUc7U0FlSCxJQUFJLEdBQUosSUFBSTtTQUdKLGFBQWEsR0FBYixhQUFhO1NBR2IsTUFBTSxHQUFOLE1BQU07U0FPTixLQUFLLEdBQUwsS0FBSztTQVFMLFdBQVcsR0FBWCxXQUFXO1NBQ1gsU0FBUyxHQUFULFNBQVM7U0FJVCxXQUFXLEdBQVgsV0FBVztTQUNYLFFBQVEsR0FBUixRQUFRO1NBQ1IsT0FBTyxHQUFQLE9BQU87U0FDUCxNQUFNLEdBQU4sTUFBTTtTQUNOLE9BQU8sR0FBUCxPQUFPO1NBQ1Asc0JBQXNCLEdBQXRCLHNCQUFzQjtTQUN0QixPQUFPLEdBQVAsT0FBTztTQUNQLFlBQVksR0FBWixZQUFZO1NBRVosVUFBVSxHQUFWLFVBQVUiLCJmaWxlIjoibWV0YS9jb21waWxlL0V4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9jIGZyb20gJ2VzYXN0L2Rpc3QvTG9jJ1xuaW1wb3J0IHR1cGwsIHsgYWJzdHJhY3QgfSBmcm9tICd0dXBsL2Rpc3QvdHVwbCdcbmltcG9ydCB7IE51bGxhYmxlLCBVbmlvbiB9IGZyb20gJ3R1cGwvZGlzdC90eXBlJ1xuaW1wb3J0IHsgSnNHbG9iYWxzIH0gZnJvbSAnLi9wcml2YXRlL2xhbmd1YWdlJ1xuXG5jb25zdCBFeHByZXNzaW9uID0gYWJzdHJhY3QoJ0V4cHJlc3Npb24nLCBPYmplY3QsICdkb2MnKVxuZXhwb3J0IGRlZmF1bHQgRXhwcmVzc2lvblxuXG5leHBvcnQgY29uc3Rcblx0TGluZUNvbnRlbnQgPSBhYnN0cmFjdCgnVmFsT3JEbycsIEV4cHJlc3Npb24sICdWYWxpZCBwYXJ0IG9mIGEgQmxvY2suJyksXG5cdERvID0gYWJzdHJhY3QoJ0RvJywgTGluZUNvbnRlbnQsIGBcblx0XHRUaGVzZSBjYW4gb25seSBhcHBlYXIgYXMgbGluZXMgaW4gYSBCbG9jay5cblx0XHROb3QgdG8gYmUgY29uZnVzZWQgd2l0aCBHZW5lcmF0b3IgZXhwcmVzc2lvbnMgcmVzdWx0aW5nIGZyb20gXFxgZG9cXGAga2V5d29yZC5gKSxcblx0VmFsID0gYWJzdHJhY3QoJ1ZhbCcsIExpbmVDb250ZW50LCAnVGhlc2UgY2FuIGFwcGVhciBpbiBhbnkgZXhwcmVzc2lvbi4nKVxuXG5jb25zdCBtYWtlVHlwZSA9IHN1cGVyVHlwZSA9PiAobmFtZSwgZG9jLCBuYW1lc1R5cGVzLCBwcm90b1Byb3BzLCB0dXBsUHJvcHMpID0+XG5cdC8vIFRPRE86IHByb3ZpZGUgYWN0dWFsIGRvY3MuLi5cblx0dHVwbChuYW1lLCBzdXBlclR5cGUsIGRvYywgWyAnbG9jJywgTG9jIF0uY29uY2F0KG5hbWVzVHlwZXMpLCBwcm90b1Byb3BzLCB0dXBsUHJvcHMpXG5jb25zdFxuXHRlZSA9IG1ha2VUeXBlKEV4cHJlc3Npb24pLCBlZCA9IG1ha2VUeXBlKERvKSwgZXYgPSBtYWtlVHlwZShWYWwpXG5cbmV4cG9ydCBjb25zdFxuXHRMRF9Db25zdCA9IDAsXG5cdExEX0xhenkgPSAxLFxuXHRMRF9NdXRhYmxlID0gMixcblx0TG9jYWxEZWNsYXJlID0gZWUoJ0xvY2FsRGVjbGFyZScsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbXG5cdFx0XHQnbmFtZScsIFN0cmluZyxcblx0XHRcdCdvcFR5cGUnLCBOdWxsYWJsZShWYWwpLFxuXHRcdFx0J2tpbmQnLCBOdW1iZXJcblx0XHRdLFxuXHRcdHtcblx0XHRcdGlzTGF6eSgpIHsgcmV0dXJuIHRoaXMua2luZCA9PT0gTERfTGF6eSB9LFxuXHRcdFx0aXNNdXRhYmxlKCkgeyByZXR1cm4gdGhpcy5raW5kID09PSBMRF9NdXRhYmxlIH1cblx0XHR9LFxuXHRcdHtcblx0XHRcdC8vIENhbid0IGNhbGwgdGhpcyAnbmFtZScgYmVjYXVzZSBMb2NhbERlY2xhcmUubmFtZSBpcyAnTG9jYWxEZWNsYXJlJ1xuXHRcdFx0ZGVjbGFyZU5hbWU6IGxvYyA9PlxuXHRcdFx0XHRMb2NhbERlY2xhcmUucGxhaW4obG9jLCAnbmFtZScpLFxuXHRcdFx0Zm9jdXM6IGxvYyA9PlxuXHRcdFx0XHRMb2NhbERlY2xhcmUucGxhaW4obG9jLCAnXycpLFxuXHRcdFx0bm9UeXBlOiAobG9jLCBuYW1lLCBpc0xhenkpID0+XG5cdFx0XHRcdExvY2FsRGVjbGFyZShsb2MsIG5hbWUsIG51bGwsIGlzTGF6eSA/IExEX0xhenkgOiBMRF9Db25zdCksXG5cdFx0XHRwbGFpbjogKGxvYywgbmFtZSkgPT5cblx0XHRcdFx0TG9jYWxEZWNsYXJlLm5vVHlwZShsb2MsIG5hbWUsIGZhbHNlKVxuXHRcdH0pLFxuXHRMb2NhbERlY2xhcmVSZXMgPSBtYWtlVHlwZShMb2NhbERlY2xhcmUpKCdMb2NhbERlY2xhcmVSZXMnLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAnb3BUeXBlJywgTnVsbGFibGUoVmFsKSBdLFxuXHRcdHtcblx0XHRcdG5hbWU6ICdyZXMnLFxuXHRcdFx0a2luZDogTERfQ29uc3Rcblx0XHR9KSxcblxuXHREZWJ1ZyA9IGVkKCdEZWJ1ZycsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbICdsaW5lcycsIFtMaW5lQ29udGVudF0gXSksXG5cblx0QmxvY2sgPSBhYnN0cmFjdCgnQmxvY2snLCBFeHByZXNzaW9uLCAnVE9ETzpET0MnKSxcblx0QmxvY2tEbyA9IG1ha2VUeXBlKEJsb2NrKSgnQmxvY2tEbycsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbICdsaW5lcycsIFtMaW5lQ29udGVudF0gXSksXG5cdEJsb2NrVmFsID0gYWJzdHJhY3QoJ0Jsb2NrVmFsJywgQmxvY2ssICdUT0RPOkRPQycpLFxuXHRCbG9ja1dpdGhSZXR1cm4gPSBtYWtlVHlwZShCbG9ja1ZhbCkoJ0Jsb2NrV2l0aFJldHVybicsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbICdsaW5lcycsIFtMaW5lQ29udGVudF0sICdyZXR1cm5lZCcsIFZhbCBdKSxcblxuXHRCbG9ja09iaiA9IG1ha2VUeXBlKEJsb2NrVmFsKSgnQmxvY2tPYmonLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0W1xuXHRcdFx0J2xpbmVzJywgW0xpbmVDb250ZW50XSxcblx0XHRcdCdrZXlzJywgW0xvY2FsRGVjbGFyZV0sXG5cdFx0XHQnb3BPYmplZCcsIE51bGxhYmxlKFZhbCksXG5cdFx0XHQnb3BOYW1lJywgTnVsbGFibGUoU3RyaW5nKVxuXHRcdF0pLFxuXG5cdEJhZ0VudHJ5ID0gZWUoJ0JhZ0VudHJ5Jyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFsgJ3ZhbHVlJywgVmFsIF0pLFxuXHRCbG9ja0JhZyA9IG1ha2VUeXBlKEJsb2NrVmFsKSgnQmxvY2tCYWcnLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAnbGluZXMnLCBbVW5pb24oTGluZUNvbnRlbnQsIEJhZ0VudHJ5KV0gXSksXG5cblx0TWFwRW50cnkgPSBlZSgnTWFwRW50cnknLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAna2V5JywgVmFsLCAndmFsJywgVmFsIF0pLFxuXHRCbG9ja01hcCA9IG1ha2VUeXBlKEJsb2NrVmFsKSgnQmxvY2tNYXAnLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAnbGluZXMnLCBbVW5pb24oTGluZUNvbnRlbnQsIE1hcEVudHJ5KV0gXSksXG5cblx0TG9jYWxBY2Nlc3MgPSBldignTG9jYWxBY2Nlc3MnLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAnbmFtZScsIFN0cmluZyBdLFxuXHRcdHsgfSxcblx0XHR7IGZvY3VzOiBsb2MgPT4gTG9jYWxBY2Nlc3MobG9jLCAnXycpIH0pLFxuXHRBc3NpZ24gPSBlZCgnQXNzaWduJyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFtcblx0XHRcdCdhc3NpZ25lZScsIExvY2FsRGVjbGFyZSxcblx0XHRcdCd2YWx1ZScsIFZhbFxuXHRcdF0sXG5cdFx0eyB9LFxuXHRcdHsgZm9jdXM6IChsb2MsIHZhbHVlKSA9PiBBc3NpZ24obG9jLCBMb2NhbERlY2xhcmUuZm9jdXMobG9jKSwgdmFsdWUpIH0pLFxuXHRBc3NpZ25EZXN0cnVjdHVyZSA9IGVkKCdBc3NpZ25EZXN0cnVjdHVyZScsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbXG5cdFx0XHQnYXNzaWduZWVzJywgW0xvY2FsRGVjbGFyZV0sXG5cdFx0XHQndmFsdWUnLCBWYWxcblx0XHRdLFxuXHRcdHtcblx0XHRcdC8vIEFsbCBhc3NpZ25lZXMgbXVzdCBzaGFyZSB0aGUgc2FtZSBraW5kLlxuXHRcdFx0a2luZCgpIHsgcmV0dXJuIHRoaXMuYXNzaWduZWVzWzBdLmtpbmQgfVxuXHRcdH0pLFxuXHRBc3NpZ25NdXRhdGUgPSBlZCgnQXNzaWduTXV0YXRlJyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFtcblx0XHRcdCduYW1lJywgU3RyaW5nLFxuXHRcdFx0J3ZhbHVlJywgVmFsXG5cdFx0XSksXG5cdEdsb2JhbEFjY2VzcyA9IGV2KCdHbG9iYWxBY2Nlc3MnLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAnbmFtZScsIEpzR2xvYmFscyBdKSxcblxuXHQvLyBNb2R1bGVcblx0VXNlRG8gPSBlZSgnVXNlRG8nLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAncGF0aCcsIFN0cmluZyBdKSxcblx0VXNlID0gZWUoJ1VzZScsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbXG5cdFx0XHQncGF0aCcsIFN0cmluZyxcblx0XHRcdCd1c2VkJywgW0xvY2FsRGVjbGFyZV0sXG5cdFx0XHQnb3BVc2VEZWZhdWx0JywgTnVsbGFibGUoTG9jYWxEZWNsYXJlKVxuXHRcdF0pLFxuXHRNb2R1bGUgPSBlZSgnTW9kdWxlJyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFtcblx0XHRcdCdkb1VzZXMnLCBbVXNlRG9dLFxuXHRcdFx0J3VzZXMnLCBbVXNlXSxcblx0XHRcdCdkZWJ1Z1VzZXMnLCBbVXNlXSxcblx0XHRcdCdsaW5lcycsIFtEb10sXG5cdFx0XHQnZXhwb3J0cycsIFtMb2NhbERlY2xhcmVdLFxuXHRcdFx0J29wRGVmYXVsdEV4cG9ydCcsIE51bGxhYmxlKFZhbClcblx0XHRdKSxcblxuXHQvLyBEYXRhXG5cdEJhZ1NpbXBsZSA9IGV2KCdMaXN0U2ltcGxlJyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFsgJ3BhcnRzJywgW1ZhbF0gXSksXG5cdE9ialBhaXIgPSBlZSgnT2JqUGFpcicsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbXG5cdFx0XHQna2V5JywgU3RyaW5nLFxuXHRcdFx0J3ZhbHVlJywgVmFsXG5cdFx0XSksXG5cdC8vIFZlcmlmaWVyIGNoZWNrcyB0aGF0IG5vIHR3byBwYWlycyBtYXkgaGF2ZSB0aGUgc2FtZSBrZXkuXG5cdE9ialNpbXBsZSA9IGV2KCdPYmpTaW1wbGUnLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAncGFpcnMnLCBbT2JqUGFpcl0gXSksXG5cblx0Ly8gQ2FzZVxuXHRQYXR0ZXJuID0gZWUoJ1BhdHRlcm4nLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0W1xuXHRcdFx0J3R5cGUnLCBWYWwsXG5cdFx0XHQnbG9jYWxzJywgW0xvY2FsRGVjbGFyZV0sXG5cdFx0XHQncGF0dGVybmVkJywgTG9jYWxBY2Nlc3Ncblx0XHRdKSxcblx0Q2FzZURvUGFydCA9IGVlKCdDYXNlRG9QYXJ0Jyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFtcblx0XHRcdCd0ZXN0JywgVW5pb24oVmFsLCBQYXR0ZXJuKSxcblx0XHRcdCdyZXN1bHQnLCBCbG9ja0RvXG5cdFx0XSksXG5cdENhc2VWYWxQYXJ0ID0gZWUoJ0Nhc2VWYWxQYXJ0Jyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFtcblx0XHRcdCd0ZXN0JywgVW5pb24oVmFsLCBQYXR0ZXJuKSxcblx0XHRcdCdyZXN1bHQnLCBCbG9ja1ZhbFxuXHRcdF0pLFxuXHRDYXNlRG8gPSBlZCgnQ2FzZURvJyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFtcblx0XHRcdCdvcENhc2VkJywgTnVsbGFibGUoQXNzaWduKSxcblx0XHRcdCdwYXJ0cycsIFtDYXNlRG9QYXJ0XSxcblx0XHRcdCdvcEVsc2UnLCBOdWxsYWJsZShCbG9ja0RvKVxuXHRcdF0pLFxuXHQvLyBVbmxpa2UgQ2FzZURvLCB0aGlzIGhhcyBgcmV0dXJuYCBzdGF0ZW1lbnRzLlxuXHRDYXNlVmFsID0gZXYoJ0Nhc2VWYWwnLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0W1xuXHRcdFx0J29wQ2FzZWQnLCBOdWxsYWJsZShBc3NpZ24pLFxuXHRcdFx0J3BhcnRzJywgW0Nhc2VWYWxQYXJ0XSxcblx0XHRcdCdvcEVsc2UnLCBOdWxsYWJsZShCbG9ja1ZhbClcblx0XHRdKSxcblxuXHQvLyBMb29wc1xuXHRGb3JEb1BsYWluID0gZWQoJ0ZvckRvUGxhaW4nLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAnYmxvY2snLCBCbG9ja0RvIF0pLFxuXHRGb3JEb1dpdGhCYWcgPSBlZCgnRm9yRG9XaXRoQmFnJyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFsgJ2VsZW1lbnQnLCBMb2NhbERlY2xhcmUsICdiYWcnLCBWYWwsICdibG9jaycsIEJsb2NrRG8gXSksXG5cdEJyZWFrRG8gPSBlZCgnQnJlYWtEbycsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbIF0pLFxuXG5cdC8vIE90aGVyIHN0YXRlbWVudHNcblx0SWZEbyA9IGVkKCdJZkRvJyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFsgJ3Rlc3QnLCBWYWwsICdyZXN1bHQnLCBCbG9ja0RvIF0pLFxuXHRVbmxlc3NEbyA9IGVkKCdVbmxlc3NEbycsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbICd0ZXN0JywgVmFsLCAncmVzdWx0JywgQmxvY2tEbyBdKSxcblxuXHQvLyBHZW5lcmF0b3JzXG5cdFlpZWxkID0gZXYoJ1lpZWxkJyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFsgJ3lpZWxkZWQnLCBWYWwgXSksXG5cdFlpZWxkVG8gPSBldignWWllbGRUbycsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbICd5aWVsZGVkVG8nLCBWYWwgXSksXG5cblx0Ly8gRXhwcmVzc2lvbnNcblx0U3BsYXQgPSBlZSgnU3BsYXQnLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAnc3BsYXR0ZWQnLCBWYWwgXSksXG5cdENhbGwgPSBldignQ2FsbCcsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbXG5cdFx0XHQnY2FsbGVkJywgVmFsLFxuXHRcdFx0J2FyZ3MnLCBbVW5pb24oVmFsLCBTcGxhdCldXG5cdFx0XSxcblx0XHR7IH0sXG5cdFx0e1xuXHRcdFx0Y29udGFpbnM6IChsb2MsIHRlc3RUeXBlLCB0ZXN0ZWQpID0+XG5cdFx0XHRcdENhbGwobG9jLCBTcGVjaWFsVmFsKGxvYywgU1ZfQ29udGFpbnMpLCBbIHRlc3RUeXBlLCB0ZXN0ZWQgXSksXG5cdFx0XHRzdWI6IChsb2MsIGFyZ3MpID0+IENhbGwobG9jLCBTcGVjaWFsVmFsKGxvYywgU1ZfU3ViKSwgYXJncylcblx0XHR9KSxcblx0QmxvY2tXcmFwID0gZXYoJ0Jsb2NrV3JhcCcsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbICdibG9jaycsIEJsb2NrVmFsIF0pLFxuXG5cdEZ1biA9IGV2KCdGdW4nLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0W1xuXHRcdFx0J2lzR2VuZXJhdG9yJywgQm9vbGVhbixcblx0XHRcdCdhcmdzJywgW0xvY2FsRGVjbGFyZV0sXG5cdFx0XHQnb3BSZXN0QXJnJywgTnVsbGFibGUoTG9jYWxEZWNsYXJlKSxcblx0XHRcdCdibG9jaycsIEJsb2NrLFxuXHRcdFx0J29wSW4nLCBOdWxsYWJsZShEZWJ1ZyksXG5cdFx0XHQvLyBJZiBub24tZW1wdHksIGJsb2NrIHNob3VsZCBiZSBhIEJsb2NrVmFsLFxuXHRcdFx0Ly8gYW5kIGVpdGhlciBpdCBoYXMgYSB0eXBlIG9yIG9wT3V0IGlzIG5vbi1lbXB0eS5cblx0XHRcdCdvcFJlc0RlY2xhcmUnLCBOdWxsYWJsZShMb2NhbERlY2xhcmVSZXMpLFxuXHRcdFx0J29wT3V0JywgTnVsbGFibGUoRGVidWcpLFxuXHRcdFx0J25hbWUnLCBOdWxsYWJsZShTdHJpbmcpXG5cdFx0XSksXG5cblx0TGF6eSA9IGV2KCdMYXp5Jyxcblx0XHQnVE9ETzpET0MnLFxuXHRcdFsgJ3ZhbHVlJywgVmFsIF0pLFxuXHROdW1iZXJMaXRlcmFsID0gZXYoJ051bWJlckxpdGVyYWwnLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAndmFsdWUnLCBOdW1iZXIgXSksXG5cdE1lbWJlciA9IGV2KCdNZW1iZXInLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0W1xuXHRcdFx0J29iamVjdCcsIFZhbCxcblx0XHRcdCduYW1lJywgU3RyaW5nXG5cdFx0XSksXG5cdC8vIHBhcnRzIGFyZSBTdHJpbmdzIGludGVybGVhdmVkIHdpdGggVmFscy5cblx0UXVvdGUgPSBldignUXVvdGUnLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAncGFydHMnLCBbT2JqZWN0XSBdLFxuXHRcdHsgfSxcblx0XHR7XG5cdFx0XHRmb3JTdHJpbmc6IChsb2MsIHN0cikgPT4gUXVvdGUobG9jLCBbIHN0ciBdKVxuXHRcdH0pLFxuXG5cdFNEX0RlYnVnZ2VyID0gMCxcblx0U3BlY2lhbERvID0gZWQoJ1NwZWNpYWxEbycsXG5cdFx0J1RPRE86RE9DJyxcblx0XHRbICdraW5kJywgTnVtYmVyIF0pLFxuXG5cdFNWX0NvbnRhaW5zID0gMCxcblx0U1ZfRmFsc2UgPSAxLFxuXHRTVl9OdWxsID0gMixcblx0U1ZfU3ViID0gMyxcblx0U1ZfVGhpcyA9IDQsXG5cdFNWX1RoaXNNb2R1bGVEaXJlY3RvcnkgPSA1LFxuXHRTVl9UcnVlID0gNixcblx0U1ZfVW5kZWZpbmVkID0gNyxcblx0Ly8gayBpcyBhIFNQXyoqKlxuXHRTcGVjaWFsVmFsID0gZXYoJ1NwZWNpYWwnLFxuXHRcdCdUT0RPOkRPQycsXG5cdFx0WyAna2luZCcsIE51bWJlciBdKVxuIl0sInNvdXJjZVJvb3QiOiIvc3JjIn0=