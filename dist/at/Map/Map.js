"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../compare","../../methods","../../private/bootstrap","../../to-string","../../Type/Kind","../../Type/Method","../../Type/Pred-Type","../../Type/Type","../at","../at-Type","../q","./Id-Map","../../math/methods"],(exports,compare_0,methods_1,bootstrap_2,to_45string_3,Kind_4,Method_5,Pred_45Type_6,Type_7,_64_8,_64_45Type_9,_63_10,Id_45Map_11,methods_12)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(compare_0),_61_63=_ms.get(_$0,"=?"),_$1=_ms.getModule(methods_1),sub=_ms.get(_$1,"sub"),_$2=_ms.getModule(bootstrap_2),msDef=_ms.get(_$2,"msDef"),to_45string=_ms.getDefaultExport(to_45string_3),Kind=_ms.getDefaultExport(Kind_4),_$3=_ms.getModule(Kind_4),kind_33=_ms.get(_$3,"kind!"),Method=_ms.getDefaultExport(Method_5),_$4=_ms.getModule(Method_5),impl_33=_ms.get(_$4,"impl!"),_$5=_ms.getModule(Pred_45Type_6),Any=_ms.get(_$5,"Any"),_$6=_ms.getModule(Type_7),_61_62=_ms.get(_$6,"=>"),type_45of=_ms.get(_$6,"type-of"),_64=_ms.getDefaultExport(_64_8),_$7=_ms.getModule(_64_8),all_63=_ms.get(_$7,"all?"),count=_ms.get(_$7,"count"),empty_63=_ms.get(_$7,"empty?"),map_126=_ms.get(_$7,"map~"),_$8=_ms.getModule(_64_45Type_9),empty=_ms.get(_$8,"empty"),_$9=_ms.getModule(_63_10),_63_45or=_ms.get(_$9,"?-or"),un_45_63=_ms.get(_$9,"un-?"),Id_45Map=_ms.lazy(()=>_ms.getDefaultExport(Id_45Map_11)),_$10=_ms.lazyGetModule(methods_12),_43=_ms.lazyProp(_$10,"+");
		const Map=new (Kind)((()=>{
			const built={};
			built[`name`]="Map";
			const doc=built.doc=`Mapping from keys to values.`;
			return built
		})());
		kind_33(Map,_64);
		impl_33(to_45string,Map,(()=>{
			const built={};
			const test=built.test=function test(){
				const built=new (global.Map)();
				const m=(()=>{
					const built=new (global.Map)();
					_ms.assoc(built,1,2);
					return built
				})();
				_ms.assoc(built,[m],`Map\n\t1 -> 2`);
				return built
			};
			return _ms.set(function(){
				const _this=this;
				const parts=map_126(_this,pair=>{
					return `${_ms.sub(pair,0)} -> ${_ms.sub(pair,1)}`
				});
				return `${_this.constructor.name}
	${_61_62(String,parts,`\n\t`)}`
			},built)
		})());
		const _63get=exports["?get"]=new (Method)((()=>{
			const built={};
			built[`name`]="?get";
			const doc=built.doc=`\`?\` containing the value corresponding to \`key\`, if any.`;
			const args=built.args=[`_`,`key`];
			return built
		})());
		const has_45key_63=exports["has-key?"]=new (Method)((()=>{
			const built={};
			built[`name`]="has-key?";
			const doc=built.doc=`|:Boolean _ key:Any
Whether the key is in the Map.`;
			const args=built.args=[`_`,`key`];
			const _default=built.default=function _default(key){
				const _this=this;
				return ! empty_63(_63get(_this,key))
			};
			return built
		})());
		const keys=exports.keys=new (Method)((()=>{
			const built={};
			built[`name`]="keys";
			const doc=built.doc=`Every key that the Map \`has-key?\`.`;
			const args=built.args=1;
			const _default=built.default=function _default(){
				const _this=this;
				return _61_62(Array,map_126(_this,pair=>{
					return _ms.sub(pair,0)
				}))
			};
			return built
		})());
		const values=exports.values=new (Method)((()=>{
			const built={};
			built[`name`]="values";
			const doc=built.doc=`Every value in the Map.`;
			const args=built.args=1;
			const _default=built.default=function _default(){
				const _this=this;
				return _61_62(Array,map_126(_this,pair=>{
					return _ms.sub(pair,1)
				}))
			};
			return built
		})());
		impl_33(_61_63,Map,function(other){
			const _this=this;
			return (_61_63(type_45of(_this),type_45of(other))&&map_61_63(_this,other))
		});
		impl_33(sub,Map,function(key){
			const _this=this;
			_ms.checkContains(Any,key,"key");
			return un_45_63(_63get(_this,key),_ms.lazy(()=>`${_this} does not contain ${key}.`))
		});
		const make_45map=exports["make-map"]=(()=>{
			const built={};
			const doc=built.doc=`Creates a Map whose values are the result of applying \`get-value\` to each key.`;
			const test=built.test=function test(){
				const map=make_45map([1,2],x=>{
					return _ms.unlazy(_43)(x,1)
				});
				_ms.assert(_61_63,_ms.sub(map,1),2);
				_ms.assert(_61_63,_ms.sub(map,2),3)
			};
			return _ms.set((_64key,get_45value)=>{
				_ms.checkContains(_64,_64key,"@key");
				_ms.checkContains(Function,get_45value,"get-value");
				const map=empty(_ms.unlazy(Id_45Map));
				for(let _ of _64key){
					assoc_33(map,_,get_45value(_))
				};
				return map
			},built)
		})();
		const map_61_63=exports["map=?"]=(()=>{
			const built={};
			const doc=built.doc=`Whether the two maps have the same keys and the same associated values, regardless of the maps' types.`;
			const test=built.test=function test(){
				const built=new (global.Map)();
				const m1=(()=>{
					const built=new (global.Map)();
					_ms.assoc(built,1,2);
					_ms.assoc(built,3,4);
					return built
				})();
				const m2=(()=>{
					const built=new (global.Map)();
					_ms.assoc(built,1,2);
					return built
				})();
				_ms.assoc(built,[m1,m1],true);
				_ms.assoc(built,[m1,m2],false);
				return built
			};
			return _ms.set((a,b)=>{
				_ms.checkContains(Map,a,"a");
				_ms.checkContains(Map,b,"b");
				return (_61_63(count(a),count(b))&&(()=>{
					return all_63(a,pair=>{
						const key=_ms.sub(pair,0);
						const val=_ms.sub(pair,1);
						const _63bk=_63get(b,key);
						return (! empty_63(_63bk)&&_61_63(val,_63bk.val))
					})
				})())
			},built)
		})();
		const assoc_33=exports["assoc!"]=new (Method)((()=>{
			const built={};
			built[`name`]="assoc!";
			const doc=built.doc=`Set _[key] to val.`;
			const args=built.args=[`_`,`key`,`val`];
			return built
		})());
		msDef(`assoc`,assoc_33);
		const assoc_42_33=exports["assoc*!"]=(()=>{
			const built={};
			const doc=built.doc=`Adds the other map~s keys to mine, overriding my values.`;
			const test=built.test=`See Map.implementor-test.`;
			return _ms.set((map,to_45add)=>{
				_ms.checkContains(Map,map,"map");
				_ms.checkContains(Map,to_45add,"to-add");
				for(let _ of to_45add){
					assoc_33(map,_ms.sub(_,0),_ms.sub(_,1))
				}
			},built)
		})();
		const un_45assoc_33=exports["un-assoc!"]=new (Method)((()=>{
			const built={};
			built[`name`]="un-assoc!";
			const doc=built.doc=`If there is a value associated with \`key\`, removes it and returns the value associated.`;
			const args=built.args=[`_`,`key`];
			return built
		})());
		const un_45assoc_42_33=exports["un-assoc*!"]=(()=>{
			const built={};
			const doc=built.doc=`Removes keys (and by proxy, their associated values).`;
			return _ms.set((map,_64to_45delete)=>{
				_ms.checkContains(Map,map,"map");
				_ms.checkContains(_64,_64to_45delete,"@to-delete");
				for(let _ of _64to_45delete){
					un_45assoc_33(map,_)
				}
			},built)
		})();
		const add_33=exports["add!"]=new (Method)((()=>{
			const built={};
			built[`name`]="add!";
			const doc=built.doc=`|_ key:Any val:Any
assoc! key val, but fail if _[key] is set already.`;
			const args=built.args=[`_`,`key`,`val`];
			const _default=built.default=function _default(key,val){
				const _this=this;
				if(has_45key_63(_this,key))throw new (Error)(`Already have key ${key}.`);
				assoc_33(_this,key,val)
			};
			return built
		})());
		const get_45or_45add_33=exports["get-or-add!"]=new (Method)((()=>{
			const built={};
			built[`name`]="get-or-add!";
			const doc=built.doc=`map[key], and if it's not already there, fill it in with default-val.`;
			const args=built.args=[`_`,`key`,`~default-val`];
			const _default=built.default=function _default(key,default_45val){
				const _this=this;
				return _63_45or(_63get(_this,key),_ms.lazy(()=>(()=>{
					assoc_33(_this,key,_ms.unlazy(default_45val));
					return _ms.unlazy(default_45val)
				})()))
			};
			return built
		})());
		const name=exports.name=`Map`;
		exports.default=Map;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvQC9NYXAvTWFwLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBaUJBLFVBQUssS0FBSSxNQUNJLEtBQUE7O1NBQVosUUFBQTtHQUNBLG9CQUFNOzs7RUFFUCxRQUFNLElBQUk7RUFFVixRQUFNLFlBQVUsSUFDRyxLQUFBOztHQUFsQixzQkFDTyxlQUFBOztJQUFOLFFBQ0csS0FBQTs7cUJBQUYsRUFBSzs7O29CQUNOLENBQUUsR0FBUTs7O2tCQUVULFVBQUE7VUE0SFE7SUExSFQsWUFBUSxRQTBIQyxNQTFIVSxNQUNJO1lBQXJCLFdBQUMsS0FBSyxpQkFBUSxLQUFLOztXQUVwQixHQXVIUSwyQkF0SE4sT0FBRyxPQUFPLE1BQU87OztFQUdyQiw2QkFBTSxLQUFJLFFBQ00sS0FBQTs7U0FBZixRQUFBO0dBQ0Esb0JBQU07R0FDTixzQkFBTSxDQUFHLElBQUk7OztFQUVkLHVDQUFVLEtBQUksUUFDTSxLQUFBOztTQUFuQixRQUFBO0dBQ0Esb0JBQ0M7R0FFRCxzQkFBTSxDQUFHLElBQUk7R0FDYiw2QkFBVyxrQkFBQSxJQUNHO1VBdUdMO1dBdkdSLEVBQUssU0FBUSxPQXVHTCxNQXZHZTtHQUFBOzs7RUFFekIsd0JBQU0sS0FBSSxRQUNNLEtBQUE7O1NBQWYsUUFBQTtHQUNBLG9CQUFNO0dBQ04sc0JBQU07R0FDTiw2QkFDVyxtQkFBQTtVQWdHRjtXQWhHUixPQVFHLE1BUk8sUUFnR0YsTUFoR2EsTUFDSTtvQkFBeEIsS0FBSztJQUFBO0dBQUE7OztFQUVSLDRCQUFRLEtBQUksUUFDTSxLQUFBOztTQUFqQixRQUFBO0dBQ0Esb0JBQU07R0FDTixzQkFBTTtHQUNOLDZCQUNXLG1CQUFBO1VBd0ZGO1dBeEZSLE9BQUcsTUFBTyxRQXdGRixNQXhGYSxNQUNJO29CQUF4QixLQUFLO0lBQUE7R0FBQTs7O0VBR1IsUUFBTSxPQUFHLElBQU0sU0FBQSxNQUNLO1NBbUZWO1VBbkZULENBQUssT0FBSSxVQW1GQSxPQW5GZSxVQUFRLFNBQVMsVUFtRmhDLE1BbkYyQztFQUFBO0VBRXJELFFBQU0sSUFBSSxJQUFNLFNBQUEsSUFDTztTQWdGYjtxQkFqRlU7VUFDbkIsU0FBTSxPQWdGRyxNQWhGTyxrQkFBTyxHQWdGZCwwQkFoRnVDOztFQUdqRCxxQ0FDUyxLQUFBOztHQUFSLG9CQUFNO0dBQ04sc0JBQ1EsZUFBQTtJQUFQLFVBQU0sV0FBUyxDQUFFLEVBQUUsR0FBSyxHQUNDOzRCQUF0QixFQUFFO0lBQUE7ZUFDRyxlQUFHLElBQUksR0FBRztlQUNWLGVBQUcsSUFBSSxHQUFHO0dBQUE7a0JBRWxCLENBQUEsT0FBTyxjQUNrQjtzQkFEcEI7c0JBQVk7SUFDakIsVUFBTTtJQUNELFFBQUEsS0FBQSxPQUNJO0tBQVIsU0FBTyxJQUFJLEVBQUUsWUFBQTtJQUFBO1dBQ2Q7R0FBQTs7RUFFRixpQ0FDTSxLQUFBOztHQUFMLG9CQUFNO0dBQ04sc0JBQ08sZUFBQTs7SUFBTixTQUNJLEtBQUE7O3FCQUFILEVBQUs7cUJBQ0wsRUFBSzs7O0lBQ04sU0FDSSxLQUFBOztxQkFBSCxFQUFLOzs7b0JBQ04sQ0FBRSxHQUFHLElBQVE7b0JBQ2IsQ0FBRSxHQUFHLElBQVE7OztrQkFDYixDQUFBLEVBQU0sSUFDSztzQkFEVDtzQkFBTTtXQUNSLENBQUssT0FBSSxNQUFNLEdBQUksTUFBTSxLQUNHLEtBQUE7WUFBM0IsT0FBSyxFQUFHLE1BQ0k7TUFDWCxrQkFBTSxLQUFLO01BQ1gsa0JBQU0sS0FBSztNQUNYLFlBQU0sT0FBSyxFQUFFO2FBQ2IsQ0FBSyxFQUFJLFNBQU8sUUFBTSxPQUFHLElBQUk7Ozs7O0VBR2pDLGlDQUFRLEtBQUksUUFDTSxLQUFBOztTQUFqQixRQUFBO0dBQ0Esb0JBQU07R0FDTixzQkFBTSxDQUFHLElBQUksTUFBTTs7O0VBQ3BCLE1BQU8sUUFBTztFQUVkLHFDQUNRLEtBQUE7O0dBQVAsb0JBQU07R0FDTixzQkFBTztrQkFDTCxDQUFBLElBQVEsV0FDVTtzQkFEZDtzQkFBVztJQUNYLFFBQUEsS0FBQSxTQUNNO0tBQ1YsU0FBTyxZQUFJLEVBQUUsV0FBRyxFQUFFO0lBQUE7R0FBQTs7RUFFckIseUNBQVcsS0FBSSxRQUNNLEtBQUE7O1NBQXBCLFFBQUE7R0FDQSxvQkFDQztHQUNELHNCQUFNLENBQUcsSUFBSTs7O0VBRWQsNkNBQ1csS0FBQTs7R0FBVixvQkFBTTtrQkFDSixDQUFBLElBQVEsaUJBQ1k7c0JBRGhCO3NCQUFlO0lBQ2YsUUFBQSxLQUFBLGVBQ1U7S0FBZCxjQUFVLElBQUk7SUFBQTtHQUFBOztFQUVqQiw2QkFBTSxLQUFJLFFBQ00sS0FBQTs7U0FBZixRQUFBO0dBQ0Esb0JBQ0M7R0FFRCxzQkFBTSxDQUFHLElBQUksTUFBTTtHQUNuQiw2QkFBWSxrQkFBQSxJQUFJLElBR2Y7VUFRUTtJQVRDLEdBQUEsYUFTRCxNQVRlLHVCQUFZLG9CQUFrQjtJQUNyRCxTQVFRLE1BUkksSUFBSTtHQUFBOzs7RUFFbEIsK0NBQWEsS0FBSSxRQUNNLEtBQUE7O1NBQXRCLFFBQUE7R0FDQSxvQkFBTTtHQUNOLHNCQUFNLENBQUcsSUFBSSxNQUFNO0dBQ25CLDZCQUFXLGtCQUFBLElBQUksY0FDWTtVQUNsQjtXQURSLFNBQU0sT0FDRSxNQURRLGtCQUNNLEtBQUE7S0FBckIsU0FBTyxNQUFLOzs7Ozs7RUF6SmhCLHdCQUFBO2tCQWlCQSIsImZpbGUiOiJhdC9NYXAvTWFwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=