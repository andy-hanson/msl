if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports', 'module', 'esast/dist/ast', 'esast/dist/util', 'esast/dist/specialize', '../manglePath', '../U/Bag', '../U/Op', './esast-util', './transpile', './util'], function (exports, module, _esastDistAst, _esastDistUtil, _esastDistSpecialize, _manglePath, _UBag, _UOp, _esastUtil, _transpile, _util) {
	'use strict';

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

	var _manglePath2 = _interopRequire(_manglePath);

	/*
 'use strict';
 if (typeof define !== 'function')
 	var define = require('amdefine')(module);
 define(['exports', 'a', 'b', 'c'], function(exports) {
 	// Fake exports -- just a getter.
 	exports._get = _ms.lazy(function() {
 		const exports = {} // Real exports
 		... imports ...
 		{
 			... exports ...
 		}
 		return exports
 	})
 })
 */

	module.exports = function (_, cx) {
		const allUses = _.doUses.concat(_.uses, _.debugUses);
		const amdNames = _esastDistAst.ArrayExpression(AmdFirstUses.concat(allUses.map(function (use) {
			return _esastDistAst.Literal(_manglePath2(use.path));
		})));
		const useIdentifiers = allUses.map(useIdentifier);
		const amdArgs = AmdFirstArgs.concat(useIdentifiers);
		const useDos = _.doUses.map(function (use, i) {
			const d = _esastDistAst.ExpressionStatement(_util.msGetModule([useIdentifiers[i]]));
			d.loc = use.loc;
			return d;
		});
		const allUseDeclarators = _UBag.flatMap(_.uses.concat(_.debugUses), function (use, i) {
			return useDeclarators(cx, use, useIdentifiers[i + _.doUses.length]);
		});
		const opUseDeclare = _UOp.opIf(!_UBag.isEmpty(allUseDeclarators), function () {
			return _esastDistAst.VariableDeclaration('const', allUseDeclarators);
		});

		// TODO: Some way of determining when it's OK for a module to not be lazy.
		const isLazy = cx.opts.lazyModule();

		const lead = useDos.concat(opUseDeclare, _UOp.opIf(isLazy, function () {
			return DeclareExports;
		}));
		const trail = [_esastDistAst.ReturnStatement(_util.IdExports)];
		const moduleBody = _transpile.t3(_.block, lead, _UOp.None, trail);
		const body = isLazy ? _esastDistAst.BlockStatement([lazyBody(moduleBody)]) : moduleBody;

		const doDefine = _esastDistAst.ExpressionStatement(_esastDistAst.CallExpression(_util.IdDefine, [amdNames, _esastDistAst.FunctionExpression(null, amdArgs, body)]));

		return _esastDistAst.Program([UseStrict].concat(_UOp.opIf(cx.opts.amdefine(), function () {
			return AmdefineHeader;
		}), [doDefine]));
	};

	const useDeclarators = function (cx, _, moduleIdentifier) {
		// TODO: Could be neater about this
		const isLazy = (_UBag.isEmpty(_.used) ? _.opUseDefault[0] : _.used[0]).isLazy;
		const value = (isLazy ? _util.msLazyGetModule : _util.msGetModule)([moduleIdentifier]);

		const usedDefault = _.opUseDefault.map(function (def) {
			const defexp = _util.msGetDefaultExport([moduleIdentifier]);
			const val = isLazy ? _util.lazyWrap(defexp) : defexp;
			const vd = _esastDistAst.VariableDeclarator(_esastUtil.idForDeclareCached(def), val);
			vd.loc = def.loc;
			return vd;
		});

		const usedDestruct = _UBag.isEmpty(_.used) ? [] : _util.makeDestructureDeclarators(cx, _.loc, _.used, isLazy, value, '=', true);
		usedDestruct.forEach(function (_) {
			return _.loc = _.loc;
		});

		return usedDefault.concat(usedDestruct);
	};

	const useIdentifier = function (use, i) {
		return _esastDistUtil.idCached('' + _UBag.last(use.path.split('/')) + '_' + i);
	},
	     

	// const exports = { }
	DeclareExports = _esastDistAst.VariableDeclaration('const', [_esastDistAst.VariableDeclarator(_util.IdExports, _esastDistAst.ObjectExpression([]))]),
	      lazyBody = function (body) {
		return _esastDistAst.ExpressionStatement(_esastDistSpecialize.assignmentExpressionPlain(_esastDistUtil.member(_util.IdExports, '_get'), _util.msLazy([_esastDistAst.FunctionExpression(null, [], body)])));
	},
	     

	// if (typeof define !== 'function') var define = require('amdefine')(module)
	AmdefineHeader = _esastDistAst.IfStatement(_esastDistAst.BinaryExpression('!==', _esastDistAst.UnaryExpression('typeof', _util.IdDefine), _esastDistAst.Literal('function')), _esastDistAst.VariableDeclaration('var', [_esastDistAst.VariableDeclarator(_util.IdDefine, _esastDistAst.CallExpression(_esastDistAst.CallExpression(_esastDistAst.Identifier('require'), [_esastDistAst.Literal('amdefine')]), [_util.IdModule]))])),
	      UseStrict = _esastDistAst.ExpressionStatement(_esastDistAst.Literal('use strict')),
	      AmdFirstUses = [_esastDistAst.Literal('exports')],
	      AmdFirstArgs = [_util.IdExports];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEvY29tcGlsZS9wcml2YXRlL3RyYW5zcGlsZS90cmFuc3BpbGVNb2R1bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQStCZSxVQUFDLENBQUMsRUFBRSxFQUFFLEVBQUs7QUFDekIsUUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDcEQsUUFBTSxRQUFRLEdBQUcsY0FqQ1QsZUFBZSxDQWlDVSxZQUFZLENBQUMsTUFBTSxDQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRztVQUFJLGNBakNrQyxPQUFPLENBaUNqQyxhQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUFBLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDcEQsUUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUNqRCxRQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBQ25ELFFBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLENBQUMsRUFBSztBQUN2QyxTQUFNLENBQUMsR0FBRyxjQXJDWCxtQkFBbUIsQ0FxQ1ksTUExQi9CLFdBQVcsQ0EwQmdDLENBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ2pFLElBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQTtBQUNmLFVBQU8sQ0FBQyxDQUFBO0dBQ1IsQ0FBQyxDQUFBO0FBQ0YsUUFBTSxpQkFBaUIsR0FBRyxNQW5DbEIsT0FBTyxDQW1DbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQUMsR0FBRyxF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bUJBQW1CLENBcUdoQyxLQUFLLEVBQUUsQ0FDMUIsY0F0R3FELGtCQUFrQixPQVNqRSxRQUFRLEVBNkZlLGNBeEc0QixjQUFjLENBeUd0RSxjQXpHd0QsY0FBYyxDQXlHdkQsY0F6R3lELFVBQVUsQ0F5R3hELFNBQVMsQ0FBQyxFQUFFLENBQUUsY0F4R1csT0FBTyxDQXdHVixVQUFVLENBQUMsQ0FBRSxDQUFDLEVBQzlELE9BL0YwQixRQUFRLENBK0Z0QixDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUM7T0FFckIsU0FBUyxHQUFHLGNBM0daLG1CQUFtQixDQTJHYSxjQTNHc0IsT0FBTyxDQTJHckIsWUFBWSxDQUFDLENBQUM7T0FFdEQsWUFBWSxHQUFHLENBQUUsY0E3R3FDLE9BQU8sQ0E2R3BDLFNBQVMsQ0FBQyxDQUFFO09BQ3JDLFlBQVksR0FBRyxPQXBHRyxTQUFTLENBb0dDLENBQUEiLCJmaWxlIjoibWV0YS9jb21waWxlL3ByaXZhdGUvdHJhbnNwaWxlL3RyYW5zcGlsZU1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFycmF5RXhwcmVzc2lvbiwgQmluYXJ5RXhwcmVzc2lvbiwgQmxvY2tTdGF0ZW1lbnQsIENhbGxFeHByZXNzaW9uLCBJZGVudGlmaWVyLFxuXHRFeHByZXNzaW9uU3RhdGVtZW50LCBGdW5jdGlvbkV4cHJlc3Npb24sIElmU3RhdGVtZW50LCBMaXRlcmFsLCBPYmplY3RFeHByZXNzaW9uLCBQcm9ncmFtLFxuXHRSZXR1cm5TdGF0ZW1lbnQsIFVuYXJ5RXhwcmVzc2lvbiwgVmFyaWFibGVEZWNsYXJhdGlvbiwgVmFyaWFibGVEZWNsYXJhdG9yXG5cdH0gZnJvbSAnZXNhc3QvZGlzdC9hc3QnXG5pbXBvcnQgeyBpZENhY2hlZCwgbWVtYmVyIH0gZnJvbSAnZXNhc3QvZGlzdC91dGlsJ1xuaW1wb3J0IHsgYXNzaWdubWVudEV4cHJlc3Npb25QbGFpbiB9IGZyb20gJ2VzYXN0L2Rpc3Qvc3BlY2lhbGl6ZSdcbmltcG9ydCBtYW5nbGVQYXRoIGZyb20gJy4uL21hbmdsZVBhdGgnXG5pbXBvcnQgeyBmbGF0TWFwLCBpc0VtcHR5LCBsYXN0IH0gZnJvbSAnLi4vVS9CYWcnXG5pbXBvcnQgeyBOb25lLCBvcElmIH0gZnJvbSAnLi4vVS9PcCdcbmltcG9ydCB7IGlkRm9yRGVjbGFyZUNhY2hlZCB9IGZyb20gJy4vZXNhc3QtdXRpbCdcbmltcG9ydCB7IHQzIH0gZnJvbSAnLi90cmFuc3BpbGUnXG5pbXBvcnQgeyBJZERlZmluZSwgSWRFeHBvcnRzLCBJZE1vZHVsZSwgbGF6eVdyYXAsXG5cdG1zR2V0TW9kdWxlLCBtc0xhenlHZXRNb2R1bGUsIG1zR2V0RGVmYXVsdEV4cG9ydCxcblx0bWFrZURlc3RydWN0dXJlRGVjbGFyYXRvcnMsIG1zTGF6eSB9IGZyb20gJy4vdXRpbCdcblxuLypcbid1c2Ugc3RyaWN0JztcbmlmICh0eXBlb2YgZGVmaW5lICE9PSAnZnVuY3Rpb24nKVxuXHR2YXIgZGVmaW5lID0gcmVxdWlyZSgnYW1kZWZpbmUnKShtb2R1bGUpO1xuZGVmaW5lKFsnZXhwb3J0cycsICdhJywgJ2InLCAnYyddLCBmdW5jdGlvbihleHBvcnRzKSB7XG5cdC8vIEZha2UgZXhwb3J0cyAtLSBqdXN0IGEgZ2V0dGVyLlxuXHRleHBvcnRzLl9nZXQgPSBfbXMubGF6eShmdW5jdGlvbigpIHtcblx0XHRjb25zdCBleHBvcnRzID0ge30gLy8gUmVhbCBleHBvcnRzXG5cdFx0Li4uIGltcG9ydHMgLi4uXG5cdFx0e1xuXHRcdFx0Li4uIGV4cG9ydHMgLi4uXG5cdFx0fVxuXHRcdHJldHVybiBleHBvcnRzXG5cdH0pXG59KVxuKi9cbmV4cG9ydCBkZWZhdWx0IChfLCBjeCkgPT4ge1xuXHRjb25zdCBhbGxVc2VzID0gXy5kb1VzZXMuY29uY2F0KF8udXNlcywgXy5kZWJ1Z1VzZXMpXG5cdGNvbnN0IGFtZE5hbWVzID0gQXJyYXlFeHByZXNzaW9uKEFtZEZpcnN0VXNlcy5jb25jYXQoXG5cdFx0YWxsVXNlcy5tYXAodXNlID0+IExpdGVyYWwobWFuZ2xlUGF0aCh1c2UucGF0aCkpKSkpXG5cdGNvbnN0IHVzZUlkZW50aWZpZXJzID0gYWxsVXNlcy5tYXAodXNlSWRlbnRpZmllcilcblx0Y29uc3QgYW1kQXJncyA9IEFtZEZpcnN0QXJncy5jb25jYXQodXNlSWRlbnRpZmllcnMpXG5cdGNvbnN0IHVzZURvcyA9IF8uZG9Vc2VzLm1hcCgodXNlLCBpKSA9PiB7XG5cdFx0Y29uc3QgZCA9IEV4cHJlc3Npb25TdGF0ZW1lbnQobXNHZXRNb2R1bGUoWyB1c2VJZGVudGlmaWVyc1tpXSBdKSlcblx0XHRkLmxvYyA9IHVzZS5sb2Ncblx0XHRyZXR1cm4gZFxuXHR9KVxuXHRjb25zdCBhbGxVc2VEZWNsYXJhdG9ycyA9IGZsYXRNYXAoXy51c2VzLmNvbmNhdChfLmRlYnVnVXNlcyksICh1c2UsIGkpID0+XG5cdFx0dXNlRGVjbGFyYXRvcnMoY3gsIHVzZSwgdXNlSWRlbnRpZmllcnNbaSArIF8uZG9Vc2VzLmxlbmd0aF0pKVxuXHRjb25zdCBvcFVzZURlY2xhcmUgPSBvcElmKCFpc0VtcHR5KGFsbFVzZURlY2xhcmF0b3JzKSxcblx0XHQoKSA9PiBWYXJpYWJsZURlY2xhcmF0aW9uKCdjb25zdCcsIGFsbFVzZURlY2xhcmF0b3JzKSlcblxuXHQvLyBUT0RPOiBTb21lIHdheSBvZiBkZXRlcm1pbmluZyB3aGVuIGl0J3MgT0sgZm9yIGEgbW9kdWxlIHRvIG5vdCBiZSBsYXp5LlxuXHRjb25zdCBpc0xhenkgPSBjeC5vcHRzLmxhenlNb2R1bGUoKVxuXG5cdGNvbnN0IGxlYWQgPSB1c2VEb3MuY29uY2F0KG9wVXNlRGVjbGFyZSwgb3BJZihpc0xhenksICgpID0+IERlY2xhcmVFeHBvcnRzKSlcblx0Y29uc3QgdHJhaWwgPSBbIFJldHVyblN0YXRlbWVudChJZEV4cG9ydHMpIF1cblx0Y29uc3QgbW9kdWxlQm9keSA9IHQzKF8uYmxvY2ssIGxlYWQsIE5vbmUsIHRyYWlsKVxuXHRjb25zdCBib2R5ID1cblx0XHRpc0xhenkgP1xuXHRcdFx0QmxvY2tTdGF0ZW1lbnQoWyBsYXp5Qm9keShtb2R1bGVCb2R5KSBdKVxuXHRcdFx0OiBtb2R1bGVCb2R5XG5cblx0Y29uc3QgZG9EZWZpbmUgPSBFeHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdENhbGxFeHByZXNzaW9uKElkRGVmaW5lLCBbXG5cdFx0XHRhbWROYW1lcyxcblx0XHRcdEZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBhbWRBcmdzLCBib2R5KSBdKSlcblxuXHRyZXR1cm4gUHJvZ3JhbShbIFVzZVN0cmljdCBdLmNvbmNhdChcblx0XHRvcElmKGN4Lm9wdHMuYW1kZWZpbmUoKSwgKCkgPT4gQW1kZWZpbmVIZWFkZXIpLFxuXHRcdFsgZG9EZWZpbmUgXSkpXG59XG5cbmNvbnN0IHVzZURlY2xhcmF0b3JzID0gKGN4LCBfLCBtb2R1bGVJZGVudGlmaWVyKSA9PiB7XG5cdC8vIFRPRE86IENvdWxkIGJlIG5lYXRlciBhYm91dCB0aGlzXG5cdGNvbnN0IGlzTGF6eSA9IChpc0VtcHR5KF8udXNlZCkgPyBfLm9wVXNlRGVmYXVsdFswXSA6IF8udXNlZFswXSkuaXNMYXp5XG5cdGNvbnN0IHZhbHVlID0gKGlzTGF6eSA/IG1zTGF6eUdldE1vZHVsZSA6IG1zR2V0TW9kdWxlKShbIG1vZHVsZUlkZW50aWZpZXIgXSlcblxuXHRjb25zdCB1c2VkRGVmYXVsdCA9IF8ub3BVc2VEZWZhdWx0Lm1hcChkZWYgPT4ge1xuXHRcdGNvbnN0IGRlZmV4cCA9IG1zR2V0RGVmYXVsdEV4cG9ydChbIG1vZHVsZUlkZW50aWZpZXIgXSlcblx0XHRjb25zdCB2YWwgPSBpc0xhenkgPyBsYXp5V3JhcChkZWZleHApIDogZGVmZXhwXG5cdFx0Y29uc3QgdmQgPSBWYXJpYWJsZURlY2xhcmF0b3IoaWRGb3JEZWNsYXJlQ2FjaGVkKGRlZiksIHZhbClcblx0XHR2ZC5sb2MgPSBkZWYubG9jXG5cdFx0cmV0dXJuIHZkXG5cdH0pXG5cblx0Y29uc3QgdXNlZERlc3RydWN0ID0gaXNFbXB0eShfLnVzZWQpID8gW10gOlxuXHRcdG1ha2VEZXN0cnVjdHVyZURlY2xhcmF0b3JzKGN4LCBfLmxvYywgXy51c2VkLCBpc0xhenksIHZhbHVlLCAnPScsIHRydWUpXG5cdHVzZWREZXN0cnVjdC5mb3JFYWNoKF8gPT4gXy5sb2MgPSBfLmxvYylcblxuXHRyZXR1cm4gdXNlZERlZmF1bHQuY29uY2F0KHVzZWREZXN0cnVjdClcbn1cblxuY29uc3Rcblx0dXNlSWRlbnRpZmllciA9ICh1c2UsIGkpID0+IGlkQ2FjaGVkKGAke2xhc3QodXNlLnBhdGguc3BsaXQoJy8nKSl9XyR7aX1gKSxcblxuXHQvLyBjb25zdCBleHBvcnRzID0geyB9XG5cdERlY2xhcmVFeHBvcnRzID0gVmFyaWFibGVEZWNsYXJhdGlvbignY29uc3QnLCBbXG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yKElkRXhwb3J0cywgT2JqZWN0RXhwcmVzc2lvbihbXSkpXSksXG5cblx0bGF6eUJvZHkgPSBib2R5ID0+XG5cdFx0RXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRcdGFzc2lnbm1lbnRFeHByZXNzaW9uUGxhaW4obWVtYmVyKElkRXhwb3J0cywgJ19nZXQnKSwgbXNMYXp5KFtcblx0XHRcdFx0RnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIFsgXSwgYm9keSldKSkpLFxuXG5cdC8vIGlmICh0eXBlb2YgZGVmaW5lICE9PSAnZnVuY3Rpb24nKSB2YXIgZGVmaW5lID0gcmVxdWlyZSgnYW1kZWZpbmUnKShtb2R1bGUpXG5cdEFtZGVmaW5lSGVhZGVyID0gSWZTdGF0ZW1lbnQoXG5cdFx0QmluYXJ5RXhwcmVzc2lvbignIT09JywgVW5hcnlFeHByZXNzaW9uKCd0eXBlb2YnLCBJZERlZmluZSksIExpdGVyYWwoJ2Z1bmN0aW9uJykpLFxuXHRcdFZhcmlhYmxlRGVjbGFyYXRpb24oJ3ZhcicsIFtcblx0XHRcdFZhcmlhYmxlRGVjbGFyYXRvcihJZERlZmluZSwgQ2FsbEV4cHJlc3Npb24oXG5cdFx0XHRcdENhbGxFeHByZXNzaW9uKElkZW50aWZpZXIoJ3JlcXVpcmUnKSwgWyBMaXRlcmFsKCdhbWRlZmluZScpIF0pLFxuXHRcdFx0XHRbIElkTW9kdWxlIF0pKSBdKSksXG5cblx0VXNlU3RyaWN0ID0gRXhwcmVzc2lvblN0YXRlbWVudChMaXRlcmFsKCd1c2Ugc3RyaWN0JykpLFxuXG5cdEFtZEZpcnN0VXNlcyA9IFsgTGl0ZXJhbCgnZXhwb3J0cycpIF0sXG5cdEFtZEZpcnN0QXJncyA9IFsgSWRFeHBvcnRzIF1cbiJdLCJzb3VyY2VSb290IjoiL3NyYyJ9