if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports', 'esast/dist/ast', 'esast/dist/util', 'esast/dist/specialize', '../U/Bag', '../U/Op', '../U/util', './transpile', './util'], function (exports, _esastDistAst, _esastDistUtil, _esastDistSpecialize, _UBag, _UOp, _UUtil, _transpile, _util) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	const transpileObjReturn = function (_, cx) {
		const nonDebugKeys = _.keys;
		// TODO: includeTypeChecks() is not the right method for this
		const keys = cx.opts.includeTypeChecks() ? _.keys.concat(_.debugKeys) : _.keys;
		// Make compilation deterministic.
		keys.sort();

		return _UOp.ifElse(_.opObjed, function (objed) {
			const astObjed = _transpile.t0(objed);
			if (_UBag.isEmpty(keys)) {
				_UUtil.assert(_UBag.isEmpty(nonDebugKeys));
				return astObjed;
			} else {
				const keysVals = _UBag.cat(_UBag.flatMap(keys, function (key) {
					return [_esastDistAst.Literal(key.name), _util.accessLocalDeclare(key)];
				}), _UBag.flatMap(_.opDisplayName, function (dn) {
					return [_util.LitStrDisplayName, _esastDistAst.Literal(dn)];
				}));
				const anyLazy = keys.some(function (key) {
					return key.isLazy;
				});
				const args = _UBag.unshift(astObjed, keysVals);
				return (anyLazy ? _util.msLset : _util.msSet)(args);
			}
		}, function () {
			_UUtil.assert(!_UBag.isEmpty(keys));
			const props = keys.map(function (key) {
				const val = _util.accessLocalDeclare(key);
				const id = _esastDistUtil.propertyIdOrLiteralCached(key.name);
				return key.isLazy ? _esastDistSpecialize.property('get', id, _esastDistUtil.thunk(val)) : _esastDistSpecialize.property('init', id, val);
			});
			const opPropDisplayName = _.opDisplayName.map(function (dn) {
				return _esastDistSpecialize.property('init', _util.IdDisplayName, _esastDistAst.Literal(dn));
			});
			return _esastDistAst.ObjectExpression(_UBag.cat(props, opPropDisplayName));
		});
	},
	      transpileObjSimple = function (_) {
		// Sort to keep compilation deterministic.
		const keys = Object.getOwnPropertyNames(_.keysVals).sort();
		return _esastDistAst.ObjectExpression(keys.map(function (key) {
			return _esastDistSpecialize.property('init', _esastDistUtil.propertyIdOrLiteralCached(key), _transpile.t0(_.keysVals[key]));
		}));
	};
	exports.transpileObjReturn = transpileObjReturn;
	exports.transpileObjSimple = transpileObjSimple;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEvY29tcGlsZS9wcml2YXRlL3RyYW5zcGlsZS90cmFuc3BpbGVPYmouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU08sT0FDTixrQkFBa0IsR0FBRyxVQUFDLENBQUMsRUFBRSxFQUFFLEVBQUs7QUFDL0IsUUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQTs7QUFFM0IsUUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFBOztBQUU5RSxNQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7O0FBRVgsU0FBTyxLQWJBLE1BQU0sQ0FhQyxDQUFDLENBQUMsT0FBTyxFQUN0QixVQUFBLEtBQUssRUFBSTtBQUNSLFNBQU0sUUFBUSxHQUFHLFdBYlosRUFBRSxDQWFhLEtBQUssQ0FBQyxDQUFBO0FBQzFCLE9BQUksTUFqQmUsT0FBTyxDQWlCZCxJQUFJLENBQUMsRUFBRTtBQUNsQixXQWhCSSxNQUFNLENBZ0JILE1BbEJXLE9BQU8sQ0FrQlYsWUFBWSxDQUFDLENBQUMsQ0FBQTtBQUM3QixXQUFPLFFBQVEsQ0FBQTtJQUNmLE1BQU07QUFDTixVQUFNLFFBQVEsR0FBRyxNQXJCYixHQUFHLENBc0JOLE1BdEJRLE9BQU8sQ0FzQlAsSUFBSSxFQUFFLFVBQUEsR0FBRztZQUFJLENBQUUsY0F6QnBCLE9BQU8sQ0F5QnFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQWxCdkMsa0JBQWtCLENBa0J3QyxHQUFHLENBQUMsQ0FBRTtLQUFBLENBQUMsRUFDcEUsTUF2QlEsT0FBTyxDQXVCUCxDQUFDLENBQUMsYUFBYSxFQUFFLFVBQUEsRUFBRTtZQUFJLE9BbkJzQixpQkFBaUIsRUFtQm5CLGNBMUJoRCxPQUFPLENBMEJpRCxFQUFFLENBQUMsQ0FBQztLQUFBLENBQUMsQ0FBQyxDQUFBO0FBQ2xFLFVBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQUksR0FBRyxDQUFDLE1BQU07S0FBQSxDQUFDLENBQUE7QUFDNUMsVUFBTSxJQUFJLEdBQUcsTUF6QmMsT0FBTyxDQXlCYixRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFDeEMsV0FBTyxDQUFDLE9BQU8sU0F0QlMsTUFBTSxTQUFFLEtBQUssQ0FzQkwsQ0FBRSxJQUFJLENBQUMsQ0FBQTtJQUN2QztHQUNELEVBQ0QsWUFBTTtBQUNMLFVBNUJLLE1BQU0sQ0E0QkosQ0FBQyxNQTlCVyxPQUFPLENBOEJWLElBQUksQ0FBQyxDQUFDLENBQUE7QUFDdEIsU0FBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsRUFBSTtBQUM3QixVQUFNLEdBQUcsR0FBRyxNQTVCUixrQkFBa0IsQ0E0QlMsR0FBRyxDQUFDLENBQUE7QUFDbkMsVUFBTSxFQUFFLEdBQUcsZUFuQ1AseUJBQXlCLENBbUNRLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUM5QyxXQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQ2hCLHFCQXBDRyxRQUFRLENBb0NGLEtBQUssRUFBRSxFQUFFLEVBQUUsZUFyQ1UsS0FBSyxDQXFDVCxHQUFHLENBQUMsQ0FBQyxHQUMvQixxQkFyQ0csUUFBUSxDQXFDRixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQzFCLENBQUMsQ0FBQTtBQUNGLFNBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFO1dBQy9DLHFCQXhDSSxRQUFRLENBd0NILE1BQU0sUUFuQ3dCLGFBQWEsRUFtQ3BCLGNBMUM1QixPQUFPLENBMEM2QixFQUFFLENBQUMsQ0FBQztJQUFBLENBQUMsQ0FBQTtBQUM5QyxVQUFPLGNBM0NPLGdCQUFnQixDQTJDTixNQXhDbkIsR0FBRyxDQXdDb0IsS0FBSyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQTtHQUN0RCxDQUFDLENBQUE7RUFDSDtPQUVELGtCQUFrQixHQUFHLFVBQUEsQ0FBQyxFQUFJOztBQUV6QixRQUFNLElBQUksR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBO0FBQzFELFNBQU8sY0FsRFMsZ0JBQWdCLENBa0RSLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHO1VBQ25DLHFCQWpETSxRQUFRLENBaURMLE1BQU0sRUFBRSxlQWxEWCx5QkFBeUIsQ0FrRFksR0FBRyxDQUFDLEVBQUUsV0E3QzNDLEVBQUUsQ0E2QzRDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztHQUFBLENBQUMsQ0FBQyxDQUFBO0VBQ3hFLENBQUE7U0ExQ0Qsa0JBQWtCLEdBQWxCLGtCQUFrQjtTQXFDbEIsa0JBQWtCLEdBQWxCLGtCQUFrQiIsImZpbGUiOiJtZXRhL2NvbXBpbGUvcHJpdmF0ZS90cmFuc3BpbGUvdHJhbnNwaWxlT2JqLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGl0ZXJhbCwgT2JqZWN0RXhwcmVzc2lvbiB9IGZyb20gJ2VzYXN0L2Rpc3QvYXN0J1xuaW1wb3J0IHsgcHJvcGVydHlJZE9yTGl0ZXJhbENhY2hlZCwgdGh1bmsgfSBmcm9tICdlc2FzdC9kaXN0L3V0aWwnXG5pbXBvcnQgeyBwcm9wZXJ0eSB9IGZyb20gJ2VzYXN0L2Rpc3Qvc3BlY2lhbGl6ZSdcbmltcG9ydCB7IGNhdCwgZmxhdE1hcCwgaXNFbXB0eSwgdW5zaGlmdCB9IGZyb20gJy4uL1UvQmFnJ1xuaW1wb3J0IHsgaWZFbHNlIH0gZnJvbSAnLi4vVS9PcCdcbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4uL1UvdXRpbCdcbmltcG9ydCB7IHQwIH0gZnJvbSAnLi90cmFuc3BpbGUnXG5pbXBvcnQgeyBhY2Nlc3NMb2NhbERlY2xhcmUsIG1zTHNldCwgbXNTZXQsIElkRGlzcGxheU5hbWUsIExpdFN0ckRpc3BsYXlOYW1lIH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3Rcblx0dHJhbnNwaWxlT2JqUmV0dXJuID0gKF8sIGN4KSA9PiB7XG5cdFx0Y29uc3Qgbm9uRGVidWdLZXlzID0gXy5rZXlzXG5cdFx0Ly8gVE9ETzogaW5jbHVkZVR5cGVDaGVja3MoKSBpcyBub3QgdGhlIHJpZ2h0IG1ldGhvZCBmb3IgdGhpc1xuXHRcdGNvbnN0IGtleXMgPSBjeC5vcHRzLmluY2x1ZGVUeXBlQ2hlY2tzKCkgPyBfLmtleXMuY29uY2F0KF8uZGVidWdLZXlzKSA6IF8ua2V5c1xuXHRcdC8vIE1ha2UgY29tcGlsYXRpb24gZGV0ZXJtaW5pc3RpYy5cblx0XHRrZXlzLnNvcnQoKVxuXG5cdFx0cmV0dXJuIGlmRWxzZShfLm9wT2JqZWQsXG5cdFx0XHRvYmplZCA9PiB7XG5cdFx0XHRcdGNvbnN0IGFzdE9iamVkID0gdDAob2JqZWQpXG5cdFx0XHRcdGlmIChpc0VtcHR5KGtleXMpKSB7XG5cdFx0XHRcdFx0YXNzZXJ0KGlzRW1wdHkobm9uRGVidWdLZXlzKSlcblx0XHRcdFx0XHRyZXR1cm4gYXN0T2JqZWRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCBrZXlzVmFscyA9IGNhdChcblx0XHRcdFx0XHRcdGZsYXRNYXAoa2V5cywga2V5ID0+IFsgTGl0ZXJhbChrZXkubmFtZSksIGFjY2Vzc0xvY2FsRGVjbGFyZShrZXkpIF0pLFxuXHRcdFx0XHRcdFx0ZmxhdE1hcChfLm9wRGlzcGxheU5hbWUsIGRuID0+IFtMaXRTdHJEaXNwbGF5TmFtZSwgTGl0ZXJhbChkbildKSlcblx0XHRcdFx0XHRjb25zdCBhbnlMYXp5ID0ga2V5cy5zb21lKGtleSA9PiBrZXkuaXNMYXp5KVxuXHRcdFx0XHRcdGNvbnN0IGFyZ3MgPSB1bnNoaWZ0KGFzdE9iamVkLCBrZXlzVmFscylcblx0XHRcdFx0XHRyZXR1cm4gKGFueUxhenkgPyBtc0xzZXQgOiBtc1NldCkoYXJncylcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCgpID0+IHtcblx0XHRcdFx0YXNzZXJ0KCFpc0VtcHR5KGtleXMpKVxuXHRcdFx0XHRjb25zdCBwcm9wcyA9IGtleXMubWFwKGtleSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYWNjZXNzTG9jYWxEZWNsYXJlKGtleSlcblx0XHRcdFx0XHRjb25zdCBpZCA9IHByb3BlcnR5SWRPckxpdGVyYWxDYWNoZWQoa2V5Lm5hbWUpXG5cdFx0XHRcdFx0cmV0dXJuIGtleS5pc0xhenkgP1xuXHRcdFx0XHRcdFx0cHJvcGVydHkoJ2dldCcsIGlkLCB0aHVuayh2YWwpKSA6XG5cdFx0XHRcdFx0XHRwcm9wZXJ0eSgnaW5pdCcsIGlkLCB2YWwpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGNvbnN0IG9wUHJvcERpc3BsYXlOYW1lID0gXy5vcERpc3BsYXlOYW1lLm1hcChkbiA9PlxuXHRcdFx0XHRcdHByb3BlcnR5KCdpbml0JywgSWREaXNwbGF5TmFtZSwgTGl0ZXJhbChkbikpKVxuXHRcdFx0XHRyZXR1cm4gT2JqZWN0RXhwcmVzc2lvbihjYXQocHJvcHMsIG9wUHJvcERpc3BsYXlOYW1lKSlcblx0XHRcdH0pXG5cdH0sXG5cblx0dHJhbnNwaWxlT2JqU2ltcGxlID0gXyA9PiB7XG5cdFx0Ly8gU29ydCB0byBrZWVwIGNvbXBpbGF0aW9uIGRldGVybWluaXN0aWMuXG5cdFx0Y29uc3Qga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKF8ua2V5c1ZhbHMpLnNvcnQoKVxuXHRcdHJldHVybiBPYmplY3RFeHByZXNzaW9uKGtleXMubWFwKGtleSA9PlxuXHRcdFx0cHJvcGVydHkoJ2luaXQnLCBwcm9wZXJ0eUlkT3JMaXRlcmFsQ2FjaGVkKGtleSksIHQwKF8ua2V5c1ZhbHNba2V5XSkpKSlcblx0fVxuIl0sInNvdXJjZVJvb3QiOiIvc3JjIn0=