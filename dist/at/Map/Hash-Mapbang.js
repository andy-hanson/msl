"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../compare","../../hash-code","../../js","../../methods","../../Objectbang","../../Type/Js-Method","../../Type/Kind","../../Type/Tuple","../../Type/Wrap-Type","../at","../atbang","../at-Type","../q","./Map","./Id-Mapbang","./Mapbang","./Map-Type","../../bang","../Seq/Seq","./Map"],function(exports,compare_0,hash_45code_1,js_2,methods_3,Object_33_4,Js_45Method_5,Kind_6,Tuple_7,Wrap_45Type_8,_64_9,_64_33_10,_64_45Type_11,_63_12,Map_13,Id_45Map_33_14,Map_33_15,Map_45Type_16,_33_17,Seq_18,Map_19){
	exports._get=_ms.lazy(function(){
		const _$3=_ms.getModule(compare_0),_61_63=_ms.get(_$3,"=?"),hash_45code=_ms.getDefaultExport(hash_45code_1),_$5=_ms.getModule(js_2),defined_63=_ms.get(_$5,"defined?"),_$6=_ms.getModule(methods_3),freeze=_ms.get(_$6,"freeze"),_$7=_ms.getModule(Object_33_4),p_33=_ms.get(_$7,"p!"),_$8=_ms.getModule(Js_45Method_5),js_45impl_33=_ms.get(_$8,"js-impl!"),_$9=_ms.getModule(Kind_6),kind_33=_ms.get(_$9,"kind!"),self_45kind_33=_ms.get(_$9,"self-kind!"),Tuple=_ms.getDefaultExport(Tuple_7),Wrap_45Type=_ms.getDefaultExport(Wrap_45Type_8),_$12=_ms.getModule(_64_9),iterator=_ms.get(_$12,"iterator"),map=_ms.get(_$12,"map"),_$13=_ms.getModule(_64_33_10),empty_33=_ms.get(_$13,"empty!"),_$14=_ms.getModule(_64_45Type_11),empty=_ms.get(_$14,"empty"),_63=_ms.getDefaultExport(_63_12),_$15=_ms.getModule(_63_12),Opt_45_62_63=_ms.get(_$15,"Opt->?"),_$16=_ms.getModule(Map_13),_63get=_ms.get(_$16,"?get"),values=_ms.get(_$16,"values"),Id_45Map_33=_ms.getDefaultExport(Id_45Map_33_14),Map_33=_ms.getDefaultExport(Map_33_15),_$18=_ms.getModule(Map_33_15),assoc_33=_ms.get(_$18,"assoc!"),un_45assoc_33=_ms.get(_$18,"un-assoc!"),Map_45Type=_ms.getDefaultExport(Map_45Type_16),_33=_ms.lazy(function(){
			return _ms.getDefaultExport(_33_17)
		}),_$22=_ms.lazyGetModule(Seq_18),seq_61_63=_ms.lazyProp(_$22,"seq=?"),_$23=_ms.lazyGetModule(Map_19),keys=_ms.lazyProp(_$23,"keys");
		const Hash_45Map_33=Wrap_45Type(function(){
			const built={};
			const doc=built.doc=`Default Map! type. Depends on efficient \`hash-code\` of its keys.`;
			const test=built.test=function test(){
				const _=function(){
					const built=new global.Map();
					_ms.assoc(built,1,2);
					_ms.assoc(built,3,4);
					return built
				}();
				_ms.unlazy(_33)(_61_63,_ms.sub(_,1),2);
				_ms.unlazy(_33)(_61_63,_ms.sub(_,3),4);
				_ms.unlazy(_33)(_ms.unlazy(seq_61_63),_,function(){
					const built=[];
					_ms.add(built,[1,2]);
					_ms.add(built,[3,4]);
					return built
				}());
				_ms.unlazy(_33)(_ms.unlazy(seq_61_63),_ms.unlazy(keys)(_),[1,3]);
				_ms.unlazy(_33)(_61_63,_63get(_,8),empty(_63))
			};
			const wrapped_45type=built["wrapped-type"]=Id_45Map_33;
			return _ms.setName(built,"Hash-Map!")
		}());
		const Bucket=Tuple(function(){
			const built={};
			const props=built.props=[`key`,`val!`,`next!`];
			return _ms.setName(built,"Bucket")
		}());
		self_45kind_33(Hash_45Map_33,Map_45Type,function(){
			const built=new global.Map();
			_ms.assoc(built,empty,function(){
				return Hash_45Map_33(empty(Id_45Map_33))
			});
			return built
		}());
		const opt_45bucket_45entry=function opt_45bucket_45entry(opt_45bucket,key){
			let cur=opt_45bucket;
			return function(){
				for(;;){
					if(! _ms.bool(defined_63(cur))){
						return void 0
					};
					if(_61_63(cur.key,key)){
						return cur
					};
					cur=cur["next!"]
				}
			}()
		};
		js_45impl_33(iterator,Hash_45Map_33,function*(){
			for(let bucket of values(this.val)){
				let cur=bucket;
				for(;;){
					if(! _ms.bool(defined_63(cur))){
						break
					};
					(yield [cur.key,cur["val!"]]);
					cur=cur["next!"]
				}
			}
		});
		kind_33(Hash_45Map_33,Map_33,function(){
			const built=new global.Map();
			_ms.assoc(built,_63get,function(_,key){
				const bucket=_.val.get(hash_45code(key));
				const entry=opt_45bucket_45entry(bucket,key);
				return map(Opt_45_62_63(entry),function(_){
					return _["val!"]
				})
			});
			_ms.assoc(built,assoc_33,function(hm,key,val){
				const hash=hash_45code(key);
				const bucket=hm.val.get(hash);
				{
					const _=opt_45bucket_45entry(bucket,key);
					if(_ms.bool(defined_63(_))){
						p_33(_,`val!`,val)
					} else {
						hm.val.set(hash,Bucket(key,val,bucket))
					}
				}
			});
			_ms.assoc(built,un_45assoc_33,function(hm,key){
				const hash=hash_45code(key);
				const bucket=hm.val.get(hash);
				return function(){
					const _=bucket;
					if(_ms.bool(defined_63(_))){
						return function(){
							if(_ms.bool(_61_63(_.key,key))){
								{
									const _=bucket["next!"];
									if(_ms.bool(defined_63(_))){
										assoc_33(hm.val,key,_)
									} else {
										un_45assoc_33(hm.val,hash)
									}
								};
								return _63(_["val!"])
							} else {
								let cur=bucket;
								return function(){
									for(;;){
										const next=cur["next!"];
										if(! _ms.bool(defined_63(_)(next))){
											return empty(_63)
										};
										if(_61_63(next.key,key)){
											p_33(cur,`next!`,next["next!"]);
											return _63(next["val!"])
										};
										cur=next
									}
								}()
							}
						}()
					} else {
						return empty(_63)
					}
				}()
			});
			_ms.assoc(built,freeze,function(_){
				freeze(_.val);
				return Object.freeze(_)
			});
			_ms.assoc(built,empty_33,function(_){
				empty_33(_.val)
			});
			return built
		}());
		const name=exports.name=`Hash-Map!`;
		exports.default=Hash_45Map_33;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9AL01hcC9IYXNoLU1hcCEubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztFQXdCQSxvQkFBVyxzQkFDUzs7R0FBbkIsb0JBQU07R0FFTixzQkFDUSxlQUFBO0lBQVAsa0JBQ0c7O3FCQUFGLEVBQUs7cUJBQ0wsRUFBSzs7O29CQUNKLGVBQUcsRUFBRSxHQUFHO29CQUNSLGVBQUcsRUFBRSxHQUFHOzBDQUNGLFlBQ0M7O21CQUFOLENBQUUsRUFBRTttQkFDSixDQUFFLEVBQUU7OzsyREFDSyxHQUFFLENBQUUsRUFBRTtvQkFDaEIsT0FBSSxPQUFLLEVBQUUsR0FBSSxNQUFNO0dBQUE7R0FFeEIsMkNBQWM7OztFQUVmLGFBQVMsZ0JBQ0s7O0dBQWIsd0JBQU8sQ0FBRyxNQUFNLE9BQU87OztFQUV4QixlQUFXLGNBQVUscUJBQ1E7O21CQUE1QixNQUNVLFVBQUE7V0FBVCxjQUFXLE1BQU07R0FBQTs7O0VBSW5CLDJCQUFvQiw4QkFBQSxhQUFXLElBQ0c7R0FBakMsUUFBUTs7V0FFTDtLQUFGLGNBQVEsV0FBUyxNQUNHO01BQW5CLE9BQU07O0tBQ1AsR0FBSSxPQUFHLFFBQVEsS0FDRztNQUFqQixPQUFNO0tBQUE7U0FDQTs7OztFQUVULGFBQVMsU0FBUyxjQUNhLFdBQUE7R0FBekIsUUFBQSxVQUFVLE9BQU8sVUFDUTtJQUE3QixRQUFRO0lBRUosT0FBQTtLQUFILGNBQVEsV0FBUyxNQUNHO01BQW5CO0tBQUE7WUFDRSxDQUFFLFFBQVE7U0FDTjs7OztFQUVWLFFBQU0sY0FBVSxpQkFDSTs7bUJBQW5CLE9BQVMsU0FBQSxFQUFFLElBQ0c7SUFBYixhQUFTLFVBQVcsWUFBVTtJQUM5QixZQUFRLHFCQUFpQixPQUFPO1dBQ2hDLElBQUssYUFBTyxPQUFRLFNBQUEsRUFDQztZQUFwQjs7O21CQUVGLFNBQVksU0FBQSxHQUFHLElBQUksSUFDRztJQUFyQixXQUFPLFlBQVU7SUFDakIsYUFBUyxXQUFXO0lBQ2Q7S0FBQSxRQUFBLHFCQUFpQixPQUFPO0tBQzdCLFlBQUEsV0FBUSxJQUNDO01BQ1IsS0FBRyxFQUFHLE9BQU07S0FBQSxPQUVUO01BQ0gsV0FBVyxLQUFNLE9BQU8sSUFBSSxJQUFJO0tBQUE7SUFBQTtHQUFBO21CQUVuQyxjQUFjLFNBQUEsR0FBRyxJQUNHO0lBQW5CLFdBQU8sWUFBVTtJQUNqQixhQUFTLFdBQVc7O0tBQ2YsUUFBQTtLQUNKLFlBQUEsV0FBUSxJQUNDOztPQUNQLFlBQUEsT0FBRyxNQUFNLE1BQ0c7UUFBTDtTQUFBLFFBQUE7U0FDTCxZQUFBLFdBQVEsSUFDQztVQUFSLFNBQU8sT0FBTyxJQUFJO1NBQUEsT0FFZjtVQUFILGNBQVUsT0FBTztTQUFBO1FBQUE7ZUFDbkIsSUFBRTtjQUVDO1FBQUgsUUFBUTs7Z0JBRUw7VUFBRixXQUFPO1VBQ1AsY0FBUSxXQUFRLEdBQUUsT0FDSTtXQUFyQixPQUFNLE1BQU07VUFBQTtVQUNiLEdBQUksT0FBRyxTQUFTLEtBQ0c7V0FBbEIsS0FBRyxJQUFLLFFBQU87V0FDZixPQUFNLElBQUU7O2NBQ0Y7U0FBQTtRQUFBO09BQUE7TUFBQTtLQUFBLE9BRVA7YUFBSCxNQUFNO0tBQUE7SUFBQTtHQUFBO21CQUVULE9BQVcsU0FBQSxFQUNDO0lBQVgsT0FBTztXQUNQLGNBQWM7R0FBQTttQkFFZixTQUFZLFNBQUEsRUFDQztJQUFaLFNBQU87Ozs7RUFySFQsd0JBQUE7a0JBd0JBIiwiZmlsZSI6ImF0L01hcC9IYXNoLU1hcGJhbmcuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==