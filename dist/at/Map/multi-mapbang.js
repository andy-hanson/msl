"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../control","../../Type/Pred-Type","../at","../atbang","../at-Type","../Seq/Arraybang","./Mapbang","../../bang","../../compare","../../show","../at","../Seq/Seq"],function(exports,control_0,Pred_45Type_1,_64_2,_64_33_3,_64_45Type_4,Array_33_5,Map_33_6,_33_7,compare_8,show_9,_64_10,Seq_11){
	exports._get=_ms.lazy(function(){
		const _$2=_ms.getModule(control_0),opr=_$2.opr,_$3=_ms.getModule(Pred_45Type_1),Opt=_$3.Opt,_64=_ms.getDefaultExport(_64_2),_$5=_ms.getModule(_64_33_3),_43_43_33=_$5["++!"],_64_45Type=_ms.getDefaultExport(_64_45Type_4),_$6=_ms.getModule(_64_45Type_4),empty=_$6.empty,Array_33=_ms.getDefaultExport(Array_33_5),Map_33=_ms.getDefaultExport(Map_33_6),_$8=_ms.getModule(Map_33_6),get_45or_45add_33=_$8["get-or-add!"],_33=_ms.lazy(function(){
			return _ms.getDefaultExport(_33_7)
		}),_$11=_ms.lazyGetModule(compare_8),_61_63=_ms.lazyProp(_$11,"=?"),show=_ms.lazy(function(){
			return _ms.getDefaultExport(show_9)
		}),_$13=_ms.lazyGetModule(_64_10),keep=_ms.lazyProp(_$13,"keep"),_$14=_ms.lazyGetModule(Seq_11),seq_61_63=_ms.lazyProp(_$14,"seq=?");
		const add_45to_45_64_33=exports["add-to-@!"]=function(){
			const doc="Treat `map` as a multi-map and add `added` to the @ associated with `key`.\n`@-type` is the type to use to create the `@` if it's not already there.";
			return _ms.set(function add_45to_45_64_33(map,key,added,_64_45type){
				const _=get_45or_45add_33(map,key,_ms.lazy(function(){
					return function(){
						return empty(opr(_64_45type,Array_33))
					}()
				}));
				return _43_43_33(_,added)
			},"doc",doc)
		}();
		const group=exports.group=function(){
			const doc="Creates groups of elements which all have the same result for some function.\n`(group @x f)[k]` should be `f";
			return _ms.set(function group(_64value,group_45by){
				const map=empty(Map_33);
				for(let _ of _ms.iterator(_64value)){
					const key=group_45by(_);
					add_45to_45_64_33(map,key,[_])
				};
				return map
			},"doc",doc)
		}();
		const name=exports.name="multi-map!";
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9AL01hcC9tdWx0aS1tYXAhLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztFQWVBLHVEQUNVO0dBQVQsVUFDQztrQkFRQSwyQkFBQSxJQUFTLElBQUksTUFBUSxXQUNrQjtJQUF2QyxRQUFJLGtCQUFZLElBQUk7c0JBQ0s7YUFBeEIsTUFBTyxJQUFJLFdBQU87S0FBQTtJQUFBO1dBQ25CLFVBQUksRUFBRTtHQUFBOztFQUVSLG9DQUNNO0dBQUwsVUFDQztrQkFXQSxlQUFBLFNBQVMsV0FDaUI7SUFBMUIsVUFBTSxNQUFNO0lBQ1AsUUFBQSxrQkFBQSxVQUNNO0tBQVYsVUFBTSxXQUFTO0tBQ2Ysa0JBQVUsSUFBSSxJQUFJLENBQUU7SUFBQTtXQUNyQjtHQUFBOztFQWhERix3QkFBQSIsImZpbGUiOiJhdC9NYXAvbXVsdGktbWFwYmFuZy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9