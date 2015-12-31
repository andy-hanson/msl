"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","./../js","./../private/bootstrap","./Type"],(exports,js_0,bootstrap_1,Type_2)=>{
	exports._get=_ms.lazy(()=>{
		let _$0=_ms.getModule(js_0),js_45sub=_ms.get(_$0,"js-sub"),_$1=_ms.getModule(bootstrap_1),msDef=_ms.get(_$1,"msDef"),_$2=_ms.getModule(Type_2),extract=_ms.get(_$2,"extract");
		let Record=exports.default=_ms.trait("Record",[],{
			[_ms.symbol(extract)](_){
				let _this=this;
				return (_ms.hasInstance(_this,_)?field_45values(_this,_):null)
			}
		},{
			toString(){
				let _this=this;
				return `(${_this.constructor.name} ${field_45values(_this.constructor,_this).join(` `)})`
			}
		});
		let field_45values=function field_45values(cls,instance){
			return cls["field-names"].map(_=>js_45sub(instance,_))
		};
		msDef("beRecord",(_,field_45names)=>{
			_ms.newProperty(_,"field-names",field_45names);
			_ms.traitWithDefs(_,Record,{},{})
		});
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvVHlwZS9SZWNvcmQubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFLQTtlQUtFLFVBQVUsRUFDQTtRQUcwQztXQUg5QyxpQkFHOEMsTUFIN0MsR0FBTyxlQUdzQyxNQUhuQixHQUFFO0dBQUE7RUFBQTthQUd6QjtRQUEwQztXQUFuRCxJQUFtRCwwQkFBMUIsZUFBMEIsOEJBQVk7OztFQUVsRSxtQkFBZ0Isd0JBQUEsSUFBSSxTQUNRO1VBQTNCLDBCQUFzQixTQUFPLFNBQVU7RUFBQTtFQUV4QyxNQUFPLFdBQVksQ0FBQSxFQUFDLGdCQUNXO21CQUE3QixnQkFBZTtxQkFDUixFQUFDIiwiZmlsZSI6IlR5cGUvUmVjb3JkLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjIn0=