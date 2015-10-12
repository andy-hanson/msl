"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./methods","./Type/Alias-Type","./Type/Method","./at/at","./at/at-Type","./at/Map/Hash-Map","./at/Map/Map","./at/Map/Weak-Id-Map","./at/Seq/Seq","./Object","./Type/Pred-Type","./Type/Type"],(exports,methods_0,Alias_45Type_1,Method_2,_64_3,_64_45Type_4,Hash_45Map_5,Map_6,Weak_45Id_45Map_7,Seq_8,Object_9,Pred_45Type_10,Type_11)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(methods_0),sub=_ms.get(_$0,"sub"),Alias_45Type=_ms.getDefaultExport(Alias_45Type_1),_$1=_ms.getModule(Method_2),impl_33=_ms.get(_$1,"impl!"),self_45impl_33=_ms.get(_$1,"self-impl!"),_64=_ms.lazy(()=>_ms.getDefaultExport(_64_3)),_$2=_ms.lazyGetModule(_64_3),_43_43=_ms.lazyProp(_$2,"++"),_$3=_ms.lazyGetModule(_64_45Type_4),empty=_ms.lazyProp(_$3,"empty"),Hash_45Map=_ms.lazy(()=>_ms.getDefaultExport(Hash_45Map_5)),Map=_ms.lazy(()=>_ms.getDefaultExport(Map_6)),_$4=_ms.lazyGetModule(Map_6),get_45or_45add_33=_ms.lazyProp(_$4,"get-or-add!"),Weak_45Id_45Map=_ms.lazy(()=>_ms.getDefaultExport(Weak_45Id_45Map_7)),_$5=_ms.lazyGetModule(Seq_8),_64rtail=_ms.lazyProp(_$5,"@rtail"),last=_ms.lazyProp(_$5,"last"),_$6=_ms.lazyGetModule(Object_9),Object_45_62Map=_ms.lazyProp(_$6,"Object->Map"),_$7=_ms.lazyGetModule(Pred_45Type_10),ObjLit=_ms.lazyProp(_$7,"ObjLit"),_$8=_ms.lazyGetModule(Type_11),_61_62=_ms.lazyProp(_$8,"=>");
		const Action=exports.Action=new (Alias_45Type)((()=>{
			const built={};
			built.name="Action";
			const alias_45of=built["alias-of"]=Function;
			return built
		})());
		const Pred=exports.Pred=new (Alias_45Type)((()=>{
			const built={};
			built.name="Pred";
			const alias_45of=built["alias-of"]=Function;
			return built
		})());
		const identity=exports.identity=function identity(_){
			return _
		};
		const id_45memoize=exports["id-memoize"]=function id_45memoize(_){
			_ms.checkContains(Function,_,"_");
			const wm=_ms.unlazy(empty)(_ms.unlazy(Weak_45Id_45Map));
			return arg=>{
				_ms.checkContains(Object,arg,"arg");
				return _ms.unlazy(get_45or_45add_33)(wm,arg,_ms.lazy(()=>_(arg)))
			}
		};
		const hash_45memoize=exports["hash-memoize"]=function hash_45memoize(_){
			_ms.checkContains(Function,_,"_");
			const hm=_ms.unlazy(empty)(_ms.unlazy(Hash_45Map));
			return arg=>{
				_ms.checkContains(Object,arg,"arg");
				return _ms.unlazy(get_45or_45add_33)(hm,arg,_ms.lazy(()=>_(arg)))
			}
		};
		const spread=exports.spread=function spread(fun){
			const args=[].slice.call(arguments,1);
			_ms.checkContains(Function,fun,"fun");
			const init_45args=_ms.unlazy(_64rtail)(args);
			const last_45arg=_ms.unlazy(last)(args);
			const _64spreaded=(()=>{
				const _=last_45arg;
				if(_ms.contains(_ms.unlazy(Map),_)){
					return _ms.unlazy(_61_62)(Array,_)
				} else if(_ms.contains(_ms.unlazy(_64),_)){
					return (()=>{
						const built=[];
						for(let elem of _){
							_ms.add(built,[elem])
						};
						return built
					})()
				} else if(_ms.contains(_ms.unlazy(ObjLit),_)){
					return _ms.unlazy(_61_62)(Array,_ms.unlazy(Object_45_62Map)(_))
				} else {
					throw new (Error)(`Can only spread a @, Map, or ObjLit, not ${_}`)
				}
			})();
			return _ms.checkContains(_ms.unlazy(_64),(()=>{
				const built=[];
				for(let _ of _64spreaded){
					const all_45args=_ms.unlazy(_43_43)(init_45args,_);
					_ms.add(built,fun(...all_45args))
				};
				return built
			})(),"returned value")
		};
		const spread_33=exports["spread!"]=function spread_33(fun){
			const args=[].slice.call(arguments,1);
			spread(fun,...args)
		};
		const thunk=exports.thunk=function thunk(_){
			return ()=>{
				return _
			}
		};
		const curry=(()=>{
			return Function(`f`,`return Function.prototype.bind.apply(f, arguments)`)
		})();
		impl_33(sub,Function,function(){
			const _this=this;
			const args=[].slice.call(arguments,0);
			return curry(_this,...args)
		});
		self_45impl_33(sub,Function,()=>{
			return Function
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvRnVuY3Rpb24ubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFlQSw0QkFBUSxLQUFJLGNBQ1UsS0FBQTs7Y0FHckI7R0FDQSxtQ0FBVTs7O0VBRVgsd0JBQU0sS0FBSSxjQUNVLEtBQUE7O2NBQ25CO0dBQ0EsbUNBQVU7OztFQUVYLGdDQUFXLGtCQUFBO1VBRVY7RUFBQTtFQUlBLHlDQUFhLHNCQUFBO3FCQUFFO0dBR2Q7VUFDQztzQkFBSTt5Q0FDUSxHQUFHLGlCQUFNLEVBQUU7R0FBQTtFQUFBO0VBRXpCLDZDQUFlLHdCQUFBO3FCQUFFO0dBSWhCO1VBQ0M7c0JBQUk7eUNBQ1EsR0FBRyxpQkFBTSxFQUFFO0dBQUE7RUFBQTtFQUUxQiw0QkFBUyxnQkFBRzs7cUJBQUk7R0FJZix1Q0FBbUI7R0FDbkIsa0NBQWdCO0dBQ2hCLGtCQUFpQjtJQUFBLFFBQUE7SUFDaEIsZ0NBQUEsR0FDSTsrQkFDQSxNQUFNO0lBQUEsT0FDVixnQ0FBQSxHQUNFO1lBQUk7O2NBQUEsUUFBUSxFQUNDO3FCQUFiLENBQUM7TUFBQTs7O1dBQ0gsbUNBQUEsR0FDTzsrQkFBSCxrQ0FBTTtJQUFBLE9BRU47S0FBSCxrQkFBUSw0Q0FBMEM7Ozs0Q0FFL0M7O1lBQUEsS0FBQSxZQUNTO0tBQWIsb0NBQWMsWUFBVTttQkFDdEIsSUFBSSxHQUFHO0lBQUE7Ozs7RUFFWCxtQ0FBVyxtQkFBQTs7R0FFVixPQUFPLElBQUksR0FBRztFQUFBO0VBR2YsMEJBQVEsZUFBQTtVQUdOO1dBQUE7R0FBQTtFQUFBO0VBRUYsWUFDTyxLQUFBO1VBQ04sU0FBVSxJQUFJOztFQUtmLFFBQU0sSUFBSSxTQUFXO1NBQ2Q7O1VBQU4sTUFBTSxNQUFLLEdBQUc7RUFBQTtFQUVmLGVBQVcsSUFBSSxTQUNVO1VBS3hCO0VBQUEiLCJmaWxlIjoiRnVuY3Rpb24uanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==
