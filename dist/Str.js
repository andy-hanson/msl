"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./Bool","./compare","./js","./RegExp","./Type/Kind","./Type/Method","./Type/Pred-Type","./at/at"],function(exports,Bool_0,compare_1,js_2,RegExp_3,Kind_4,Method_5,Pred_45Type_6,_64_7){
	exports._get=_ms.lazy(function(){
		const _$2=_ms.getModule(Bool_0),and=_ms.get(_$2,"and"),compare=_ms.getDefaultExport(compare_1),_$3=_ms.getModule(compare_1),_61_63=_ms.get(_$3,"=?"),_$4=_ms.getModule(js_2),id_61_63=_ms.get(_$4,"id=?"),_$5=_ms.getModule(RegExp_3),regexp=_ms.get(_$5,"regexp"),Kind=_ms.getDefaultExport(Kind_4),_$7=_ms.getModule(Method_5),impl_33=_ms.get(_$7,"impl!"),Pred_45Type=_ms.getDefaultExport(Pred_45Type_6),_$10=_ms.lazyGetModule(_64_7),count=_ms.lazyProp(_$10,"count");
		const exports={};
		const Str=function(){
			const doc="JavaScript's native String type.";
			return _ms.set(global.String,"doc",doc,"displayName","Str")
		}();
		const Str_45Test=exports["Str-Test"]=Kind(function(){
			const doc="Something we can compare a Str to.";
			const implementors=[Str,RegExp];
			return {
				doc:doc,
				implementors:implementors,
				displayName:"Str-Test"
			}
		}());
		const _45_62upper=exports["->upper"]=function(){
			const doc="Converts a-z to A-Z.";
			const test=function(){
				const _k0=["hi"],_v0="HI";
				return _ms.map(_k0,_v0)
			};
			return _ms.set(function(s){
				_ms.checkContains(Str,s,"s");
				return s.toUpperCase()
			},"doc",doc,"test",test,"displayName","->upper")
		}();
		const Char=exports.Char=Pred_45Type(function(){
			const doc="Any String with only one character.";
			const predicate=function(_){
				return and(_ms.contains(Str,_),_ms.lazy(function(){
					return _61_63(_ms.unlazy(count)(_),1)
				}))
			};
			return {
				doc:doc,
				predicate:predicate,
				displayName:"Char"
			}
		}());
		const indent=exports.indent=function(){
			const doc="Adds a `\\t` to all `\\n` in `str`.\nDoes *not* do anything to the first line.";
			const test=function(){
				const s="a\nb";
				const s_45indented="a\n\tb";
				const _k0=[s],_v0=s_45indented;
				const _k1=["a"],_v1="a";
				return _ms.map(_k0,_v0,_k1,_v1)
			};
			return _ms.set(function(str){
				_ms.checkContains(Str,str,"str");
				return (""+_ms.show(str.replace(regexp("\n","g"),"\n\t")))
			},"doc",doc,"test",test,"displayName","indent")
		}();
		const split_45str=exports["split-str"]=function(){
			const doc="Like `@.split` but using a Str-Test instead of a predicate.";
			const test=function(){
				const _k0=[" ","I am a Str"],_v0=["I","am","a","Str"];
				const _k1=[regexp("."),"abc"],_v1=["","","",""];
				return _ms.map(_k0,_v0,_k1,_v1)
			};
			return _ms.set(function(splitter,_){
				_ms.checkContains(Str_45Test,splitter,"splitter");
				_ms.checkContains(Str,_,"_");
				return _ms.checkContains(_ms.sub(Array,Str),_.split(splitter),"res")
			},"doc",doc,"test",test,"displayName","split-str")
		}();
		impl_33(_61_63,Str,id_61_63);
		impl_33(compare,Str,function(a,b){
			return a.localeCompare(b)
		});
		exports.default=Str;
		const displayName=exports.displayName="Str";
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9TdHIubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2lDQVdBOzs7RUFBQSxvQkFDSztHQUFKLFVBQU07a0JBQ047O0VBRUQscUNBQVUsZUFDSTtHQUFiLFVBQU07R0FDTixtQkFBYyxDQUFFLElBQUk7VUFEUDs7Ozs7O0VBR2QsK0NBQ1E7R0FBUCxVQUFNO0dBQ04sV0FDTyxVQUFBO0lBQU4sVUFBQSxDQUFHLFVBQVU7OztrQkFDYixTQUFBLEVBQ0s7c0JBREg7V0FDRjs7O0VBRUYsd0JBQU0sc0JBQ1M7R0FBZCxVQUFNO0dBQ04sZ0JBQVksU0FBQSxFQUNDO1dBQVosaUJBQUssSUFBRDtZQUFPLHlCQUFHLEdBQU87SUFBQTtHQUFBO1VBRlI7Ozs7OztFQUlmLHNDQUNPO0dBQU4sVUFDQztHQUVELFdBQ08sVUFBQTtJQUFOLFFBQ0M7SUFHRCxtQkFDQztJQUdELFVBQUEsQ0FBRSxPQUFPO0lBQ1QsVUFBQSxDQUFHLFNBQVM7OztrQkFDWixTQUFBLElBQ087c0JBREg7V0FDSCxDQU1xQyxZQU5wQyxZQUFhLE9BQVEsS0FBSyxLQUFLO0dBQUE7O0VBRW5DLGlEQUNVO0dBQVQsVUFBTTtHQUNOLFdBQ08sVUFBQTtJQUFOLFVBQUEsQ0FBRyxJQUFJLGtCQUFpQixDQUFHLElBQUksS0FBSyxJQUFJO0lBQ3hDLFVBQUEsQ0FBRyxPQUFRLEtBQUssV0FBVSxDQUFZOzs7a0JBQ3RDLFNBQVksU0FBa0IsRUFDSztzQkFEZDtzQkFBVztxQ0FBL0IsTUFBTSxLQUNQLFFBQVE7OztFQUVWLFFBQU0sT0FBRyxJQUFJO0VBQ2IsUUFBTSxRQUFRLElBQUssU0FBQSxFQUFFLEVBQ0M7VUFBckIsZ0JBQWdCO0VBQUE7a0JBRWpCO0VBN0RBLHNDQUFBIiwiZmlsZSI6IlN0ci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9