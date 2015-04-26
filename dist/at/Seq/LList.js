"use strict";
if ((typeof define !== "function")) var define = require("amdefine")(module);
define([ "exports", "../../js", "../../Objbang", "../../Type/Kind", "../../Type/Obj-Type", "../at", "../at-Type", "./Seq" ], function(exports, js_0, Obj_33_1, Kind_2, Obj_45Type_3, _64_4, _64_45Type_5, Seq_6) {
	exports._get = _ms.lazy(function() {
		const _$2 = _ms.getModule(js_0), id_61_63 = _ms.get(_$2, "id=?"), _$3 = _ms.getModule(Obj_33_1), p_33 = _ms.get(_$3, "p!"), _$4 = _ms.getModule(Kind_2), kind_33 = _ms.get(_$4, "kind!"), self_45kind_33 = _ms.get(_$4, "self-kind!"), Obj_45Type = _ms.getDefaultExport(Obj_45Type_3), _64 = _ms.getDefaultExport(_64_4), _$6 = _ms.getModule(_64_4), _43_43_39 = _ms.get(_$6, "++'"), empty_63 = _ms.get(_$6, "empty?"), iterator = _ms.get(_$6, "iterator"), _64_45Type = _ms.getDefaultExport(_64_45Type_5), _$7 = _ms.getModule(_64_45Type_5), empty = _ms.get(_$7, "empty"), from_45stream = _ms.get(_$7, "from-stream"), Seq = _ms.getDefaultExport(Seq_6), _$8 = _ms.getModule(Seq_6), _60_43_43_39 = _ms.get(_$8, "<++'"), tail = _ms.get(_$8, "tail");
		const exports = { };
		const LList = Obj_45Type(function() {
			const doc = "Singly-linked list.";
			const props = function() {
				const head = true;
				const tail = true;
				return {
					head: head,
					tail: tail,
					displayName: "props"
				}
			}();
			return {
				doc: doc,
				props: props,
				displayName: "LList"
			}
		}());
		const empty_45LList = LList({
			head: undefined,
			tail: undefined
		});
		p_33(empty_45LList, "tail", empty_45LList);
		self_45kind_33(LList, _64_45Type, function() {
			const _k0 = empty, _v0 = function() {
				return empty_45LList
			};
			const _k1 = from_45stream, _v1 = function(_) {
				return _60_43_43_39(empty_45LList, _)
			};
			return _ms.map(_k0, _v0, _k1, _v1)
		}());
		kind_33(LList, Seq, function() {
			const _k0 = empty_63, _v0 = function(_) {
				return id_61_63(_, empty_45LList)
			};
			const _k1 = iterator, _v1 = function*(_) {
				switch (true) {
					case _ms.bool(empty_63(_)):
						{
							null
						};
						break
					default: {
						(yield _.head);
						(yield* iterator(_.tail))
					}
				}
			};
			const _k2 = tail, _v2 = function(_) {
				return _.tail
			};
			const _k3 = _60_43_43_39, _v3 = function(_, left_45added) {
				_ms.checkContains(_64, left_45added, "left-added");
				const iter = iterator(left_45added);
				const f = function() {
					const _$43 = iter.next(), value = _$43.value, done = _$43.done;
					return function() {
						switch (true) {
							case _ms.bool(done): {
								return _
							}
							default: {
								return LList(function() {
									const head = value;
									const tail = f();
									return {
										head: head,
										tail: tail
									}
								}())
							}
						}
					}()
				};
				return f()
			};
			const _k4 = _43_43_39, _v4 = function(a, b) {
				return function() {
					const _ = b;
					switch (true) {
						case _ms.bool(_ms.contains(LList, _)): {
							return _60_43_43_39(b, a)
						}
						default: {
							return _43_43_39.default(a, b)
						}
					}
				}()
			};
			return _ms.map(_k0, _v0, _k1, _v1, _k2, _v2, _k3, _v3, _k4, _v4)
		}());
		exports.default = LList;
		const displayName = exports.displayName = "LList";
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9AL1NlcS9MTGlzdC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7b0NBU0E7QUFBQTs7RUFBQSxjQUFRLHNCQUFRO0FBQUEsR0FDZixZQUNDO0FBQUEsR0FDRCx5QkFBTTtBQUFBLElBQ0wsYUFBQTtBQUFBLElBQ0EsYUFBQTtBQUFBLFdBRks7QUFBQTs7Ozs7VUFIUztBQUFBOzs7OztFQU9oQixzQkFBYyxNQUFBO0FBQUEsU0FBWTtBQUFBLFNBQWdCO0FBQUE7QUFBQSxFQUMxQyxLQUFBLGVBQWdCLFFBQWhCO0FBQUEsRUFFQSxlQUFBLE9BQUEsdUJBQXVCO0FBQUEsR0FDdEIsWUFBQSxhQUFVLFdBQ1Q7QUFBQSxXQUFBO0FBQUE7QUFBQSxHQUNELFlBQUEscUJBQWdCLFNBQUEsR0FDZjtBQUFBLFdBQUEsYUFBQSxlQUFpQjtBQUFBO0FBQUE7O0VBRW5CLFFBQUEsT0FBQSxnQkFBZTtBQUFBLEdBQ2QsWUFBQSxnQkFBVyxTQUFBLEdBQ1Y7QUFBQSxXQUFBLFNBQUssR0FBTDtBQUFBO0FBQUEsR0FFRCxZQUFBLGdCQUFjLFVBQUEsR0FBQTtBQUFBLElBQUs7S0FDbEIsY0FBQSxTQUFBO0FBQUEsTUFDQztBQUFBLE9BQUE7QUFBQTtBQUFBO2NBRUE7QUFBQSxNQUFJLE9BQUQ7TUFDQyxRQUFBLFNBQVM7Ozs7R0FFZixZQUFBLFlBQVMsU0FBQSxHQUNSO0FBQUEsV0FBQTs7R0FFRCxZQUFBLG9CQUFTLFNBQUEsR0FBRSxjQUNWO0FBQUEsc0JBRHFCO0lBQ3JCLGFBQU8sU0FBQTtBQUFBLElBQ1AsVUFBSyxXQUNKO0FBQUEsS0FBQSxhQUFhOzs7T0FFWixjQUFBLE9BQ0M7QUFBQSxlQUFBO0FBQUE7QUFBQSxnQkFFQTtBQUFBLGVBQUEsaUJBQUs7QUFBQSxTQUNKLGFBQU07QUFBQSxTQUNOLGFBQU07QUFBQSxnQkFGRjtBQUFBOzs7Ozs7OztXQUdSO0FBQUE7QUFBQSxHQUdELFlBQUEsaUJBQVEsU0FBQSxHQUFFLEdBQ1Q7QUFBQTtLQUFLLFVBQUE7QUFBQTtNQUNKLDJCQUFDLE9BQUQsS0FDQztBQUFBLGNBQUEsYUFBQSxHQUFBO0FBQUE7QUFBQSxlQUVBO0FBQUEsY0FBQSxrQkFBQSxHQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7b0JBRUo7QUFBQSxFQTVEQSwwQ0FBQTtBQUFBIiwiZmlsZSI6ImF0L1NlcS9MTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9