"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/at","./at/at-Type","./at/Seq/Seq","./compare","./control","./Function","./js","./math/methods","./show","./Type/Impl-Type","./Type/Kind","./Type/Method","./Type/Pred-Type","./Type/Type","./bang","./at/at","./Function"],function(exports,_64_0,_64_45Type_1,Seq_2,compare_3,control_4,Function_5,js_6,methods_7,show_8,Impl_45Type_9,Kind_10,Method_11,Pred_45Type_12,Type_13,_33_14,_64_15,Function_16){
	exports._get=_ms.lazy(function(){
		const _64=_ms.getDefaultExport(_64_0),_$2=_ms.getModule(_64_0),count=_ms.get(_$2,"count"),empty_63=_ms.get(_$2,"empty?"),_64_45Type=_ms.getDefaultExport(_64_45Type_1),_$3=_ms.getModule(_64_45Type_1),empty=_ms.get(_$3,"empty"),from_45stream=_ms.get(_$3,"from-stream"),Seq=_ms.getDefaultExport(Seq_2),_$5=_ms.getModule(compare_3),_61_63=_ms.get(_$5,"=?"),sort=_ms.get(_$5,"sort"),_$6=_ms.getModule(control_4),opr=_ms.get(_$6,"opr"),_$7=_ms.getModule(Function_5),noop=_ms.get(_$7,"noop"),thunk=_ms.get(_$7,"thunk"),_$8=_ms.getModule(js_6),js_43=_ms.get(_$8,"js+"),_$9=_ms.getModule(methods_7),_45=_ms.get(_$9,"-"),show=_ms.getDefaultExport(show_8),_$11=_ms.getModule(Impl_45Type_9),self_45type=_ms.get(_$11,"self-type"),_$12=_ms.getModule(Kind_10),kind_33=_ms.get(_$12,"kind!"),self_45kind_33=_ms.get(_$12,"self-kind!"),_$13=_ms.getModule(Method_11),impl_33=_ms.get(_$13,"impl!"),impl_45double_33=_ms.get(_$13,"impl-double!"),_$14=_ms.getModule(Pred_45Type_12),Opt=_ms.get(_$14,"Opt"),_$15=_ms.getModule(Type_13),_61_62=_ms.get(_$15,"=>"),_33=_ms.lazy(function(){
			return _ms.getDefaultExport(_33_14)
		}),_$18=_ms.lazyGetModule(_64_15),map=_ms.lazyProp(_$18,"map"),_$19=_ms.lazyGetModule(Function_16),identity=_ms.lazyProp(_$19,"identity");
		const test=exports.test=function test(){
			return _ms.unlazy(_33)(_61_63,"123",_ms.unlazy(map)("123",_ms.unlazy(identity)))
		};
		self_45kind_33(String,_64_45Type,function(){
			const _k0=empty,_v0=thunk("");
			const _k1=from_45stream,_v1=function(_){
				return from_45stream(Array,_)
			};
			return _ms.map(_k0,_v0,_k1,_v1)
		}());
		impl_45double_33(_61_62,self_45type(String),_64,function(){
			const test=function test(){
				const _k0=[String,[1,2,3]],_v0="123";
				const _k1=[String,[1,2,3],", "],_v1="1, 2, 3";
				return _ms.map(_k0,_v0,_k1,_v1)
			};
			return _ms.set(function(str,_,joiner){
				_ms.checkContains(_ms.sub(Opt,String),joiner,"joiner");
				noop(str);
				joiner=opr(joiner,"");
				let s="";
				for(let _ of _[Symbol.iterator]()){
					s=js_43(s,show(_));
					s=js_43(s,joiner)
				};
				return s.slice(0,_45(s.length,joiner.length))
			},"test",test)
		}());
		impl_33(sort,String,function(){
			const test=function test(){
				return "TODO"
			};
			return _ms.set(function(_,_63sort_45by){
				_ms.checkContains(_ms.sub(Opt,Function),_63sort_45by,"?sort-by");
				return _61_62(String,sort.default(_,_63sort_45by))
			},"test",test)
		}());
		const name=exports.name="String-as-Seq";
		exports.default=kind_33(String,Seq,function(){
			const _k0=count,_v0=function(_){
				return _.length
			};
			const _k1=empty_63,_v1=function(_){
				return _61_63(0,_.length)
			};
			return _ms.map(_k0,_v0,_k1,_v1)
		}());
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9TdHJpbmctYXMtU2VxLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7RUFzQkEsd0JBQ08sZUFBQTswQkFBSixPQUFJLHNCQUFXOztFQUVsQixlQUFXLE9BQU8scUJBQ007R0FBdkIsVUFBQSxVQUFTLE1BYUQ7R0FYUixVQUFBLGtCQUFnQixTQUFBLEVBQ0M7V0FBaEIsY0FBWSxNQUFNO0dBQUE7OztFQUdwQixpQkFBYSxPQUFJLFlBQVUsUUFBUSxjQUNDO0dBQW5DLFdBQ08sZUFBQTtJQUFOLFVBQUEsQ0FBRSxPQUFPLENBQUUsRUFBRSxFQUFFLFFBQVU7SUFDekIsVUFBQSxDQUFFLE9BQU8sQ0FBRSxFQUFFLEVBQUUsR0FBSyxVQUFVOzs7a0JBQzlCLFNBQUEsSUFBSSxFQUFFLE9BQ2tCOzhCQURYLElBQUk7SUFDakIsS0FBSztXQUNLLElBQUksT0FDUDtJQUFQLE1BQU87SUFDRixRQUFBLEtBQUEscUJBQ0M7T0FBQSxNQUFJLEVBQUUsS0FBQTtPQUNOLE1BQUksRUFBRTtJQUFBO1dBQ1osUUFBUSxFQUFHLElBQUUsU0FBUzs7O0VBR3hCLFFBQU0sS0FBSyxpQkFDTTtHQUFoQixXQUNPLGVBQUE7V0FBTDtHQUFBO2tCQUNELFNBQUEsRUFBRSxhQUNzQjs4QkFEYixJQUFJO1dBQ2YsT0FBRyxPQUFRLGFBQWEsRUFBRTtHQUFBOztFQWxENUIsd0JBQUE7a0JBb0RBLFFBQU0sT0FBTyxjQUNHO0dBQWYsVUFBQSxVQUFVLFNBQUEsRUFDQztXQUFWOztHQUNELFVBQUEsYUFBVyxTQUFBLEVBQ0M7V0FBWCxPQUFHLEVBQUUiLCJmaWxlIjoiU3RyaW5nLWFzLVNlcS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9