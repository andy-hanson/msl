"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../Boolean","../../compare","../../Type/Type","../../Type/Kind","../../Type/Method","../at","../at-Type","./Hash-Setbang","../at"],function(exports,Boolean_0,compare_1,Type_2,Kind_3,Method_4,_64_5,_64_45Type_6,Hash_45Set_33_7,_64_8){
	exports._get=_ms.lazy(function(){
		const _$2=_ms.getModule(Boolean_0),and=_$2.and,_$3=_ms.getModule(compare_1),_61_63=_$3["=?"],same_63=_$3["same?"],_$4=_ms.getModule(Type_2),_61_62=_$4["=>"],contains_63=_$4["contains?"],type_45of=_$4["type-of"],Kind=_ms.getDefaultExport(Kind_3),_$5=_ms.getModule(Kind_3),kind_33=_$5["kind!"],self_45kind_33=_$5["self-kind!"],Method=_ms.getDefaultExport(Method_4),_$6=_ms.getModule(Method_4),impl_33=_$6["impl!"],_64=_ms.getDefaultExport(_64_5),_$7=_ms.getModule(_64_5),all_63=_$7["all?"],count=_$7.count,keep=_$7.keep,_64_45Type=_ms.getDefaultExport(_64_45Type_6),_$8=_ms.getModule(_64_45Type_6),empty=_$8.empty,from_45stream=_$8["from-stream"],Hash_45Set_33=_ms.lazy(function(){
			return _ms.getDefaultExport(Hash_45Set_33_7)
		}),_$12=_ms.lazyGetModule(_64_8),_45_45=_ms.lazyProp(_$12,"--");
		const Set=Kind(function(){
			const doc="@ without repeat values.";
			return {
				doc:doc,
				name:"Set"
			}
		}());
		self_45kind_33(Set,_64_45Type,function(){
			const _k0=empty,_v0=function(){
				return empty(_ms.unlazy(Hash_45Set_33))
			};
			const _k1=from_45stream,_v1=function(_){
				return from_45stream(_ms.unlazy(Hash_45Set_33),_)
			};
			return _ms.map(_k0,_v0,_k1,_v1)
		}());
		kind_33(Set,_64);
		impl_33(_61_63,Set,function(){
			const doc="Two Sets are =? if they have the same type and contain the same values.";
			return _ms.set(function(a,b){
				return and(same_63(type_45of,a,b),_ms.lazy(function(){
					return same_63(count,a,b)
				}),_ms.lazy(function(){
					return all_63(a,_ms.sub(contains_63,b))
				}))
			},"doc",doc)
		}());
		const set_61_63=exports["set=?"]=function(){
			const doc="Whether two @s have the same values, regardless of order or count.";
			return _ms.set(function set_61_63(a,b){
				return _61_63(_61_62(Set,a),_61_62(Set,b))
			},"doc",doc)
		}();
		const intersect=exports.intersect=Method(function(){
			const doc="TODO";
			const args=2;
			const _default=function _default(a,b){
				return keep(a,_ms.sub(contains_63,_61_62(Set,b)))
			};
			return {
				doc:doc,
				args:args,
				default:_default,
				name:"intersect"
			}
		}());
		const name=exports.name="Set";
		exports.default=Set;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9AL1NldC9TZXQubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztFQWFBLFVBQU0sZUFDSTtHQUFULFVBQU07Ozs7OztFQUVQLGVBQVcsSUFBSSxxQkFDTTtHQUFwQixVQUFBLFVBQ1UsVUFBQTtXQUFUOztHQUNELFVBQUEsa0JBQWdCLFNBQUEsRUFDQztXQUFoQix3Q0FBc0I7R0FBQTs7O0VBQ3hCLFFBQU0sSUFBSTtFQUVWLFFBQU0sT0FBRyxjQUNHO0dBQVgsVUFBTTtrQkFNTCxTQUFBLEVBQUUsRUFDQztXQUFILElBQUssUUFBTSxVQUFRLEVBQUU7WUFBSyxRQUFNLE1BQU0sRUFBRTtJQUFBO1lBQUssT0FBSyxVQUFFLFlBQVU7SUFBQTtHQUFBOztFQUVoRSwyQ0FDTTtHQUFMLFVBQU07a0JBS0wsbUJBQUEsRUFBSSxFQUNHO1dBQVAsT0FBSSxPQUFHLElBQUksR0FBSSxPQUFHLElBQUk7R0FBQTs7RUFFeEIsa0NBQVcsaUJBQ007R0FBaEIsVUFBTTtHQUdOLFdBQU07R0FDTixlQUFVLGtCQUFBLEVBQUUsRUFDQztXQUFaLEtBQUssVUFBRSxZQUFXLE9BQUcsSUFBSTtHQUFBOzs7Ozs7OztFQWhEM0Isd0JBQUE7a0JBa0RBIiwiZmlsZSI6ImF0L1NldC9TZXQuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==