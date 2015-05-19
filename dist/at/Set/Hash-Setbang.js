"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../compare","../../Type/Kind","../../Type/Method","../../Type/Wrap-Type","../at","../atbang","../at-Type","../Map/Map","../Map/Hash-Mapbang","../Map/Mapbang","./Set","./Setbang"],function(exports,compare_0,Kind_1,Method_2,Wrap_45Type_3,_64_4,_64_33_5,_64_45Type_6,Map_7,Hash_45Map_33_8,Map_33_9,Set_10,Set_33_11){
	exports._get=_ms.lazy(function(){
		const _$2=_ms.getModule(compare_0),_61_63=_$2["=?"],_$3=_ms.getModule(Kind_1),kind_33=_$3["kind!"],self_45kind_33=_$3["self-kind!"],_$4=_ms.getModule(Method_2),impl_33=_$4["impl!"],impl_45for=_$4["impl-for"],Wrap_45Type=_ms.getDefaultExport(Wrap_45Type_3),_$6=_ms.getModule(_64_4),iterator=_$6.iterator,_$7=_ms.getModule(_64_33_5),_43_43_33=_$7["++!"],_45_45_33=_$7["--!"],empty_33=_$7["empty!"],_64_45Type=_ms.getDefaultExport(_64_45Type_6),_$8=_ms.getModule(_64_45Type_6),empty=_$8.empty,_$9=_ms.getModule(Map_7),keys=_$9.keys,Hash_45Map_33=_ms.getDefaultExport(Hash_45Map_33_8),_$11=_ms.getModule(Map_33_9),assoc_33=_$11["assoc!"],un_45assoc_33=_$11["un-assoc!"],Set=_ms.getDefaultExport(Set_10),Set_33=_ms.getDefaultExport(Set_33_11);
		const Hash_45Set_33=Wrap_45Type(function(){
			const doc="Set that considers elements equal using =?.\nRelies on an efficient hash-code implementation.";
			const wrapped_45type=Hash_45Map_33;
			return {
				doc:doc,
				"wrapped-type":wrapped_45type,
				name:"Hash-Set!"
			}
		}());
		self_45kind_33(Hash_45Set_33,_64_45Type,function(){
			const _k0=empty,_v0=function(){
				return Hash_45Set_33(empty(Hash_45Map_33))
			};
			return _ms.map(_k0,_v0)
		}());
		kind_33(Hash_45Set_33,Set_33,function(){
			const _k0=iterator,_v0=function(_){
				return iterator(keys(_.val))
			};
			const _k1=_43_43_33,_v1=function(_,_64added){
				for(let em of _ms.iterator(_64added)){
					assoc_33(_.val,em,true)
				}
			};
			const _k2=_45_45_33,_v2=function(_,_64deleted){
				for(let em of _ms.iterator(_64deleted)){
					un_45assoc_33(_.val,em)
				}
			};
			const _k3=empty_33,_v3=function(_){
				return empty_33(_.val)
			};
			return _ms.map(_k0,_v0,_k1,_v1,_k2,_v2,_k3,_v3)
		}());
		impl_33(_61_63,Hash_45Set_33,impl_45for(_61_63,Set));
		const name=exports.name="Hash-Set!";
		exports.default=Hash_45Set_33;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9AL1NldC9IYXNoLVNldCEubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFjQSxvQkFBWSxzQkFDUztHQUFwQixVQUNDO0dBRUQscUJBQWM7Ozs7Ozs7RUFFZixlQUFXLGNBQVUscUJBQ007R0FBMUIsVUFBQSxVQUNVLFVBQUE7V0FBVCxjQUFXLE1BQU07R0FBQTs7O0VBRW5CLFFBQU0sY0FBVSxpQkFDSTtHQUFuQixVQUFBLGFBQWEsU0FBQSxFQUNDO1dBQWIsU0FBVSxLQUFLOztHQUdoQixVQUFBLGNBQVEsU0FBQSxFQUFFLFNBQ007SUFBVixRQUFBLG1CQUFNLFVBQ007S0FBaEIsU0FBTyxNQUFNLEdBQUc7SUFBQTtHQUFBO0dBR2xCLFVBQUEsY0FBUSxTQUFBLEVBQUUsV0FDUTtJQUFaLFFBQUEsbUJBQU0sWUFDUTtLQUFsQixjQUFVLE1BQU07SUFBQTtHQUFBO0dBRWxCLFVBQUEsYUFBVyxTQUFBLEVBQ0M7V0FBWCxTQUFPOzs7O0VBR1QsUUFBTSxPQUFHLGNBQVcsV0FBUyxPQUFHO0VBMUNoQyx3QkFBQTtrQkE0Q0EiLCJmaWxlIjoiYXQvU2V0L0hhc2gtU2V0YmFuZy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9