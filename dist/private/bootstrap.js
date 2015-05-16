if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	const pAdd = function (object, key, value) {
		return Object.defineProperty(object, key, {
			value: value,
			enumerable: true,
			// TODO:ES6 `writable` shouldn't need to be explicit
			writable: false
		});
	};

	exports.pAdd = pAdd;
	// region Builtin Functions for use by the compiler
	const
	// This object contains functions called upon by compiled code.
	ms = {},
	      msDef = function (name, fun) {
		return pAdd(ms, name, fun);
	},
	      msCall = function (name) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return ms[name].apply(ms, args);
	};

	exports.ms = ms;
	exports.msDef = msDef;
	exports.msCall = msCall;
	pAdd(global, '_ms', ms);

	const msDefs = {
		lazyGetModule: function (module) {
			if (module === undefined) throw new Error('Module undefined.');
			return module._get instanceof ms.Lazy ? module._get : ms.lazy(function () {
				return module;
			});
		},

		getModule: function (module) {
			if (module === undefined) throw new Error('Module undefined.');
			return module._get instanceof ms.Lazy ? module._get.get() : module;
		},

		getDefaultExport: function (module) {
			if (module === undefined) throw new Error('Module undefined.');
			const mod = ms.getModule(module);
			return mod.default === undefined ? mod : mod.default;
		},

		lazyProp: function (lazyObject, key) {
			if (!(lazyObject instanceof ms.Lazy)) throw new Error('Expected a Lazy, got: ' + lazyObject);
			return ms.lazy(function () {
				return lazyObject.get()[key];
			});
		},

		get: function (object, key) {
			const _ = object[key];
			if (_ === undefined) throw new Error('Module ' + object.displayName + ' does not have ' + key);
			return _;
		},

		bool: function (b) {
			if (typeof b !== 'boolean') throw new Error('Expected Boolean, got ' + b);
			return b;
		},

		// Used for splat calls.
		// TODO:ES6 Shouldn't need. `fun(...arg)` should work for any iterable.
		arr: function (a) {
			if (a instanceof Array) return a;
			const out = [];
			for (let em of ms.iterator(a)) out.push(em);
			return out;
		},

		// For use by Obj-Type.ms generated code.
		checkNoExtras: function (_this, _, rtName) {
			// If there was some key in `_` that we didn't copy:
			if (Object.keys(_).length > Object.keys(_this).length) Object.getOwnPropertyNames(_).forEach(function (name) {
				if (name !== 'displayName') if (!Object.prototype.hasOwnProperty.call(_this, name)) throw new Error('Extra prop ' + name + ' for ' + rtName);
			});
		},

		Lazy: function Lazy(get) {
			var _this2 = this;

			this.get = function () {
				_this2.get = function () {
					throw new Error('Lazy value depends on itself. Thunk: ' + get);
				};
				const _ = get();
				_this2.get = function () {
					return _;
				};
				return _;
			};
		},
		lazy: function (_) {
			return new ms.Lazy(_);
		},
		unlazy: function (_) {
			return _ instanceof ms.Lazy ? _.get() : _;
		},

		set: function (_, k0, v0, k1, v1, k2, v2, k3) {
			_[k0] = v0;
			if (k1 === undefined) return _;
			_[k1] = v1;
			if (k2 === undefined) return _;
			_[k2] = v2;
			if (k3 === undefined) return _;
			for (let i = 7; i < arguments.length; i = i + 2) _[arguments[i]] = arguments[i + 1];
			return _;
		},

		lset: function (_, k0, v0, k1, v1, k2, v2, k3) {
			setOrLazy(_, k0, v0);
			if (k1 === undefined) return _;
			setOrLazy(_, k1, v1);
			if (k2 === undefined) return _;
			setOrLazy(_, k2, v2);
			if (k3 === undefined) return _;
			for (let i = 7; i < arguments.length; i = i + 2) setOrLazy(_, arguments[i], arguments[i + 1]);
			return _;
		}
	};
	Object.keys(msDefs).forEach(function (_) {
		return msDef(_, msDefs[_]);
	});

	const setOrLazy = function (obj, key, val) {
		if (val instanceof ms.Lazy) Object.setProperty(obj, key, { get: function () {
				return ms.unlazy(val);
			} });else pAdd(obj, key, val);
	};

	const msDefTemp = function (name, fun) {
		return ms[name] = fun;
	};

	msDefTemp('show', function (_) {
		if (typeof _ !== 'string' && typeof _ !== 'number') throw new Error('Only use Strings or Numbers here until this is overridden by show.ms. Got:\n' + _);
		return _.toString();
	});

	// region Contains
	// Some Types want to implement contains? before it is officially defined.
	const containsImplSymbol = 'impl-contains?';
	exports.containsImplSymbol = containsImplSymbol;
	const implContains = function (type, impl) {
		return Object.defineProperty(type.prototype, containsImplSymbol, {
			value: impl,
			enumerable: false
		});
	};

	exports.implContains = implContains;
	// Overwritten by Type/index.ms to actually do type checking.
	msDefTemp('checkContains', function (type, val) {
		return val;
	});

	Object[containsImplSymbol] = function (ignore, _) {
		if (_ == null) return false;
		switch (typeof _) {
			case 'boolean':
			case 'number':
			case 'string':
			case 'symbol':
				return false;
			default:
				return true;
		}
	};

	// An object is a Function if its typeof is `function`.
	// This helps us catch any callabe Obj-Type.
	// TODO: Separate Function from Callable
	// Since these are primitives, we can't use `instanceof`.
	[Function, Boolean, String, Symbol, Number].forEach(function (type) {
		const typeOf = type.name.toLowerCase();
		type[containsImplSymbol] = function (ignore, _) {
			return typeof _ === typeOf;
		};
	});
});
//# sourceMappingURL=data:application/json;base64,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QUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDN0QsUUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtBQUN0QyxNQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxVQUFDLE1BQU0sRUFBRSxDQUFDO1VBQUssT0FBTyxDQUFDLEtBQUssTUFBTTtHQUFBLENBQUE7RUFDN0QsQ0FBQyxDQUFBIiwiZmlsZSI6InByaXZhdGUvYm9vdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBBZGQgPSAob2JqZWN0LCBrZXksIHZhbHVlKSA9PlxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcblx0XHR2YWx1ZSxcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdC8vIFRPRE86RVM2IGB3cml0YWJsZWAgc2hvdWxkbid0IG5lZWQgdG8gYmUgZXhwbGljaXRcblx0XHR3cml0YWJsZTogZmFsc2Vcblx0fSlcblxuLy8gcmVnaW9uIEJ1aWx0aW4gRnVuY3Rpb25zIGZvciB1c2UgYnkgdGhlIGNvbXBpbGVyXG5leHBvcnQgY29uc3Rcblx0Ly8gVGhpcyBvYmplY3QgY29udGFpbnMgZnVuY3Rpb25zIGNhbGxlZCB1cG9uIGJ5IGNvbXBpbGVkIGNvZGUuXG5cdG1zID0geyB9LFxuXHRtc0RlZiA9IChuYW1lLCBmdW4pID0+XG5cdFx0cEFkZChtcywgbmFtZSwgZnVuKSxcblx0bXNDYWxsID0gKG5hbWUsIC4uLmFyZ3MpID0+XG5cdFx0bXNbbmFtZV0oLi4uYXJncylcblxucEFkZChnbG9iYWwsICdfbXMnLCBtcylcblxuY29uc3QgbXNEZWZzID0ge1xuXHRsYXp5R2V0TW9kdWxlKG1vZHVsZSkge1xuXHRcdGlmIChtb2R1bGUgPT09IHVuZGVmaW5lZClcblx0XHRcdHRocm93IG5ldyBFcnJvcignTW9kdWxlIHVuZGVmaW5lZC4nKVxuXHRcdHJldHVybiBtb2R1bGUuX2dldCBpbnN0YW5jZW9mIG1zLkxhenkgPyBtb2R1bGUuX2dldCA6IG1zLmxhenkoKCkgPT4gbW9kdWxlKVxuXHR9LFxuXG5cdGdldE1vZHVsZShtb2R1bGUpIHtcblx0XHRpZiAobW9kdWxlID09PSB1bmRlZmluZWQpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZSB1bmRlZmluZWQuJylcblx0XHRyZXR1cm4gbW9kdWxlLl9nZXQgaW5zdGFuY2VvZiBtcy5MYXp5ID8gbW9kdWxlLl9nZXQuZ2V0KCkgOiBtb2R1bGVcblx0fSxcblxuXHRnZXREZWZhdWx0RXhwb3J0OiBtb2R1bGUgPT4ge1xuXHRcdGlmIChtb2R1bGUgPT09IHVuZGVmaW5lZClcblx0XHRcdHRocm93IG5ldyBFcnJvcignTW9kdWxlIHVuZGVmaW5lZC4nKVxuXHRcdGNvbnN0IG1vZCA9IG1zLmdldE1vZHVsZShtb2R1bGUpXG5cdFx0cmV0dXJuIG1vZC5kZWZhdWx0ID09PSB1bmRlZmluZWQgPyBtb2QgOiBtb2QuZGVmYXVsdFxuXHR9LFxuXG5cdGxhenlQcm9wKGxhenlPYmplY3QsIGtleSkge1xuXHRcdGlmICghKGxhenlPYmplY3QgaW5zdGFuY2VvZiBtcy5MYXp5KSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYSBMYXp5LCBnb3Q6ICR7bGF6eU9iamVjdH1gKVxuXHRcdHJldHVybiBtcy5sYXp5KCgpID0+IGxhenlPYmplY3QuZ2V0KClba2V5XSlcblx0fSxcblxuXHRnZXQob2JqZWN0LCBrZXkpIHtcblx0XHRjb25zdCBfID0gb2JqZWN0W2tleV1cblx0XHRpZiAoXyA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBNb2R1bGUgJHtvYmplY3QuZGlzcGxheU5hbWV9IGRvZXMgbm90IGhhdmUgJHtrZXl9YClcblx0XHRyZXR1cm4gX1xuXHR9LFxuXG5cdGJvb2woYikge1xuXHRcdGlmICh0eXBlb2YgYiAhPT0gJ2Jvb2xlYW4nKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBCb29sZWFuLCBnb3QgJHtifWApXG5cdFx0cmV0dXJuIGJcblx0fSxcblxuXHQvLyBVc2VkIGZvciBzcGxhdCBjYWxscy5cblx0Ly8gVE9ETzpFUzYgU2hvdWxkbid0IG5lZWQuIGBmdW4oLi4uYXJnKWAgc2hvdWxkIHdvcmsgZm9yIGFueSBpdGVyYWJsZS5cblx0YXJyKGEpIHtcblx0XHRpZiAoYSBpbnN0YW5jZW9mIEFycmF5KVxuXHRcdFx0cmV0dXJuIGFcblx0XHRjb25zdCBvdXQgPSBbXVxuXHRcdGZvciAobGV0IGVtIG9mIG1zLml0ZXJhdG9yKGEpKVxuXHRcdFx0b3V0LnB1c2goZW0pXG5cdFx0cmV0dXJuIG91dFxuXHR9LFxuXG5cdC8vIEZvciB1c2UgYnkgT2JqLVR5cGUubXMgZ2VuZXJhdGVkIGNvZGUuXG5cdGNoZWNrTm9FeHRyYXMoX3RoaXMsIF8sIHJ0TmFtZSkge1xuXHRcdC8vIElmIHRoZXJlIHdhcyBzb21lIGtleSBpbiBgX2AgdGhhdCB3ZSBkaWRuJ3QgY29weTpcblx0XHRpZiAoT2JqZWN0LmtleXMoXykubGVuZ3RoID4gT2JqZWN0LmtleXMoX3RoaXMpLmxlbmd0aClcblx0XHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKF8pLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuXHRcdFx0XHRpZiAobmFtZSAhPT0gJ2Rpc3BsYXlOYW1lJylcblx0XHRcdFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfdGhpcywgbmFtZSkpXG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0V4dHJhIHByb3AgJyArIG5hbWUgKyAnIGZvciAnICsgcnROYW1lKVxuXHRcdFx0fSlcblx0fSxcblxuXHRMYXp5OiBmdW5jdGlvbiBMYXp5KGdldCkge1xuXHRcdHRoaXMuZ2V0ID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5nZXQgPSAoKSA9PiB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTGF6eSB2YWx1ZSBkZXBlbmRzIG9uIGl0c2VsZi4gVGh1bms6ICR7Z2V0fWApXG5cdFx0XHR9XG5cdFx0XHRjb25zdCBfID0gZ2V0KClcblx0XHRcdHRoaXMuZ2V0ID0gKCkgPT4gX1xuXHRcdFx0cmV0dXJuIF9cblx0XHR9XG5cdH0sXG5cdGxhenk6IF8gPT4gbmV3IG1zLkxhenkoXyksXG5cdHVubGF6eTogXyA9PiBfIGluc3RhbmNlb2YgbXMuTGF6eSA/IF8uZ2V0KCkgOiBfLFxuXG5cdHNldChfLCBrMCwgdjAsIGsxLCB2MSwgazIsIHYyLCBrMykge1xuXHRcdF9bazBdID0gdjBcblx0XHRpZiAoazEgPT09IHVuZGVmaW5lZClcblx0XHRcdHJldHVybiBfXG5cdFx0X1trMV0gPSB2MVxuXHRcdGlmIChrMiA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0cmV0dXJuIF9cblx0XHRfW2syXSA9IHYyXG5cdFx0aWYgKGszID09PSB1bmRlZmluZWQpXG5cdFx0XHRyZXR1cm4gX1xuXHRcdGZvciAobGV0IGkgPSA3OyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSA9IGkgKyAyKVxuXHRcdFx0X1thcmd1bWVudHNbaV1dID0gYXJndW1lbnRzW2kgKyAxXVxuXHRcdHJldHVybiBfXG5cdH0sXG5cblx0bHNldChfLCBrMCwgdjAsIGsxLCB2MSwgazIsIHYyLCBrMykge1xuXHRcdHNldE9yTGF6eShfLCBrMCwgdjApXG5cdFx0aWYgKGsxID09PSB1bmRlZmluZWQpXG5cdFx0XHRyZXR1cm4gX1xuXHRcdHNldE9yTGF6eShfLCBrMSwgdjEpXG5cdFx0aWYgKGsyID09PSB1bmRlZmluZWQpXG5cdFx0XHRyZXR1cm4gX1xuXHRcdHNldE9yTGF6eShfLCBrMiwgdjIpXG5cdFx0aWYgKGszID09PSB1bmRlZmluZWQpXG5cdFx0XHRyZXR1cm4gX1xuXHRcdGZvciAobGV0IGkgPSA3OyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSA9IGkgKyAyKVxuXHRcdFx0c2V0T3JMYXp5KF8sIGFyZ3VtZW50c1tpXSwgYXJndW1lbnRzW2kgKyAxXSlcblx0XHRyZXR1cm4gX1xuXHR9XG59XG5PYmplY3Qua2V5cyhtc0RlZnMpLmZvckVhY2goXyA9PiBtc0RlZihfLCBtc0RlZnNbX10pKVxuXG5jb25zdCBzZXRPckxhenkgPSAob2JqLCBrZXksIHZhbCkgPT4ge1xuXHRpZiAodmFsIGluc3RhbmNlb2YgbXMuTGF6eSlcblx0XHRPYmplY3Quc2V0UHJvcGVydHkob2JqLCBrZXksIHsgZ2V0KCkgeyByZXR1cm4gbXMudW5sYXp5KHZhbCkgfSB9KVxuXHRlbHNlXG5cdFx0cEFkZChvYmosIGtleSwgdmFsKVxufVxuXG5jb25zdCBtc0RlZlRlbXAgPSAobmFtZSwgZnVuKSA9PlxuXHRtc1tuYW1lXSA9IGZ1blxuXG5tc0RlZlRlbXAoJ3Nob3cnLCBfID0+IHtcblx0aWYgKHR5cGVvZiBfICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgXyAhPT0gJ251bWJlcicpXG5cdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0YE9ubHkgdXNlIFN0cmluZ3Mgb3IgTnVtYmVycyBoZXJlIHVudGlsIHRoaXMgaXMgb3ZlcnJpZGRlbiBieSBzaG93Lm1zLiBHb3Q6XFxuJHtffWApXG5cdHJldHVybiBfLnRvU3RyaW5nKClcbn0pXG5cbi8vIHJlZ2lvbiBDb250YWluc1xuLy8gU29tZSBUeXBlcyB3YW50IHRvIGltcGxlbWVudCBjb250YWlucz8gYmVmb3JlIGl0IGlzIG9mZmljaWFsbHkgZGVmaW5lZC5cbmV4cG9ydCBjb25zdCBjb250YWluc0ltcGxTeW1ib2wgPSAnaW1wbC1jb250YWlucz8nXG5leHBvcnQgY29uc3QgaW1wbENvbnRhaW5zID0gKHR5cGUsIGltcGwpID0+XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0eXBlLnByb3RvdHlwZSwgY29udGFpbnNJbXBsU3ltYm9sLCB7XG5cdFx0dmFsdWU6IGltcGwsXG5cdFx0ZW51bWVyYWJsZTogZmFsc2Vcblx0fSlcblxuLy8gT3ZlcndyaXR0ZW4gYnkgVHlwZS9pbmRleC5tcyB0byBhY3R1YWxseSBkbyB0eXBlIGNoZWNraW5nLlxubXNEZWZUZW1wKCdjaGVja0NvbnRhaW5zJywgKHR5cGUsIHZhbCkgPT4gdmFsKVxuXG5PYmplY3RbY29udGFpbnNJbXBsU3ltYm9sXSA9IGZ1bmN0aW9uKGlnbm9yZSwgXykge1xuXHRpZiAoXyA9PSBudWxsKVxuXHRcdHJldHVybiBmYWxzZVxuXHRzd2l0Y2ggKHR5cGVvZiBfKSB7XG5cdFx0Y2FzZSAnYm9vbGVhbic6XG5cdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdGNhc2UgJ3N5bWJvbCc6XG5cdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHRydWVcblx0fVxufTtcblxuLy8gQW4gb2JqZWN0IGlzIGEgRnVuY3Rpb24gaWYgaXRzIHR5cGVvZiBpcyBgZnVuY3Rpb25gLlxuLy8gVGhpcyBoZWxwcyB1cyBjYXRjaCBhbnkgY2FsbGFiZSBPYmotVHlwZS5cbi8vIFRPRE86IFNlcGFyYXRlIEZ1bmN0aW9uIGZyb20gQ2FsbGFibGVcbi8vIFNpbmNlIHRoZXNlIGFyZSBwcmltaXRpdmVzLCB3ZSBjYW4ndCB1c2UgYGluc3RhbmNlb2ZgLlxuWyBGdW5jdGlvbiwgQm9vbGVhbiwgU3RyaW5nLCBTeW1ib2wsIE51bWJlciBdLmZvckVhY2godHlwZSA9PiB7XG5cdGNvbnN0IHR5cGVPZiA9IHR5cGUubmFtZS50b0xvd2VyQ2FzZSgpXG5cdHR5cGVbY29udGFpbnNJbXBsU3ltYm9sXSA9IChpZ25vcmUsIF8pID0+IHR5cGVvZiBfID09PSB0eXBlT2Zcbn0pXG4iXSwic291cmNlUm9vdCI6Ii9zcmMifQ==