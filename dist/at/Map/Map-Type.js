"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../Function","../../methods","../../Type/Method","../../Type/Pred-Type","../../Type/Kind","../at","../at-Type","./Map","./Hash-Mapbang","./Mapbang"],function(exports,Function_0,methods_1,Method_2,Pred_45Type_3,Kind_4,_64_5,_64_45Type_6,Map_7,Hash_45Map_33_8,Map_33_9){
	exports._get=_ms.lazy(function(){
		const _$2=_ms.getModule(Function_0),identity=_ms.get(_$2,"identity"),_$3=_ms.getModule(methods_1),sub=_ms.get(_$3,"sub"),_$4=_ms.getModule(Method_2),impl_33=_ms.get(_$4,"impl!"),self_45impl_33=_ms.get(_$4,"self-impl!"),_$5=_ms.getModule(Pred_45Type_3),Any=_ms.get(_$5,"Any"),Kind=_ms.getDefaultExport(Kind_4),_$6=_ms.getModule(Kind_4),kind_33=_ms.get(_$6,"kind!"),self_45kind_33=_ms.get(_$6,"self-kind!"),_64=_ms.getDefaultExport(_64_5),_$7=_ms.getModule(_64_5),each_33=_ms.get(_$7,"each!"),_64_45Type=_ms.getDefaultExport(_64_45Type_6),_$8=_ms.getModule(_64_45Type_6),empty=_ms.get(_$8,"empty"),from_45stream=_ms.get(_$8,"from-stream"),Map=_ms.getDefaultExport(Map_7),Hash_45Map_33=_ms.lazy(function(){
			return _ms.getDefaultExport(Hash_45Map_33_8)
		}),_$12=_ms.lazyGetModule(Map_33_9),assoc_33=_ms.lazyProp(_$12,"assoc!");
		const Map_45Type=Kind(function(){
			const doc="Any sub-type of Map.";
			return {
				doc:doc,
				name:"Map-Type"
			}
		}());
		kind_33(Map_45Type,_64_45Type);
		self_45kind_33(Map,Map_45Type);
		self_45impl_33(empty,Map,function(){
			return empty(_ms.unlazy(Hash_45Map_33))
		});
		impl_33(sub,Map_45Type,identity);
		impl_33(from_45stream,Map_45Type,function(){
			const test=function test(){
				const m=function(){
					const _k0=1,_v0=2;
					const _k1=3,_v1=4;
					return _ms.map(_k0,_v0,_k1,_v1)
				}();
				const _k0=[_ms.unlazy(Hash_45Map_33),m],_v0=function(){
					const _k0=1,_v0=2;
					const _k1=3,_v1=4;
					return _ms.map(_k0,_v0,_k1,_v1)
				}();
				return _ms.map(_k0,_v0)
			};
			return _ms.set(function(type,stream){
				_ms.checkContains(_64,stream,"stream");
				const _=empty(type);
				each_33(stream,function(pair){
					const _$38=pair,key=_ms.checkContains(Any,_$38.key,"key"),val=_ms.checkContains(Any,_$38.val,"val");
					return _ms.unlazy(assoc_33)(_,key,val)
				});
				return _
			},"test",test)
		}());
		const name=exports.name="Map-Type";
		exports.default=Map_45Type;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9AL01hcC9NYXAtVHlwZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0VBYUEsaUJBQVcsZUFDSTtHQUFkLFVBQU07Ozs7OztFQUVQLFFBQU0sV0FBUztFQUdmLGVBQVcsSUFBSTtFQUNmLGVBQVcsTUFBTSxJQUNLLFVBQUE7VUFBckI7O0VBRUQsUUFBTSxJQUFJLFdBQVM7RUFFbkIsUUFBTSxjQUFZLHFCQUNRO0dBQXpCLFdBQ08sZUFBQTtJQUNOLGtCQUNHO0tBQUYsVUFBQSxNQUFLO0tBQ0wsVUFBQSxNQUFLOzs7SUFDTixVQUFBLDJCQUFZLGlCQUNNO0tBQWpCLFVBQUEsTUFBSztLQUNMLFVBQUEsTUFBSzs7Ozs7a0JBQ04sU0FBQSxLQUFLLE9BQ1E7c0JBREQ7SUFDWixRQUFJLE1BQU07SUFDVixRQUFNLE9BQVEsU0FBQSxLQUNJO0tBQWpCLFdBQWtCLDJCQUFkLDBDQUFRO2lDQUNMLEVBQUUsSUFBSTtJQUFBO1dBQ2Q7R0FBQTs7RUF2Q0Ysd0JBQUE7a0JBeUNBIiwiZmlsZSI6ImF0L01hcC9NYXAtVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9