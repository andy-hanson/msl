"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","esast/dist/mangle-identifier","../Object","../show","./Method","./Type","./Method"],function(exports,mangle_45identifier_0,Object_1,show_2,Method_3,Type_4,Method_5){
	exports._get=_ms.lazy(function(){
		const _$2=_ms.getModule(mangle_45identifier_0),unmangle=_ms.get(_$2,"unmangle"),_$3=_ms.getModule(Object_1),flag_63=_ms.get(_$3,"flag?"),show=_ms.getDefaultExport(show_2),_$5=_ms.getModule(Method_3),impl_33=_ms.get(_$5,"impl!"),Type=_ms.getDefaultExport(Type_4),Method=_ms.lazy(function(){
			return _ms.getDefaultExport(Method_5)
		});
		const name=exports.name="show-Type";
		exports.default=impl_33(show,Type,function(){
			const test=function test(){
				const _k0=[_ms.unlazy(Method)],_v0="Method";
				return _ms.map(_k0,_v0)
			};
			return _ms.set(function(type,opts){
				return function(){
					if(_ms.bool(flag_63(opts,"repr"))){
						return show.default(type,opts)
					} else {
						return unmangle(type.name)
					}
				}()
			},"test",test)
		}());
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9UeXBlL3Nob3ctVHlwZS5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0VBQUEsd0JBQUE7a0JBU0EsUUFBTSxLQUFLLGVBQ0k7R0FBZCxXQUNPLGVBQUE7SUFBTixVQUFBLHlCQUFlOzs7a0JBQ2YsU0FBQSxLQUFLLEtBQ0k7O0tBQ1IsWUFBQSxRQUFNLEtBQU0sU0FDSzthQUFoQixhQUFhLEtBQUs7S0FBQSxPQUVmO2FBQUgsU0FBUyIsImZpbGUiOiJUeXBlL3Nob3ctVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9