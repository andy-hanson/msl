"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./at/Seq/Seq","./math/methods"],(exports,Seq_0,methods_1)=>{
	exports._get=_ms.lazy(()=>{
		const _$0=_ms.getModule(Seq_0),_64indexes=_ms.get(_$0,"@indexes"),_$1=_ms.getModule(methods_1),_43=_ms.get(_$1,"+");
		const rgx=exports.rgx=function rgx(strings){
			const values=[].slice.call(arguments,1);
			const raw=strings.raw;
			let s=_ms.sub(raw,0);
			for(let i of _64indexes(values)){
				s=`${s}${_ms.sub(values,i)}${_ms.sub(raw,_43(1,i))}`
			};
			return new (RegExp)(s)
		};
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvUmVnRXhwLm1zIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0VBSUEsc0JBQU0sYUFBQTs7R0FDTCxVQUFNO0dBQ04sY0FBTSxJQUFJO0dBQ0wsUUFBQSxLQUFLLFdBQVMsUUFDTTtNQUFsQixHQUFDLFlBQUcsT0FBTyxhQUFJLElBQUssSUFBRSxFQUFFOztVQUMvQixLQUFJLFFBQU87RUFBQSIsImZpbGUiOiJSZWdFeHAuanMiLCJzb3VyY2VSb290IjoiLi9zcmMifQ==