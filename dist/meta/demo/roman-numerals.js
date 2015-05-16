"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../compare","../../math/Number","../../math/methods","../../bang","../../at/Seq/Range","../../Type/Type"],function(exports,compare_0,Number_1,methods_2,_33_3,Range_4,Type_5){
	exports._get=_ms.lazy(function(){
		const _$2=_ms.getModule(compare_0),_61_63=_ms.get(_$2,"=?"),_60_61_63=_ms.get(_$2,"<=?"),_$3=_ms.getModule(Number_1),log=_ms.get(_$3,"log"),Nat=_ms.get(_$3,"Nat"),pow=_ms.get(_$3,"pow"),round_45down=_ms.get(_$3,"round-down"),_$4=_ms.getModule(methods_2),_45=_ms.get(_$4,"-"),_42=_ms.get(_$4,"*"),_33=_ms.lazy(function(){
			return _ms.getDefaultExport(_33_3)
		}),_$7=_ms.lazyGetModule(Range_4),range=_ms.lazyProp(_$7,"range"),_$8=_ms.lazyGetModule(Type_5),contains_63=_ms.lazyProp(_$8,"contains?");
		const roman_45digits=function(){
			const _k0=1,_v0="I";
			const _k1=5,_v1="V";
			const _k2=10,_v2="X";
			const _k3=50,_v3="L";
			const _k4=100,_v4="C";
			const _k5=500,_v5="D";
			const _k6=1000,_v6="M";
			return _ms.map(_k0,_v0,_k1,_v1,_k2,_v2,_k3,_v3,_k4,_v4,_k5,_v5,_k6,_v6)
		}();
		const power_45of_4510_45below=function power_45of_4510_45below(_){
			return pow(10,round_45down(log(10,_)))
		};
		const roman=exports.roman=function(){
			const doc="Converts a number to Roman numerals.\nOnly works for values 1-3999.";
			const test=function test(){
				const _k0=[1],_v0="I";
				const _k1=[4],_v1="IV";
				const _k2=[5],_v2="V";
				const _k3=[9],_v3="IX";
				const _k4=[44],_v4="XLIV";
				const _k5=[49],_v5="XLIX";
				const _k6=[2014],_v6="MMXIV";
				return _ms.map(_k0,_v0,_k1,_v1,_k2,_v2,_k3,_v3,_k4,_v4,_k5,_v5,_k6,_v6)
			};
			return _ms.set(function roman(n){
				_ms.checkContains(Nat,n,"n");
				_ms.unlazy(_33)(_ms.unlazy(contains_63),_ms.unlazy(range)(1,4000),n);
				const dec=power_45of_4510_45below(n);
				const dig=function dig(dec_45multiple){
					return _ms.sub(roman_45digits,_42(dec_45multiple,dec))
				};
				const rec=function rec(dec_45multiple){
					return function(){
						const _=_45(n,_42(dec_45multiple,dec));
						if(_ms.bool(_61_63(_,0))){
							return ""
						} else {
							return roman(_)
						}
					}()
				};
				const gt_63=function gt_63(dec_45multiple){
					return _60_61_63(_42(dec_45multiple,dec),n)
				};
				return _ms.checkContains(String,function(){
					if(_ms.bool(gt_63(9))){
						return (((""+_ms.show(dig(1)))+_ms.show(dig(10)))+_ms.show(rec(9)))
					} else if(_ms.bool(gt_63(5))){
						return ((""+_ms.show(dig(5)))+_ms.show(rec(5)))
					} else if(_ms.bool(gt_63(4))){
						return (((""+_ms.show(dig(1)))+_ms.show(dig(5)))+_ms.show(rec(4)))
					} else {
						return ((""+_ms.show(dig(1)))+_ms.show(rec(1)))
					}
				}(),"res")
			},"doc",doc,"test",test)
		}();
		const name=exports.name="roman-numerals";
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9tZXRhL2RlbW8vcm9tYW4tbnVtZXJhbHMubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztFQVVBLCtCQUNjO0dBQWIsVUFBQSxNQUFNO0dBQ04sVUFBQSxNQUFNO0dBQ04sVUFBQSxPQUFPO0dBQ1AsVUFBQSxPQUFPO0dBQ1AsVUFBQSxRQUFRO0dBQ1IsVUFBQSxRQUFRO0dBQ1IsVUFBQSxTQUFTOzs7RUFFViw4QkFBcUIsaUNBQUEsRUFDQztVQUFyQixJQUFJLEdBQUksYUFBWSxJQUFJLEdBQUc7RUFBQTtFQUU1QixvQ0FDTTtHQUFMLFVBQ0M7R0FFRCxXQUNPLGVBQUE7SUFBTixVQUFBLENBQUUsT0FBUTtJQUNWLFVBQUEsQ0FBRSxPQUFRO0lBQ1YsVUFBQSxDQUFFLE9BQVE7SUFDVixVQUFBLENBQUUsT0FBUTtJQUNWLFVBQUEsQ0FBRSxRQUFTO0lBQ1gsVUFBQSxDQUFFLFFBQVM7SUFDWCxVQUFBLENBQUUsVUFBVzs7O2tCQUViLGVBQVEsRUFJUjtzQkFKVTs4REFFVSxFQUFFLE1BQU07SUFFNUIsVUFBTSx3QkFBa0I7SUFDeEIsVUFBTyxhQUFBLGVBQ1k7b0JBQWxCLGVBQWMsSUFBRSxlQUFhO0lBQUE7SUFDOUIsVUFBTyxhQUFBLGVBQ1k7O01BQWIsUUFBQSxJQUFFLEVBQUcsSUFBRSxlQUFhO01BQ3hCLFlBQUEsT0FBRyxFQUFFLElBQ0M7Y0FBSjtNQUFBLE9BRUU7Y0FBSCxNQUFBO01BQUE7S0FBQTtJQUFBO0lBQ0gsWUFBTyxlQUFBLGVBQ1k7WUFBbEIsVUFBSyxJQUFFLGVBQWEsS0FBSztJQUFBOzZCQWR6QjtLQWdCQSxZQUFBLE1BQUksSUFDQzthQUFILEdBUEMsWUFPQSxJQUFJLGNBQUcsSUFBSSxlQUFJLElBQUk7S0FBQSxPQUN0QixZQUFBLE1BQUksSUFDQzthQUFILEVBVEMsWUFTQSxJQUFJLGNBQUcsSUFBSTtLQUFBLE9BQ2QsWUFBQSxNQUFJLElBQ0M7YUFBSCxHQVhDLFlBV0EsSUFBSSxjQUFHLElBQUksY0FBRyxJQUFJO0tBQUEsT0FFakI7YUFBRixFQWJDLFlBYUEsSUFBSSxjQUFHLElBQUk7S0FBQTtJQUFBOzs7RUExRGpCLHdCQUFBIiwiZmlsZSI6Im1ldGEvZGVtby9yb21hbi1udW1lcmFscy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9