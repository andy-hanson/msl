"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../Type/Kind","../../Type/Method","../at","../at-Type","../q","./Map","./Map-Type","./Hash-Mapbang","../../bang","../../Boolean","../../compare","../../control","../../math/methods","../../Type/Method","../../Type/Wrap-Type","../../Type/Type","../at","../atbang","../Set/Set","./Map","./Weak-Id-Mapbang"],function(exports,Kind_0,Method_1,_64_2,_64_45Type_3,_63_4,Map_5,Map_45Type_6,Hash_45Map_33_7,_33_8,Boolean_9,compare_10,control_11,methods_12,Method_13,Wrap_45Type_14,Type_15,_64_16,_64_33_17,Set_18,Map_19,Weak_45Id_45Map_33_20){
	exports._get=_ms.lazy(function(){
		const Kind=_ms.getDefaultExport(Kind_0),_$2=_ms.getModule(Kind_0),kind_33=_ms.get(_$2,"kind!"),self_45kind_33=_ms.get(_$2,"self-kind!"),Method=_ms.getDefaultExport(Method_1),_$3=_ms.getModule(Method_1),self_45impl_33=_ms.get(_$3,"self-impl!"),_64=_ms.getDefaultExport(_64_2),_$4=_ms.getModule(_64_2),each_33=_ms.get(_$4,"each!"),_$5=_ms.getModule(_64_45Type_3),empty=_ms.get(_$5,"empty"),_$6=_ms.getModule(_63_4),_63_45or=_ms.get(_$6,"?-or"),Map=_ms.getDefaultExport(Map_5),_$7=_ms.getModule(Map_5),_63get=_ms.get(_$7,"?get"),Map_45Type=_ms.getDefaultExport(Map_45Type_6),Hash_45Map_33=_ms.lazy(function(){
			return _ms.getDefaultExport(Hash_45Map_33_7)
		}),_33=_ms.lazy(function(){
			return _ms.getDefaultExport(_33_8)
		}),_$12=_ms.lazyGetModule(_33_8),_33not=_ms.lazyProp(_$12,"!not"),_$13=_ms.lazyGetModule(Boolean_9),not=_ms.lazyProp(_$13,"not"),compare=_ms.lazy(function(){
			return _ms.getDefaultExport(compare_10)
		}),_$14=_ms.lazyGetModule(compare_10),_61_63=_ms.lazyProp(_$14,"=?"),_$15=_ms.lazyGetModule(control_11),if_33=_ms.lazyProp(_$15,"if!"),_$16=_ms.lazyGetModule(methods_12),_42=_ms.lazyProp(_$16,"*"),_$17=_ms.lazyGetModule(Method_13),impl_33=_ms.lazyProp(_$17,"impl!"),Wrap_45Type=_ms.lazy(function(){
			return _ms.getDefaultExport(Wrap_45Type_14)
		}),_$19=_ms.lazyGetModule(Type_15),_61_62=_ms.lazyProp(_$19,"=>"),_$20=_ms.lazyGetModule(_64_16),empty_63=_ms.lazyProp(_$20,"empty?"),map=_ms.lazyProp(_$20,"map"),_$21=_ms.lazyGetModule(_64_33_17),empty_33=_ms.lazyProp(_$21,"empty!"),_$22=_ms.lazyGetModule(Set_18),set_61_63=_ms.lazyProp(_$22,"set=?"),_$23=_ms.lazyGetModule(Map_19),has_45key_63=_ms.lazyProp(_$23,"has-key?"),keys=_ms.lazyProp(_$23,"keys"),Weak_45Id_45Map_33=_ms.lazy(function(){
			return _ms.getDefaultExport(Weak_45Id_45Map_33_20)
		});
		const Map_33=Kind(function(){
			const doc="TODO";
			const implementor_45test=function(){
				return _ms.set(function(type){
					const Mt=_ms.unlazy(Wrap_45Type)(function(){
						const doc="Mappable Thing; might be a Weak-Id-Map!, so must be a reference type.";
						return {
							doc:doc,
							displayName:"Mt"
						}
					}());
					_ms.unlazy(impl_33)(_ms.unlazy(compare),Mt,function(a,b){
						return _ms.unlazy(compare)(a.val,b.val)
					});
					const ks=_ms.unlazy(_61_62)(Array,_ms.unlazy(map)([1,3,5,4,2],Mt));
					const noweak=function(){
						return _ms.set(function(_do){
							return _ms.unlazy(if_33)(_ms.unlazy(not)(_ms.contains(_ms.unlazy(Weak_45Id_45Map_33),_)),_do)
						},"displayName","noweak")
					}();
					const _=empty(type);
					noweak(function(){
						return _ms.unlazy(_33)(_ms.unlazy(empty_63),_)
					});
					const do_45adds=function(){
						return _ms.set(function(){
							return each_33(ks,function(n){
								return add_33(_,n,_ms.unlazy(_42)(2,n.val))
							})
						},"displayName","do-adds")
					}();
					do_45adds();
					each_33(ks,function(n){
						return _ms.unlazy(_33)(_ms.unlazy(_61_63),_ms.sub(_,n),_ms.unlazy(_42)(2,n.val))
					});
					_63get(_,Mt(0));
					_ms.unlazy(_33)(_ms.unlazy(empty_63),_63get(_,Mt(0)));
					noweak(function(){
						_ms.unlazy(_33)(_ms.unlazy(set_61_63),_ms.unlazy(keys)(_),_ms.unlazy(map)([1,2,3,4,5],Mt));
						_ms.unlazy(empty_33)(_);
						_ms.unlazy(_33)(_ms.unlazy(empty_63),_);
						do_45adds();
						un_45assoc_42_33(_,ks);
						return _ms.unlazy(_33)(_ms.unlazy(empty_63),_)
					});
					const zero=Mt(0);
					assoc_33(_,zero,0);
					assoc_33(_,zero,1);
					return _ms.unlazy(_33)(_ms.unlazy(_61_63),_ms.sub(_,zero),1)
				},"displayName","implementor-test")
			}();
			return {
				doc:doc,
				"implementor-test":implementor_45test,
				displayName:"Map!"
			}
		}());
		self_45kind_33(Map_33,Map_45Type);
		self_45impl_33(empty,Map_33,function(){
			return empty(_ms.unlazy(Hash_45Map_33))
		});
		const assoc_33=exports["assoc!"]=Method(function(){
			const doc="Set _[key] to val.";
			const args=["_","key","val"];
			return {
				doc:doc,
				args:args,
				displayName:"assoc!"
			}
		}());
		const assoc_42_33=exports["assoc*!"]=function(){
			const doc="Adds the other map's keys to mine, overriding my values.";
			const test="See Map!.implementor-test.";
			return _ms.set(function(_,to_45add){
				_ms.checkContains(Map_33,_,"_");
				_ms.checkContains(Map,to_45add,"to-add");
				return each_33(to_45add,function(pair){
					return assoc_33(_,pair.key,pair.val)
				})
			},"doc",doc,"test",test,"displayName","assoc*!")
		}();
		const un_45assoc_33=exports["un-assoc!"]=Method(function(){
			const doc="If there is a value associated with `key`, removes it and returns the value associated.";
			const args=["_","key"];
			return {
				doc:doc,
				args:args,
				displayName:"un-assoc!"
			}
		}());
		const un_45assoc_42_33=exports["un-assoc*!"]=function(){
			const doc="Removes keys (and by proxy, their associated values).";
			return _ms.set(function(_,_64to_45delete){
				_ms.checkContains(_64,_64to_45delete,"@to-delete");
				return each_33(_64to_45delete,_ms.sub(un_45assoc_33,_))
			},"doc",doc,"displayName","un-assoc*!")
		}();
		const add_33=exports["add!"]=Method(function(){
			const doc="|_ key:Any val:Any\nassoc! key val, but fail if _[key] is set already.";
			const args=["_","key","val"];
			const _default=function(){
				return _ms.set(function(_,key,val){
					_ms.unlazy(_33not)(_ms.unlazy(has_45key_63)(_,key),_ms.lazy(function(){
						return (("Already have key "+_ms.show(key))+".")
					}));
					return assoc_33(_,key,val)
				},"displayName","default")
			}();
			return {
				doc:doc,
				args:args,
				default:_default,
				displayName:"add!"
			}
		}());
		const get_45or_45add_33=exports["get-or-add!"]=Method(function(){
			const doc="map[key], and if it's not already there, fill it in with default-val.";
			const args=["_","key","~default-val"];
			const _default=function(){
				return _ms.set(function(map,key,default_45val){
					return _63_45or(_63get(map,key),_ms.lazy(function(){
						return function(){
							assoc_33(map,key,_ms.unlazy(default_45val));
							return _ms.unlazy(default_45val)
						}()
					}))
				},"displayName","default")
			}();
			return {
				doc:doc,
				args:args,
				default:_default,
				displayName:"get-or-add!"
			}
		}());
		kind_33(Map_33,Map);
		const displayName=exports.displayName="Map!";
		exports.default=Map_33;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9AL01hcC9NYXAhLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztFQXlCQSxhQUFPLGVBQ0k7R0FBVixVQUFNO0dBQ04sbUNBQW1CO21CQUFBLFNBQUEsS0FDSTtLQUF0QiwyQ0FDYztNQUFiLFVBQU07Ozs7Ozs2Q0FFTyxHQUFJLFNBQUEsRUFBRSxFQUNDO2lDQUFaLE1BQU07O0tBRWYsNEJBQVEsc0JBQVcsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUk7S0FDakMsdUJBQVU7cUJBQUEsU0FBQSxJQUNFOzRGQUFGLElBQWU7TUFBQTs7S0FDekIsUUFBSSxNQUFNO0tBQ1YsT0FDUSxVQUFBO2tEQUFFO0tBQUE7S0FDViwwQkFDVztxQkFBQSxVQUFBO2NBQVYsUUFBTSxHQUFJLFNBQUEsRUFDQztlQUFWLE9BQUssRUFBRSxrQkFBSyxFQUFFOzs7O0tBQ2hCO0tBQ0EsUUFBTSxHQUFJLFNBQUEsRUFDQzt3REFBTCxFQUFFLG1CQUFNLEVBQUU7O0tBQ2hCLE9BQUssRUFBRyxHQUFHOzBDQUNELE9BQUssRUFBRyxHQUFHO0tBQ3JCLE9BQ1EsVUFBQTs2REFBQyxtQkFBVyxDQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBSTsyQkFDMUI7MkNBQ0U7TUFDVDtNQUNBLGlCQUFXLEVBQUU7a0RBQ0o7S0FBQTtLQUdWLFdBQU8sR0FBRztLQUNWLFNBQU8sRUFBRSxLQUFLO0tBQ2QsU0FBTyxFQUFFLEtBQUs7dURBQ1QsRUFBRSxNQUFNO0lBQUE7Ozs7Ozs7O0VBRWYsZUFBVyxPQUFLO0VBQ2hCLGVBQVcsTUFBTSxPQUNNLFVBQUE7VUFBdEI7O0VBRUQsaUNBQVEsaUJBQ007R0FBYixVQUFNO0dBQ04sV0FBTSxDQUFHLElBQUksTUFBTTs7Ozs7OztFQUVwQiwrQ0FDUTtHQUFQLFVBQU07R0FDTixXQUFPO2tCQUNOLFNBQUEsRUFBTyxTQUNVO3NCQURmO3NCQUFZO1dBQ2QsUUFBTSxTQUFRLFNBQUEsS0FDSTtZQUFqQixTQUFPLEVBQUUsU0FBUzs7OztFQUVyQix5Q0FBVyxpQkFDTTtHQUFoQixVQUNDO0dBQ0QsV0FBTSxDQUFHLElBQUk7Ozs7Ozs7RUFFZCx1REFDVztHQUFWLFVBQU07a0JBQ0wsU0FBQSxFQUFFLGVBQ1k7c0JBREQ7V0FDYixRQUFNLHVCQUFXLGNBQVU7R0FBQTs7RUFFN0IsNkJBQU0saUJBQ007R0FBWCxVQUNDO0dBRUQsV0FBTSxDQUFHLElBQUksTUFBTTtHQUNuQix5QkFBVTttQkFBQSxTQUFBLEVBQUUsSUFBSSxJQUlmO2lEQUZnQixFQUFFO2FBQ2hCLCtCQUFrQjs7WUFDcEIsU0FBTyxFQUFFLElBQUk7SUFBQTs7Ozs7Ozs7O0VBRWYsK0NBQWEsaUJBQ007R0FBbEIsVUFBTTtHQUNOLFdBQU0sQ0FBRyxJQUFJLE1BQU07R0FDbkIseUJBQVU7bUJBQUEsU0FBQSxJQUFJLElBQUksY0FDWTtZQUE3QixTQUFNLE9BQUssSUFBSTt1QkFDTTtPQUFwQixTQUFPLElBQUksZUFGSzt5QkFBQTtNQUFBO0tBQUE7SUFBQTs7Ozs7Ozs7O0VBS25CLFFBQU0sT0FBSztFQTFHWCxzQ0FBQTtrQkE0R0EiLCJmaWxlIjoiYXQvTWFwL01hcGJhbmcuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==