"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../at/at","../../at/Range","../../math/Number","../../Object","../../Type/Type","../../at/Seq/Seq"],(exports,_64_0,Range_1,Number_2,Object_3,Type_4,Seq_5)=>{
	exports._get=_ms.lazy(()=>{
		const _$2=_ms.getModule(_64_0),empty_63=_ms.get(_$2,"empty?"),map_39=_ms.get(_$2,"map'"),Range=_ms.getDefaultExport(Range_1),_$4=_ms.getModule(Number_2),divisible_63=_ms.get(_$4,"divisible?"),infinity=_ms.get(_$4,"infinity"),Nat=_ms.get(_$4,"Nat"),_$5=_ms.getModule(Object_3),Object_45_62Map=_ms.get(_$5,"Object->Map"),_$6=_ms.getModule(Type_4),_61_62=_ms.get(_$6,"=>"),_$8=_ms.lazyGetModule(Seq_5),seq_61_63=_ms.lazyProp(_$8,"seq=?"),take_39=_ms.lazyProp(_$8,"take'");
		const make_45fizz_45buzz=exports["make-fizz-buzz"]=(()=>{
			const built={};
			const doc=built.doc=`Infinite Seq of Fizz Buzz game.\nSpec is an Obj whose values are divisors and\nwhose keys are strings to be printed when the divisor matches.`;
			const test=built.test=function test(){
				const fizz_45buzz=(()=>{
					return make_45fizz_45buzz((()=>{
						const built={};
						const Fizz=built.Fizz=3;
						const Buzz=built.Buzz=5;
						return built
					})())
				})();
				_ms.assert(_ms.unlazy(seq_61_63),_ms.unlazy(take_39)(fizz_45buzz,6),(()=>{
					const built=[];
					_ms.add(built,1);
					_ms.add(built,2);
					_ms.add(built,`Fizz`);
					_ms.add(built,4);
					_ms.add(built,`Buzz`);
					_ms.add(built,`Fizz`);
					return built
				})());
				const fizz_45buzz_45jazz=(()=>{
					return make_45fizz_45buzz((()=>{
						const built={};
						const Fizz=built.Fizz=3;
						const Jazz=built.Jazz=4;
						const Buzz=built.Buzz=5;
						return built
					})())
				})();
				_ms.assert(_ms.unlazy(seq_61_63),_ms.unlazy(take_39)(fizz_45buzz_45jazz,17),(()=>{
					const built=[];
					_ms.add(built,1);
					_ms.add(built,2);
					_ms.add(built,`Fizz`);
					_ms.add(built,`Jazz`);
					_ms.add(built,`Buzz`);
					_ms.add(built,`Fizz`);
					_ms.add(built,7);
					_ms.add(built,`Jazz`);
					_ms.add(built,`Fizz`);
					_ms.add(built,`Buzz`);
					_ms.add(built,11);
					_ms.add(built,`FizzJazz`);
					_ms.add(built,13);
					_ms.add(built,14);
					_ms.add(built,`FizzBuzz`);
					_ms.add(built,`Jazz`);
					_ms.add(built,17);
					return built
				})())
			};
			return _ms.set(function make_45fizz_45buzz(spec){
				const tests=_61_62(Array,map_39(Object_45_62Map(spec),_=>{
					const built={};
					const shout=_ms.checkContains(String,built.shout=_ms.sub(_,0),"shout");
					const divisor=_ms.checkContains(Nat,built.divisor=_ms.sub(_,1),"divisor");
					return built
				}));
				return map_39(new (Range)(1,infinity),n=>{
					let s="";
					for(let _ of tests){
						if(divisible_63(n,_.divisor)){
							s=`${s}${_.shout}`
						}
					};
					return (()=>{
						if(empty_63(s)){
							return n
						} else {
							return s
						}
					})()
				})
			},built)
		})();
		const name=exports.name=`fizz-buzz`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvbWFzb24zL21zbC9zcmMvbWV0YS9kZW1vL2ZpenotYnV6ei5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQVNBLG1EQUNlLEtBQUE7O0dBQWQsb0JBQ0M7R0FHRCxzQkFDUSxlQUFBO0lBQVAsa0JBQ1csS0FBQTtZQUNWLG1CQUNjLEtBQUE7O01BQWIsc0JBQU07TUFDTixzQkFBTTs7Ozt5REFDYSxZQUFVLEdBQ0UsS0FBQTs7bUJBQTlCO21CQUNBO21CQUNDO21CQUNEO21CQUNDO21CQUNBOzs7SUFFSix5QkFDZ0IsS0FBQTtZQUFmLG1CQUNjLEtBQUE7O01BQWIsc0JBQU07TUFDTixzQkFBTTtNQUNOLHNCQUFNOzs7O3lEQUNhLG1CQUFlLElBQ0csS0FBQTs7bUJBQXBDO21CQUNBO21CQUNDO21CQUNBO21CQUNBO21CQUNBO21CQUNEO21CQUNDO21CQUNBO21CQUNBO21CQUNEO21CQUNDO21CQUNEO21CQUNBO21CQUNDO21CQUNBO21CQUNEOzs7O2tCQUNILDRCQUFBLEtBQ0k7SUFDSixZQUFRLE9BQUcsTUFBTyxPQUFNLGdCQUFZLE1BQU8sR0FDQzs7S0FDM0MsOEJBQU0sMkJBQVEsRUFBRTtLQUNoQixnQ0FBUSwwQkFBSyxFQUFFOzs7V0FDaEIsT0FBTSxLQUFJLE9BQU0sRUFBRSxVQUFXLEdBQ0M7S0FBN0IsTUFBTztLQUNGLFFBQUEsS0FBQSxNQUNLO01BQVQsR0FBSSxhQUFXLEVBQUUsV0FDUztTQUFuQixHQUFDLElBQUc7OztZQUdSO01BQUgsR0FBQSxTQUFPLEdBQ0M7Y0FBUDtNQUFBLE9BRUc7Y0FBSDtNQUFBO0tBQUE7SUFBQTtHQUFBOztFQW5FTCx3QkFBQSIsImZpbGUiOiJtZXRhL2RlbW8vZml6ei1idXp6LmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=