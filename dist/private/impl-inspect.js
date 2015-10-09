"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../at/Set/Id-Set","../js","../Object","../String","../to-string","../Type/Method","../Type/Type"],(exports,Id_45Set_0,js_1,Object_2,String_3,to_45string_4,Method_5,Type_6)=>{
	exports._get=_ms.lazy(()=>{
		const Id_45Set=_ms.getDefaultExport(Id_45Set_0),_$0=_ms.getModule(js_1),js_45typeof=_ms.get(_$0,"js-typeof"),_$1=_ms.getModule(Object_2),_64p=_ms.get(_$1,"@p"),_64p_45all=_ms.get(_$1,"@p-all"),_$2=_ms.getModule(String_3),indent=_ms.get(_$2,"indent"),_$3=_ms.getModule(to_45string_4),inspect=_ms.get(_$3,"inspect"),_$4=_ms.getModule(Method_5),impl_33=_ms.get(_$4,"impl!"),_$5=_ms.getModule(Type_6),_61_62=_ms.get(_$5,"=>");
		impl_33(inspect,Object,function(){
			const _this=this;
			return (()=>{
				switch(_this.toString){
					case Object.prototype.toString:{
						const props=_64p_45all(_this);
						const enumerable_45props=_61_62(Id_45Set,_64p(_this));
						let s=`${_this.constructor.name}`;
						for(let _ of props){
							s=`${s}\n\t${inspect_45property(_this,_,_ms.contains(enumerable_45props,_))}`
						};
						return s
					}
					default:return _this.toString()
				}
			})()
		});
		const inspect_45property=function inspect_45property(obj,key,enumerable_63){
			const desc=Object.getOwnPropertyDescriptor(obj,key);
			const prop_45name=(enumerable_63?key:`[${key}]`);
			const str=(()=>{
				if((desc.get&&desc.set)){
					return `[Getter/Setter]`
				} else if(desc.get){
					return `[Getter]`
				} else if(desc.set){
					return `[Setter]`
				} else {
					const str=inspect(desc.value);
					return (_ms.contains(str,`\n`)?`\n${indent(str)}`:str)
				}
			})();
			return `${prop_45name}. ${str}`
		};
		const inspect_45primitive=function inspect_45primitive(){
			const _this=this;
			return (()=>{
				switch(js_45typeof(_this)){
					case `object`:{
						return `[${_this.constructor.name} ${_this}]`
					}
					default:return `${_this}`
				}
			})()
		};
		impl_33(inspect,Boolean,inspect_45primitive);
		impl_33(inspect,Number,inspect_45primitive);
		impl_33(inspect,String,function(){
			const _this=this;
			return (()=>{
				switch(js_45typeof(_this)){
					case `object`:{
						return `[String ${inspect(_this.valueOf())}]`
					}
					default:return JSON.stringify(_this)
				}
			})()
		});
		const impl_45inspect=exports.default=impl_33(inspect,Symbol,function(){
			const _this=this;
			return (()=>{
				switch(js_45typeof(_this)){
					case `object`:{
						return `[Symbol ${inspect(_this.valueOf())}]`
					}
					default:return _this.toString()
				}
			})()
		});
		const name=exports.name=`impl-inspect`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvZ2l0L21hc29uL21zbC9zcmMvcHJpdmF0ZS9pbXBsLWluc3BlY3QubXMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7RUFVQSxRQUFNLFFBYUUsT0FaZSxVQUFBO1NBZ0RMO1VBaERWO1dBZ0RVO1VBcENWLDBCQVZtQjtNQUF4QixZQUFRLFdBOENPO01BN0NmLHlCQUFtQixPQUFHLFNBQVEsS0E2Q2Y7TUE1Q2YsTUFBTyxHQTRDUTtNQTNDVixRQUFBLEtBQUEsTUFDSztTQUFILEdBQUMsUUFBTyxtQkEwQ0EsTUExQ3NCLGVBQUcsbUJBQUQ7O2FBQ3ZDO0tBQUE7b0JBeUNlOzs7O0VBckNsQix5QkFBb0IsNEJBQUEsSUFBSSxJQUFJLGNBQ1c7R0FBdEMsV0FBTyxnQ0FBZ0MsSUFBSTtHQUUzQyxrQkFBaUIsQ0FBQSxjQUFZLElBQUssSUFBRTtHQUVwQyxVQUNVO0lBQVQsR0FBQSxDQUFJLFVBQVMsVUFDUTtZQUFuQjtXQUNGLEdBQUEsU0FDUTtZQUFOO1dBQ0YsR0FBQSxTQUNRO1lBQU47V0FFRTtLQUFILFVBQU0sUUFBUTtZQUNULGNBQUssSUFBSixNQUFTLEtBQUcsT0FBTyxPQUFNO0lBQUE7R0FBQTtVQUVoQyxHQUFDLGdCQUFhOztFQUdoQiwwQkFDc0IsOEJBQUE7U0FpQko7VUFqQlY7V0FBQSxZQWlCVTtVQWhCZixTQUNPO2FBQU4sSUFlYzs7b0JBYmQsR0FhYzs7OztFQVhsQixRQUFNLFFBQVEsUUFBUTtFQUN0QixRQUFNLFFBQVEsT0FBTztFQUVyQixRQUFNLFFBQVEsT0FDUyxVQUFBO1NBT0w7VUFQVjtXQUFBLFlBT1U7VUFOZixTQUNPO2FBQU4sV0FBUyxRQUtLOztvQkFIZixlQUdlO0lBQUE7R0FBQTtFQUFBO0VBRGxCLHFDQUFBLFFBQU0sUUFBUSxPQUNTLFVBQUE7U0FBTDtVQUFWO1dBQUEsWUFBVTtVQUNmLFNBQ087YUFBTixXQUFTLFFBRks7O29CQUFBOzs7O0VBM0RsQix3QkFBQSIsImZpbGUiOiJwcml2YXRlL2ltcGwtaW5zcGVjdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYyJ9
