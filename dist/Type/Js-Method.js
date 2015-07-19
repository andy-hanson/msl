"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","esast/dist/mangle-identifier","../js","../Object","./Impl-Type","./Obj-Type","./Pred-Type","./Type","../compare"],(exports,mangle_45identifier_0,js_1,Object_2,Impl_45Type_3,Obj_45Type_4,Pred_45Type_5,Type_6,compare_7)=>{
	exports._get=_ms.lazy(()=>{
		const mangle_45identifier=_ms.getDefaultExport(mangle_45identifier_0),_$3=_ms.getModule(js_1),js_45sub=_ms.get(_$3,"js-sub"),_$4=_ms.getModule(Object_2),Object_45Key=_ms.get(_$4,"Object-Key"),p_43_33=_ms.get(_$4,"p+!"),Impl_45Type=_ms.getDefaultExport(Impl_45Type_3),Obj_45Type=_ms.getDefaultExport(Obj_45Type_4),_$7=_ms.getModule(Pred_45Type_5),Any=_ms.get(_$7,"Any"),_$8=_ms.getModule(Type_6),contains_63=_ms.get(_$8,"contains?"),_$10=_ms.lazyGetModule(compare_7),_61_63=_ms.lazyProp(_$10,"=?");
		const Js_45Method=Obj_45Type(()=>{
			const built={};
			const doc=built.doc=`A Js-Method allows you to call a JavaScript-style method as a function.\nUnlike a Mason Method, for a Js-Method,\nthe first argument becomes \`this\` within the implementation's body.`;
			const test=built.test=function test(){
				const toString=Js_45Method(()=>{
					const built={};
					const impl_45symbol=built["impl-symbol"]=`toString`;
					return _ms.setName(built,"toString")
				}());
				_ms.assert(_ms.unlazy(_61_63),toString(1),`1`)
			};
			const props=built.props=()=>{
				const built={};
				const name=built.name=String;
				const impl_45symbol=built["impl-symbol"]=Object_45Key;
				return built
			}();
			const extensible=built.extensible=true;
			const make_45callable=built["make-callable"]=function make_45callable(jsm){
				const impl=()=>{
					const _=jsm["impl-symbol"];
					if(_ms.bool(_ms.contains(String,_))){
						return `a["${_ms.show(_)}"]`
					} else if(_ms.bool(_ms.contains(Symbol,_))){
						return `a[symbol]`
					} else throw new Error("No branch of `case` matches.")
				}();
				const src=`return function ${_ms.show(mangle_45identifier(jsm.name))}(a, b, c, d) {\n\tswitch (arguments.length) {\n\t\tcase 0: throw new Error("Js-Methods always need at least one argument.")\n\t\tcase 1: return ${_ms.show(impl)}()\n\t\tcase 2: return ${_ms.show(impl)}(b)\n\t\tcase 3: return ${_ms.show(impl)}(b, c)\n\t\tcase 4: return ${_ms.show(impl)}(b, c, d)\n\t\tcase 5: throw new Error("Does not support this many arguments.")\n\t}\n}`;
				const make_45method=Function(`symbol`,src);
				return make_45method(jsm["impl-symbol"])
			};
			return _ms.setName(built,"Js-Method")
		}());
		const send=exports.send=()=>{
			const built={};
			const doc=built.doc=`Calls \`target\`'s js-method \`name\` with the given arguments.`;
			const test=built.test=function test(){
				const built=new global.Map();
				_ms.assoc(built,[1,`toFixed`,2],`1.00`);
				return built
			};
			return _ms.set(function send(target,name){
				const args=[].slice.call(arguments,2);
				_ms.checkContains(Any,target,"target");
				_ms.checkContains(Object_45Key,name,"name");
				const impl=js_45sub(target,name);
				if(! _ms.bool(contains_63(Function,impl)))throw _ms.error(`Js-Method ${_ms.show(name)} not implemented by ${_ms.show(target)}.`);
				return impl.apply(target,args)
			},built)
		}();
		const send_33=exports["send!"]=send;
		const js_45impl_33=exports["js-impl!"]=function js_45impl_33(method,type,implementation){
			_ms.checkContains(Js_45Method,method,"method");
			_ms.checkContains(Impl_45Type,type,"type");
			_ms.checkContains(Function,implementation,"implementation");
			p_43_33(type.prototype,method["impl-symbol"],implementation)
		};
		const name=exports.name=`Js-Method`;
		exports.default=Js_45Method;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9UeXBlL0pzLU1ldGhvZC5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVdBLGtCQUFXLGVBQ1E7O0dBQWxCLG9CQUNDO0dBR0Qsc0JBQ1EsZUFBQTtJQUFQLGVBQVcsZ0JBQ1M7O0tBQW5CLHlDQUFjOzs7a0NBQ0gsU0FBUyxHQUFJOztHQUMxQiw0QkFDTTs7SUFBTCxzQkFBTTtJQUNOLHlDQUFhOzs7R0FDZCxrQ0FBWTtHQUNaLDZDQUFnQix5QkFBQSxJQUNHO0lBQWxCO0tBQVksUUFBQTtLQUNYLHlCQUFDLE9BQUQsSUFDTzthQUFMLGVBQUs7WUFDUCx5QkFBQyxPQUFELElBQ087YUFBTDs7O0lBR0gsVUFDQyw0QkFBaUIsb0JBQWtCLHNLQUdqQix3Q0FDQSx5Q0FDQSw0Q0FDQTtJQUluQixvQkFBYyxTQUFVLFNBQVE7V0FDaEMsY0FBWTs7OztFQUVkLDRCQUNLOztHQUFKLG9CQUFNO0dBQ04sc0JBQ08sZUFBQTs7b0JBQU4sQ0FBRSxFQUFHLFVBQVMsR0FBUTs7O2tCQUN0QixjQUFBLE9BQVcsS0FDdUI7O3NCQUQzQjtzQkFBUztJQUNoQixXQUFPLFNBQU8sT0FBTztJQUNiLGNBQUEsWUFBVSxTQUFTLHVCQUFhLHNCQUFXLHFDQUEwQjtXQUM3RSxXQUFXLE9BQU87R0FBQTs7RUFFcEIsK0JBQU87RUFFUCx1Q0FBWSxzQkFBQSxPQUFpQixLQUFlLGVBQ3VCO3FCQURoRDtxQkFBZTtxQkFBeUI7R0FDMUQsUUFBSSxlQUFlLHNCQUFtQjtFQUFBO0VBMUR2Qyx3QkFBQTtrQkFXQSIsImZpbGUiOiJUeXBlL0pzLU1ldGhvZC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9