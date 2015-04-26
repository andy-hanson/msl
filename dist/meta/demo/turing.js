"use strict";
if ((typeof define !== "function")) var define = require("amdefine")(module);
define([ "exports", "../../at/at", "../../at/Seq/Dequebang", "../../at/Seq/Seq", "../../at/Seq/Seqbang", "../../compare", "../../control", "../../math/methods", "../../Obj", "../../Type/Type", "../../Type/Pred-Type" ], function(exports, _64_0, Deque_33_1, Seq_2, Seq_33_3, compare_4, control_5, methods_6, Obj_7, Type_8, Pred_45Type_9) {
	exports._get = _ms.lazy(function() {
		const _$2 = _ms.getModule(_64_0), count = _ms.get(_$2, "count"), empty_63 = _ms.get(_$2, "empty?"), Deque_33 = _ms.getDefaultExport(Deque_33_1), Seq = _ms.getDefaultExport(Seq_2), _$5 = _ms.getModule(Seq_33_3), _60_43_43_33 = _ms.get(_$5, "<++!"), _43_43_62_33 = _ms.get(_$5, "++>!"), set_45nth_33 = _ms.get(_$5, "set-nth!"), _$6 = _ms.getModule(compare_4), _61_63 = _ms.get(_$6, "=?"), _$7 = _ms.getModule(control_5), End_45Loop = _ms.get(_$7, "End-Loop"), if_33 = _ms.get(_$7, "if!"), loop = _ms.get(_$7, "loop"), _$8 = _ms.getModule(methods_6), _43 = _ms.get(_$8, "+"), _45 = _ms.get(_$8, "-"), Obj = _ms.getDefaultExport(Obj_7), _$9 = _ms.getModule(Obj_7), p = _ms.get(_$9, "p"), _$10 = _ms.getModule(Type_8), _61_62 = _ms.get(_$10, "=>"), _$11 = _ms.getModule(Pred_45Type_9), Any = _ms.get(_$11, "Any");
		const exports = { };
		const R = exports.R = function(written, new_45state) {
			return {
				"go-right": true,
				state: new_45state,
				write: written
			}
		};
		const L = exports.L = function(written, new_45state) {
			return {
				"go-right": false,
				state: new_45state,
				write: written
			}
		};
		const fin = exports.fin = function() {
			const doc = "Stops the machine.";
			return {
				doc: doc,
				displayName: "fin"
			}
		}();
		const run_45turing = exports["run-turing"] = function() {
			const doc = "http://rosettacode.org/wiki/Universal_Turing_machine";
			const test = function() {
				const incrementer = function() {
					const init_45state = "a";
					const blank = 0;
					const rules = function() {
						const a = function() {
							const _k0 = 1, _v0 = R(1, "a");
							const _k1 = 0, _v1 = fin;
							return _ms.map(_k0, _v0, _k1, _v1)
						}();
						return {
							a: a,
							displayName: "rules"
						}
					}();
					return {
						"init-state": init_45state,
						blank: blank,
						rules: rules,
						displayName: "incrementer"
					}
				}();
				const _k0 = [ incrementer, [ 1, 1, 1 ] ], _v0 = [ 1, 1, 1, 0 ];
				const busy_45beaver = function() {
					const init_45state = "a";
					const blank = 0;
					const rules = function() {
						const a = function() {
							const _k0 = 0, _v0 = R(1, "b");
							const _k1 = 1, _v1 = L(1, "c");
							return _ms.map(_k0, _v0, _k1, _v1)
						}();
						const b = function() {
							const _k0 = 0, _v0 = L(1, "a");
							const _k1 = 1, _v1 = R(1, "b");
							return _ms.map(_k0, _v0, _k1, _v1)
						}();
						const c = function() {
							const _k0 = 0, _v0 = L(1, "b");
							const _k1 = 1, _v1 = fin;
							return _ms.map(_k0, _v0, _k1, _v1)
						}();
						return {
							a: a,
							b: b,
							c: c,
							displayName: "rules"
						}
					}();
					return {
						"init-state": init_45state,
						blank: blank,
						rules: rules,
						displayName: "busy-beaver"
					}
				}();
				const _k1 = [ busy_45beaver, [ ] ], _v1 = [ 1, 1, 1, 1, 1, 1 ];
				const sorting_45test = function() {
					const init_45state = "a";
					const blank = 0;
					const rules = function() {
						const a = function() {
							const _k0 = 0, _v0 = L(0, "e");
							const _k1 = 1, _v1 = R(1, "a");
							const _k2 = 2, _v2 = R(3, "b");
							return _ms.map(_k0, _v0, _k1, _v1, _k2, _v2)
						}();
						const b = function() {
							const _k0 = 0, _v0 = L(0, "c");
							const _k1 = 1, _v1 = R(1, "b");
							const _k2 = 2, _v2 = R(2, "b");
							return _ms.map(_k0, _v0, _k1, _v1, _k2, _v2)
						}();
						const c = function() {
							const _k0 = 1, _v0 = L(2, "d");
							const _k1 = 2, _v1 = L(2, "c");
							const _k2 = 3, _v2 = L(2, "e");
							return _ms.map(_k0, _v0, _k1, _v1, _k2, _v2)
						}();
						const d = function() {
							const _k0 = 1, _v0 = L(1, "d");
							const _k1 = 2, _v1 = L(2, "d");
							const _k2 = 3, _v2 = R(1, "a");
							return _ms.map(_k0, _v0, _k1, _v1, _k2, _v2)
						}();
						const e = function() {
							const _k0 = 0, _v0 = fin;
							const _k1 = 1, _v1 = L(1, "e");
							return _ms.map(_k0, _v0, _k1, _v1)
						}();
						return {
							a: a,
							b: b,
							c: c,
							d: d,
							e: e,
							displayName: "rules"
						}
					}();
					return {
						"init-state": init_45state,
						blank: blank,
						rules: rules,
						displayName: "sorting-test"
					}
				}();
				const _k2 = [ sorting_45test, [ 2, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2 ] ], _v2 = [ 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0 ];
				return _ms.map(_k0, _v0, _k1, _v1, _k2, _v2)
			};
			return _ms.set(function(spec, init_45tape) {
				_ms.checkContains(Seq, init_45tape, "init-tape");
				const _$75 = spec, rules = _ms.checkContains(Obj, _$75.rules, "rules"), blank = _ms.checkContains(Any, _$75.blank, "blank"), init_45state = _ms.checkContains(Any, _$75["init-state"], "init-state");
				const tape = _61_62(Deque_33, function() {
					switch (true) {
						case _ms.bool(empty_63(init_45tape)): {
							return [ blank ]
						}
						default: {
							return init_45tape
						}
					}
				}());
				return _ms.checkContains(Seq, loop({
					idx: 0,
					state: init_45state
				}, function(prev) {
					const pi = prev.idx;
					const symbol = _ms.sub(tape, pi);
					return function() {
						const _ = _ms.sub(p(rules, prev.state), symbol);
						switch (true) {
							case _ms.bool(_61_63(fin, _)): {
								return End_45Loop(_61_62(Array, tape))
							}
							default: {
								const _$88 = _, write = _$88.write, go_45right = _$88["go-right"];
								set_45nth_33(tape, pi, write);
								const state = _.state;
								const idx = function() {
									switch (true) {
										case _ms.bool(go_45right): {
											if_33(_61_63(pi, _45(count(tape), 1)), function() {
												return _43_43_62_33(tape, [ blank ])
											});
											return _43(pi, 1)
										}
										case _ms.bool(_61_63(pi, 0)): {
											_60_43_43_33(tape, [ blank ]);
											return 0
										}
										default: {
											return _45(pi, 1)
										}
									}
								}();
								return {
									state: state,
									idx: idx
								}
							}
						}
					}()
				}), "res")
			}, "doc", doc, "test", test, "displayName", "run-turing")
		}();
		const displayName = exports.displayName = "turing";
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9tZXRhL2RlbW8vdHVyaW5nLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztvQ0FZQTtBQUFBOztFQUNDLHNCQUFJLFNBQUEsU0FBUSxhQUVYO0FBQUEsVUFBQTtBQUFBLGdCQUEwQjtBQUFBLFdBQVk7QUFBQSxXQUE5QjtBQUFBO0FBQUE7QUFBQSxFQUNULHNCQUFJLFNBQUEsU0FBUSxhQUNYO0FBQUEsVUFBQTtBQUFBLGdCQUEwQjtBQUFBLFdBQWE7QUFBQSxXQUEvQjtBQUFBO0FBQUE7QUFBQSxFQUNULHFDQUFJO0FBQUEsR0FDSCxZQUFNO0FBQUEsVUFESDtBQUFBOzs7O0VBR0wsd0RBQVc7QUFBQSxHQUNWLFlBQU07QUFBQSxHQUNOLGFBQU8sV0FDTjtBQUFBLElBQUEsK0JBQWE7QUFBQSxLQUNaLHFCQUFhO0FBQUEsS0FDYixjQUFPO0FBQUEsS0FDUCx5QkFBTTtBQUFBLE1BQ0wscUJBQUU7QUFBQSxPQUNELFlBQUEsU0FBSyxFQUFFLEdBQUc7QUFBQSxPQUNWLFlBQUEsU0FBSztBQUFBOzthQUhEO0FBQUE7Ozs7WUFITTtBQUFBOzs7Ozs7SUFPYixZQUFBLEVBQUEsYUFBYyxFQUFFLEdBQUUsR0FBRSxhQUFTLEVBQUUsR0FBRSxHQUFFLEdBQUU7QUFBQSxJQUVyQyxpQ0FBYTtBQUFBLEtBQ1oscUJBQWE7QUFBQSxLQUNiLGNBQU87QUFBQSxLQUNQLHlCQUFNO0FBQUEsTUFDTCxxQkFBRTtBQUFBLE9BQ0QsWUFBQSxTQUFLLEVBQUUsR0FBRztBQUFBLE9BQ1YsWUFBQSxTQUFLLEVBQUUsR0FBRztBQUFBOztNQUNYLHFCQUFFO0FBQUEsT0FDRCxZQUFBLFNBQUssRUFBRSxHQUFHO0FBQUEsT0FDVixZQUFBLFNBQUssRUFBRSxHQUFHO0FBQUE7O01BQ1gscUJBQUU7QUFBQSxPQUNELFlBQUEsU0FBSyxFQUFFLEdBQUc7QUFBQSxPQUNWLFlBQUEsU0FBSztBQUFBOzthQVRE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