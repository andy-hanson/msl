"use strict";
if (typeof define !== "function") var define = require("amdefine")(module);
define([ "exports", "../Bool", "../compare", "../control", "../Obj", "../js", "../Type/Method", "../Type/Pred-Type", "./methods", "../bang", "../Fun", "../Try", "../Type/Type" ], function(exports, Bool_0, compare_1, control_2, Obj_3, js_4, Method_5, Pred_45Type_6, methods_7, _33_8, Fun_9, Try_10, Type_11) {
	exports._get = _ms.lazy(function() {
		const _$2 = _ms.getModule(Bool_0), and = _ms.get(_$2, "and"), compare = _ms.getDefaultExport(compare_1), _$3 = _ms.getModule(compare_1), _61_63 = _ms.get(_$3, "=?"), _60_63 = _ms.get(_$3, "<?"), _60_61_63 = _ms.get(_$3, "<=?"), _$4 = _ms.getModule(control_2), opr = _ms.get(_$4, "opr"), _$5 = _ms.getModule(Obj_3), p = _ms.get(_$5, "p"), _$6 = _ms.getModule(js_4), id_61_63 = _ms.get(_$6, "id=?"), js_45bar = _ms.get(_$6, "js-bar"), js_60 = _ms.get(_$6, "js<"), js_60_61 = _ms.get(_$6, "js<="), js_43 = _ms.get(_$6, "js+"), js_45 = _ms.get(_$6, "js-"), js_42 = _ms.get(_$6, "js*"), js_47 = _ms.get(_$6, "js/"), js_45mod = _ms.get(_$6, "js-mod"), _$7 = _ms.getModule(Method_5), impl_33 = _ms.get(_$7, "impl!"), Pred_45Type = _ms.getDefaultExport(Pred_45Type_6), _$8 = _ms.getModule(Pred_45Type_6), Opt = _ms.get(_$8, "Opt"), _$9 = _ms.getModule(methods_7), _43 = _ms.get(_$9, "+"), _45 = _ms.get(_$9, "-"), _42 = _ms.get(_$9, "*"), _47 = _ms.get(_$9, "/"), _33 = _ms.lazy(function() {
			return _ms.getDefaultExport(_33_8)
		}), _$11 = _ms.lazyGetModule(_33_8), _33not = _ms.lazyProp(_$11, "!not"), _$12 = _ms.lazyGetModule(Fun_9), spread_33 = _ms.lazyProp(_$12, "spread!"), _$13 = _ms.lazyGetModule(Try_10), fails_63 = _ms.lazyProp(_$13, "fails?"), _$14 = _ms.lazyGetModule(Type_11), contains_63 = _ms.lazyProp(_$14, "contains?");
		const exports = { };
		const Num = function() {
			const doc = "JavaScript's native Number type.\nAny floating-point value.";
			return _ms.set(global.Number, "doc", doc, "displayName", "Num")
		}();
		const Int = exports.Int = Pred_45Type(function() {
			const doc = "A multiple of 1.\nThis only contains Nums for which integer methods return sensible results, AKA safe ints.\nThis is anything between min-safe-integer and max-safe-integer.";
			const test = function() {
				_ms.unlazy(spread_33)(_ms.sub(_ms.unlazy(_33), _ms.sub(_ms.unlazy(contains_63), Int)), function() {
					const _0 = 1;
					const _1 = min_45safe_45int;
					const _2 = max_45safe_45int;
					return [ _0, _1, _2 ]
				}());
				return _ms.unlazy(spread_33)(_ms.sub(_ms.unlazy(_33not), _ms.sub(_ms.unlazy(contains_63), Int)), function() {
					const _0 = 1.1;
					const _1 = _45(min_45safe_45int, 1);
					const _2 = _43(max_45safe_45int, 1);
					return [ _0, _1, _2 ]
				}())
			};
			const predicate = function(_) {
				return Num.isSafeInteger(_)
			};
			return {
				doc: doc,
				test: test,
				predicate: predicate,
				displayName: "Int"
			}
		}());
		const Nat = exports.Nat = Pred_45Type(function() {
			const doc = "Any counting number, including `0`.";
			const test = function() {
				_ms.unlazy(_33)(_ms.unlazy(contains_63), Nat, 0);
				return _ms.unlazy(_33not)(_ms.unlazy(contains_63), Nat, - 1)
			};
			const predicate = function(_) {
				return and(_ms.contains(Int, _), _ms.lazy(function() {
					return _60_61_63(0, _)
				}))
			};
			return {
				doc: doc,
				test: test,
				predicate: predicate,
				displayName: "Nat"
			}
		}());
		impl_33(compare, Num, _45);
		impl_33(_61_63, Num, function() {
			const test = function() {
				const _k0 = [ not_45a_45number, not_45a_45number ], _v0 = true;
				return _ms.map(_k0, _v0)
			};
			return _ms.set(id_61_63, "test", test)
		}());
		impl_33(_60_63, Num, function(a, b) {
			_ms.checkContains(Num, b, "b");
			return js_60(a, b)
		});
		impl_33(_60_61_63, Num, function(a, b) {
			_ms.checkContains(Num, b, "b");
			return js_60_61(a, b)
		});
		impl_33(_43, Num, function(a, b) {
			_ms.checkContains(Num, b, "b");
			return js_43(a, b)
		});
		impl_33(_45, Num, function(a, b) {
			_ms.checkContains(Num, b, "b");
			return js_45(a, b)
		});
		impl_33(_42, Num, function(a, b) {
			_ms.checkContains(Num, b, "b");
			return js_42(a, b)
		});
		impl_33(_47, Num, function(a, b) {
			_ms.checkContains(Num, b, "b");
			return js_47(a, b)
		});
		const sign = exports.sign = function() {
			const test = function() {
				const _k0 = [ - 8 ], _v0 = - 1;
				const _k1 = [ 0 ], _v1 = 0;
				const _k2 = [ 8 ], _v2 = 1;
				return _ms.map(_k0, _v0, _k1, _v1, _k2, _v2)
			};
			return _ms.set(function(_) {
				_ms.checkContains(Num, _, "_");
				return function() {
					switch (true) {
						case _ms.bool(_60_63(0, _)): {
							return 1
						}
						case _ms.bool(_60_63(_, 0)): {
							return - 1
						}
						default: {
							return 0
						}
					}
				}()
			}, "test", test, "displayName", "sign")
		}();
		const remainder = exports.remainder = function() {
			const doc = "Remainder of `a` after dividing by `b`.\nSign of result is sign of `a`. Sign of `b` is ignored.";
			const test = function() {
				const _k0 = [ 2, 3 ], _v0 = 2;
				const _k1 = [ 2, - 3 ], _v1 = 2;
				const _k2 = [ - 2, 3 ], _v2 = - 2;
				const _k3 = [ - 2, - 3 ], _v3 = - 2;
				return _ms.map(_k0, _v0, _k1, _v1, _k2, _v2, _k3, _v3)
			};
			return _ms.set(function(numerator, denominator) {
				_ms.checkContains(Num, numerator, "numerator");
				_ms.checkContains(Num, denominator, "denominator");
				return js_45mod(numerator, denominator)
			}, "doc", doc, "test", test, "displayName", "remainder")
		}();
		const int_47 = exports["int/"] = function() {
			const doc = "Integer division: throws out any remainder.\nThis is the default in other programming languages, but in Mason `/ 1 2` is 0.5, not 0.";
			const test = function() {
				const _k0 = [ 3, 2 ], _v0 = 1;
				const _k1 = [ - 3, 2 ], _v1 = - 2;
				return _ms.map(_k0, _v0, _k1, _v1)
			};
			return _ms.set(function(a, b) {
				_ms.checkContains(Num, a, "a");
				_ms.checkContains(Num, b, "b");
				return round_45down(_47(a, b))
			}, "doc", doc, "test", test, "displayName", "int/")
		}();
		const modulo = exports.modulo = function() {
			const doc = "Mathematical modulus.\nSmallest positive number which can be added to a multiple of `denominator` to get `numerator`.\"";
			const test = function() {
				const _k0 = [ 2, 3 ], _v0 = 2;
				const _k1 = [ 2, - 3 ], _v1 = 2;
				const _k2 = [ - 2, 3 ], _v2 = 1;
				const _k3 = [ - 2, - 3 ], _v3 = 1;
				return _ms.map(_k0, _v0, _k1, _v1, _k2, _v2, _k3, _v3)
			};
			return _ms.set(function(numerator, denominator) {
				_ms.checkContains(Num, numerator, "numerator");
				_ms.checkContains(Num, denominator, "denominator");
				const res = function() {
					switch (true) {
						case _ms.bool(_60_63(numerator, 0)): {
							return _43(abs(denominator), remainder(numerator, denominator))
						}
						default: {
							return remainder(numerator, denominator)
						}
					}
				}();
				divisible_63(_45(numerator, res), denominator);
				return res
			}, "doc", doc, "test", test, "displayName", "modulo")
		}();
		const divisible_63 = exports["divisible?"] = function() {
			const doc = "Whether an integer number of `b` can add up to `a`.";
			const test = function() {
				_ms.unlazy(_33)(divisible_63, 4, 2);
				_ms.unlazy(_33)(divisible_63, 4, - 2);
				return _ms.unlazy(_33not)(divisible_63, 3, 2)
			};
			return _ms.set(function(a, b) {
				_ms.checkContains(Num, a, "a");
				_ms.checkContains(Num, b, "b");
				return _61_63(0, remainder(a, b))
			}, "doc", doc, "test", test, "displayName", "divisible?")
		}();
		const log_45e = exports["log-e"] = function(_) {
			_ms.checkContains(Num, _, "_");
			return Math.log(_)
		};
		const log = exports.log = function() {
			const doc = "Mathematical logarithm.";
			const test = function() {
				_ms.unlazy(_33)(near_63, log(10, 0.01), - 2);
				const _k0 = [ 2, 8 ], _v0 = 3;
				return _ms.map(_k0, _v0)
			};
			return _ms.set(function(base, n) {
				_ms.checkContains(Num, base, "base");
				_ms.checkContains(Num, n, "n");
				return _47(log_45e(n), log_45e(base))
			}, "doc", doc, "test", test, "displayName", "log")
		}();
		const abs = exports.abs = function() {
			const doc = "Negates `a` until it is positive.";
			const test = function() {
				const _k0 = [ 1 ], _v0 = 1;
				const _k1 = [ - 1 ], _v1 = 1;
				return _ms.map(_k0, _v0, _k1, _v1)
			};
			return _ms.set(function(a) {
				_ms.checkContains(Num, a, "a");
				return Math.abs(a)
			}, "doc", doc, "test", test, "displayName", "abs")
		}();
		const pow = exports.pow = function() {
			const doc = "`a` raised to the power of `b`.";
			const test = function() {
				const _k0 = [ 2, 3 ], _v0 = 8;
				return _ms.map(_k0, _v0)
			};
			return _ms.set(function(a, b) {
				_ms.checkContains(Num, a, "a");
				_ms.checkContains(Num, b, "b");
				return Math.pow(a, b)
			}, "doc", doc, "test", test, "displayName", "pow")
		}();
		const square = exports.square = function(_) {
			_ms.checkContains(Num, _, "_");
			return _42(_, _)
		};
		const square_45root = exports["square-root"] = function() {
			const test = function() {
				const _k0 = [ 4 ], _v0 = 2;
				_ms.unlazy(_33)(_ms.unlazy(fails_63), function() {
					return square_45root(- 1)
				});
				return _ms.map(_k0, _v0)
			};
			return _ms.set(function(_) {
				_ms.checkContains(Num, _, "_");
				_ms.unlazy(_33)(_60_61_63(0, _), "Can't take square root of negative number " + _ms.show(_) + ".");
				return Math.sqrt(_)
			}, "test", test, "displayName", "square-root")
		}();
		const round = exports.round = function() {
			const doc = "Closest integer.\nRounds up to break ties.";
			const test = function() {
				const _k0 = [ - 0.5 ], _v0 = - 0;
				const _k1 = [ 0.5 ], _v1 = 1;
				return _ms.map(_k0, _v0, _k1, _v1)
			};
			return _ms.set(function(_) {
				_ms.checkContains(Num, _, "_");
				return Math.round(_)
			}, "doc", doc, "test", test, "displayName", "round")
		}();
		const round_45down = exports["round-down"] = function() {
			const doc = "Greatest integer no greater than `a`.";
			const test = function() {
				const _k0 = [ - 0.5 ], _v0 = - 1;
				const _k1 = [ 0.5 ], _v1 = 0;
				return _ms.map(_k0, _v0, _k1, _v1)
			};
			return _ms.set(function(_) {
				_ms.checkContains(Num, _, "_");
				return Math.floor(_)
			}, "doc", doc, "test", test, "displayName", "round-down")
		}();
		const round_45up = exports["round-up"] = function() {
			const doc = "Least integer no less than `a`.";
			const test = function() {
				const _k0 = [ - 0.5 ], _v0 = - 0;
				const _k1 = [ 0.5 ], _v1 = 1;
				return _ms.map(_k0, _v0, _k1, _v1)
			};
			return _ms.set(function(_) {
				_ms.checkContains(Num, _, "_");
				return Math.ceil(_)
			}, "doc", doc, "test", test, "displayName", "round-up")
		}();
		const round_45towards_450 = exports["round-towards-0"] = function() {
			const doc = "`round-down` if positive, else `round-up`.";
			const test = function() {
				const _k0 = [ - 0.5 ], _v0 = 0;
				const _k1 = [ 0.5 ], _v1 = 0;
				return _ms.map(_k0, _v0, _k1, _v1)
			};
			return _ms.set(function(_) {
				_ms.checkContains(Num, _, "_");
				return js_45bar(_, 0)
			}, "doc", doc, "test", test, "displayName", "round-towards-0")
		}();
		const near_63 = exports["near?"] = function() {
			const doc = "Whether they are within sig-figs precision.";
			const test = function() {
				const _k0 = [ 1000.9, 1000, 3 ], _v0 = true;
				const _k1 = [ 1000.9, 1000, 4 ], _v1 = false;
				const _k2 = [ 0.001001, 0.001, 3 ], _v2 = true;
				const _k3 = [ 0.001001, 0.001, 4 ], _v3 = false;
				const _k4 = [ 0.001, - 0.001, 1 ], _v4 = false;
				const _k5 = [ 0.00999, 0, 2 ], _v5 = true;
				const _k6 = [ 0, 0.00999, 2 ], _v6 = true;
				return _ms.map(_k0, _v0, _k1, _v1, _k2, _v2, _k3, _v3, _k4, _v4, _k5, _v5, _k6, _v6)
			};
			return _ms.set(function(a, b, _63sig_45figs) {
				_ms.checkContains(Num, b, "b");
				_ms.checkContains(_ms.sub(Opt, Nat), _63sig_45figs, "?sig-figs");
				const sig_45figs = opr(_63sig_45figs, 6);
				return function() {
					switch (true) {
						case _ms.bool(_61_63(a, 0)): {
							return near_450_63(b, sig_45figs)
						}
						case _ms.bool(_61_63(b, 0)): {
							return near_450_63(a, sig_45figs)
						}
						default: {
							const avg_45mag = _47(_43(abs(a), abs(b)), 2);
							const n_45digits_45avg_45mag = round_45down(log(10, avg_45mag));
							const scale = pow(10, _42(- 1, n_45digits_45avg_45mag));
							const scaled_45diff = _45(_42(a, scale), _42(b, scale));
							const epsilon = pow(10, _42(- 1, sig_45figs));
							return _60_63(abs(scaled_45diff), epsilon)
						}
					}
				}()
			}, "doc", doc, "test", test, "displayName", "near?")
		}();
		const near_450_63 = exports["near-0?"] = function() {
			const doc = "Whether it is close to zero.\nIt must be `0.0...` where there are `sig-figs` 0s after the decimal point.";
			const test = function() {
				const _k0 = [ 0.00999, 2 ], _v0 = true;
				const _k1 = [ 0.01, 2 ], _v1 = false;
				return _ms.map(_k0, _v0, _k1, _v1)
			};
			return _ms.set(function(_, _63sig_45figs) {
				_ms.checkContains(_ms.sub(Opt, Nat), _63sig_45figs, "?sig-figs");
				const sig_45figs = opr(_63sig_45figs, 6);
				const max = pow(10, _42(- 1, sig_45figs));
				return _60_63(abs(_), max)
			}, "doc", doc, "test", test, "displayName", "near-0?")
		}();
		const infinity = exports.infinity = p(Num, "POSITIVE_INFINITY");
		const _45infinity = exports["-infinity"] = p(Num, "NEGATIVE_INFINITY");
		const max_45safe_45int = exports["max-safe-int"] = p(Num, "MAX_SAFE_INTEGER");
		const min_45safe_45int = exports["min-safe-int"] = p(Num, "MIN_SAFE_INTEGER");
		const not_45a_45number = exports["not-a-number"] = Num.NaN;
		exports.default = Num;
		const displayName = exports.displayName = "Num";
		return exports
	})
})
//# sourceMappingURL=../math/Num.js.map