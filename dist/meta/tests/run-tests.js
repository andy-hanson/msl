"use strict";
if((typeof define!=="function"))var define=require("amdefine")(module);
define(["exports","../../assert","../../at/at","../../at/at-Type","../../at/q","../../at/Map/Map","../../at/Set/Id-Set","../../cash","../../compare","../../Function","../../Generator","../../js","../../Object","../../Try","../../Type/Impl-Type","../../Type/Kind","../../Type/Method","../../Type/Pred-Type","../../Type/Type","../../control","../../Object","../../Type/Method"],(exports,assert_0,_64_1,_64_45Type_2,_63_3,Map_4,Id_45Set_5,$_6,compare_7,Function_8,Generator_9,js_10,Object_11,Try_12,Impl_45Type_13,Kind_14,Method_15,Pred_45Type_16,Type_17,control_18,Object_19,Method_20)=>{
	exports._get=_ms.lazy(()=>{
		const _$2=_ms.getModule(assert_0),assert_45call_33=_ms.get(_$2,"assert-call!"),_64=_ms.getDefaultExport(_64_1),_$4=_ms.getModule(_64_45Type_2),empty=_ms.get(_$4,"empty"),_$5=_ms.getModule(_63_3),_63_45or=_ms.get(_$5,"?-or"),Map=_ms.getDefaultExport(Map_4),Id_45Set=_ms.getDefaultExport(Id_45Set_5),$=_ms.getDefaultExport($_6),_$8=_ms.getModule($_6),$all=_ms.get(_$8,"$all"),$ing=_ms.get(_$8,"$ing"),_$9=_ms.getModule(compare_7),_61_63=_ms.get(_$9,"=?"),_$10=_ms.getModule(Function_8),noop=_ms.get(_$10,"noop"),Generator=_ms.getDefaultExport(Generator_9),_$12=_ms.getModule(js_10),defined_63=_ms.get(_$12,"defined?"),_$13=_ms.getModule(Object_11),_63p=_ms.get(_$13,"?p"),p=_ms.get(_$13,"p"),p_63=_ms.get(_$13,"p?"),_64p=_ms.get(_$13,"@p"),_64p_45all=_ms.get(_$13,"@p-all"),_$14=_ms.getModule(Try_12),$annotate_45errors=_ms.get(_$14,"$annotate-errors"),annotate_45errors=_ms.get(_$14,"annotate-errors"),_63try=_ms.get(_$14,"?try"),Impl_45Type=_ms.getDefaultExport(Impl_45Type_13),Kind=_ms.getDefaultExport(Kind_14),_$16=_ms.getModule(Kind_14),concrete_45implementors=_ms.get(_$16,"concrete-implementors"),Method=_ms.getDefaultExport(Method_15),_$17=_ms.getModule(Method_15),impl_33=_ms.get(_$17,"impl!"),impl_45for=_ms.get(_$17,"impl-for"),_$18=_ms.getModule(Pred_45Type_16),ObjLit=_ms.get(_$18,"ObjLit"),_$19=_ms.getModule(Type_17),contains_63=_ms.get(_$19,"contains?"),_$21=_ms.lazyGetModule(control_18),build=_ms.lazyProp(_$21,"build"),_$22=_ms.lazyGetModule(Object_19),empty_45Object_33=_ms.lazyProp(_$22,"empty-Object!"),_$23=_ms.lazyGetModule(Method_20),self_45impl_33=_ms.lazyProp(_$23,"self-impl!");
		const doc=exports.doc=`For running code in \`test\` properties.`;
		const test=exports.test=function test(){
			_ms.assert(_61_63,[`x`,`y`,`b`],_ms.unlazy(build)(_yield=>{
				const obj=()=>{
					const built={};
					const a=built.a=()=>{
						const built={};
						const test=built.test=()=>{
							const built={};
							const x=built.x=function x(){
								_yield(`x`)
							};
							const y=built.y=function y(){
								_yield(`y`)
							};
							return _ms.setName(built,"test")
						}();
						return _ms.setName(built,"a")
					}();
					const b=built.b=_ms.unlazy(empty_45Object_33)();
					_ms.unlazy(self_45impl_33)(test_45special,b,()=>{
						_yield(`b`)
					});
					const c=built.c=null;
					return _ms.setName(built,"obj")
				}();
				return _64$maybe_45test(`obj`,obj,true)
			}))
		};
		const test_45special=exports["test-special"]=Method(()=>{
			const built={};
			const doc=built.doc=`Something special to do with this value when the test runner reacher it.\nMay return a $.`;
			const args=built.args=1;
			const allow_45null_63=built["allow-null?"]=true;
			const _default=built.default=noop;
			return _ms.setName(built,"test-special")
		}());
		impl_33(test_45special,Impl_45Type,type=>{
			return $all(()=>{
				const built=[];
				for(let prototype of _63p(type,`prototype`)){
					for(let name of _64p_45all(prototype)){
						const _63prop_45val=_63try(()=>{
							return p(prototype,name)
						});
						for(let prop_45val of _63prop_45val){
							_ms.addMany(built,_64$maybe_45test(_ms.lazy(()=>{
								return `${_ms.show(type)}#${_ms.show(name)}`
							}),prop_45val,false))
						}
					}
				};
				return built
			}())
		});
		impl_33(test_45special,Kind,_=>{
			return ()=>{
				const built=[];
				for(;;){
					_ms.addMany(built,_64$_45from_45any(impl_45for(test_45special,Impl_45Type)(_)));
					for(let test of _63p(_,`implementor-test`)){
						for(let implementor of concrete_45implementors(_)){
							_ms.addMany(built,_64$test_45test_45fun(implementor,test,_ms.lazy(()=>{
								return `${_ms.show(_)}.implementor-test of ${_ms.show(implementor)}`
							}),implementor))
						}
					};
					break
				};
				return built
			}()
		});
		const $test_45all=exports["$test-all"]=()=>{
			const built={};
			const doc=built.doc=`Tests all modules.`;
			return _ms.set(function $test_45all(_64all_45modules){
				_ms.checkContains(_ms.sub(_64,Object),_64all_45modules,"@all-modules");
				return $all(()=>{
					const built=[];
					for(let _ of _64all_45modules){
						_ms.addMany(built,_64$test_45module(_))
					};
					return built
				}())
			},built)
		}();
		const $test_45module=exports["$test-module"]=()=>{
			const built={};
			const doc=built.doc=`Treats an Object as a module and tests it.`;
			return _ms.set(function $test_45module(_module){
				_ms.checkContains(Object,_module,"module");
				return $all(_64$test_45module(_module))
			},built)
		}();
		const _64$test_45module=function _64$test_45module(_module){
			_ms.checkContains(Object,_module,"module");
			const module_45name=_63_45or(_63p(_module,`name`),`<anonymous module>`);
			return _64$maybe_45test(module_45name,_module,true)
		};
		const all_45tested=empty(Id_45Set);
		const _64$maybe_45test=function _64$maybe_45test(name,value,is_45module){
			return ()=>{
				if(_ms.bool(all_45tested.has(value))){
					return []
				} else {
					all_45tested.add(value);
					return _64$test_45single(_ms.lazy(()=>{
						return _ms.unlazy(name)
					}),value,is_45module)
				}
			}()
		};
		const $test_45fun=exports["$test-fun"]=()=>{
			const built={};
			const doc=built.doc=`TODO`;
			const test=built.test=function test(){};
			return _ms.set(function $test_45fun(_){
				_ms.checkContains(Function,_,"_");
				return $all(_64$test_45single(`${_ms.show(_)}`,_,false))
			},built)
		}();
		const _64$test_45single=function _64$test_45single(name,value,is_45module){
			return ()=>{
				const built=[];
				for(;;){
					_ms.addMany(built,_64$_45from_45any(test_45special(value)));
					{
						const _=value;
						if(_ms.bool(((is_45module||_ms.contains(ObjLit,_))||_ms.contains(Function,_)))){
							for(let prop_45name of _64p(_)){
								const next_45name=_ms.lazy(()=>{
									return `${_ms.show(_ms.unlazy(name))}.${_ms.show(prop_45name)}`
								});
								const prop_45val=p(_,prop_45name);
								{
									const _=prop_45name;
									if(_ms.bool(_61_63(_,`test`))){
										_ms.addMany(built,_64$test_45test_45prop(value,prop_45val,_ms.lazy(()=>{
											return _ms.unlazy(next_45name)
										})))
									} else if(_ms.bool(_61_63(_,`$test`))){
										_ms.addMany(built,_64$test_45$test_45prop(prop_45val,_ms.lazy(()=>{
											return _ms.unlazy(next_45name)
										})))
									} else {
										_ms.addMany(built,_64$maybe_45test(_ms.lazy(()=>{
											return _ms.unlazy(next_45name)
										}),prop_45val,false))
									}
								}
							}
						} else if(_ms.bool((_ms.contains(Object,_)&&p_63(_,`test`)))){
							_ms.addMany(built,_64$test_45test_45prop(_,_.test,_ms.lazy(()=>{
								return `${_ms.show(_ms.unlazy(name))}.test`
							})))
						} else {}
					};
					break
				};
				return built
			}()
		};
		const _64$test_45test_45prop=function _64$test_45test_45prop(value,value_45test,name){
			return ()=>{
				const built=[];
				for(;;){
					const _=value_45test;
					if(_ms.contains(Function,_)){
						_ms.addMany(built,_64$test_45test_45fun(value,value_45test,_ms.lazy(()=>{
							return _ms.unlazy(name)
						})))
					};
					if(_ms.contains(ObjLit,_)){
						for(let sub_45name of _64p(_)){
							_ms.addMany(built,_64$test_45test_45prop(value,p(_,sub_45name),_ms.lazy(()=>{
								return `${_ms.show(_ms.unlazy(name))}.${_ms.show(sub_45name)}`
							})))
						}
					};
					break
				};
				return built
			}()
		};
		const _64$test_45$test_45prop=function _64$test_45$test_45prop(value_45$test,name){
			_ms.checkContains(_ms.sub(Function,Generator),value_45$test,"value-$test");
			const built=[];
			_ms.add(built,$annotate_45errors(_ms.lazy(()=>{
				return `${_ms.show(_ms.unlazy(name))}: `
			}),$ing(value_45$test)));
			return built
		};
		const _64$test_45test_45fun=function _64$test_45test_45fun(value,value_45test,name){
			const args=[].slice.call(arguments,3);
			_ms.checkContains(Function,value_45test,"value-test");
			const ano=_ms.lazy(()=>{
				return `${_ms.show(_ms.unlazy(name))}: `
			});
			const _=annotate_45errors(_ms.lazy(()=>{
				return _ms.unlazy(ano)
			}),()=>{
				return Function.apply.call(value_45test,null,[].concat(_ms.arr(args)))
			});
			return ()=>{
				if(_ms.bool(_ms.contains(Map,_))){
					if(! _ms.bool(contains_63(Function,value)))throw _ms.error(()=>{
						return `Test of ${_ms.show(_ms.unlazy(name))} returned a Map, but the value is not callable.`
					}());
					annotate_45errors(_ms.lazy(()=>{
						return _ms.unlazy(ano)
					}),()=>{
						return assert_45call_33(value,_)
					});
					return []
				} else if(_ms.bool(_ms.contains($,_))){
					return [$annotate_45errors(_ms.lazy(()=>{
						return _ms.unlazy(ano)
					}),_)]
				} else if(_ms.bool(defined_63(_))){
					return annotate_45errors(_ms.lazy(()=>{
						return _ms.unlazy(ano)
					}),()=>{
						throw _ms.error(`Test must return Map or $.`)
					})
				} else {
					return []
				}
			}()
		};
		const _64$_45from_45any=function _64$_45from_45any(test_45result){
			return ()=>{
				const _=test_45result;
				if(_ms.bool(_ms.contains(_64,_))){
					for(let elem of _){
						if(! _ms.bool(contains_63($,elem)))throw _ms.error(`Result of test should be $, @[$], or undefined.\nGot @ containing: ${_ms.show(elem)}`)
					};
					return _
				} else if(_ms.bool(_ms.contains($,_))){
					return [_]
				} else if(_ms.bool(defined_63(_))){
					throw _ms.error(`Result of test should be $, @[$], or undefined. Got: ${_ms.show(_)}`)
				} else {
					return []
				}
			}()
		};
		const name=exports.name=`run-tests`;
		return exports
	})
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHkvcHJvZ3JhbW1pbmcvbWFzb24zL21hc29uL3NyYy9tZXRhL3Rlc3RzL3J1bi10ZXN0cy5tcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztFQXdCQSxzQkFBTTtFQUdOLHdCQUNRLGVBQUE7Y0FBQyxPQUFHLENBQUcsSUFBSSxJQUFJLHVCQUFhLFFBQ0s7SUFBdkMsY0FDSzs7S0FBSixvQkFDRTs7TUFBRCwwQkFDSzs7T0FBSixnQkFDSyxZQUFBO1FBQUosT0FBTzs7T0FDUixnQkFDSyxZQUFBO1FBQUosT0FBTzs7Ozs7O0tBQ1Y7Z0NBQ1csZUFBYSxFQUNJLElBQUE7TUFBM0IsT0FBTzs7S0FDUixnQkFBRzs7O1dBQ0osaUJBQWMsTUFBSyxJQUFJO0dBQUE7RUFBQTtFQUd6Qiw2Q0FBYyxXQUNNOztHQUFuQixvQkFDQztHQUVELHNCQUFNO0dBQ04sMkNBQWE7R0FDYiw2QkFBUzs7O0VBR1YsUUFBTSxlQUFhLFlBQVcsTUFDSTtVQUFqQzs7WUFBVSxhQUFhLEtBQUcsS0FBTSxhQUNVO0tBQXBDLFFBQUEsUUFBUSxXQUFPLFdBQ1M7TUFDNUIsb0JBQVksT0FDTSxJQUFBO2NBQWpCLEVBQUUsVUFBVTtNQUFBO01BQ1IsUUFBQSxjQUFZLGNBQ1M7eUJBQXJCO2VBQWUsWUFBQyxrQkFBTztVQUFPLFdBQVM7TUFBQTtLQUFBO0lBQUE7Ozs7RUFHL0MsUUFBTSxlQUFhLEtBQU0sR0FDQzs7O1dBRXJCO3VCQUFDLGtCQUFjLFdBQVMsZUFBYSxhQUFXO0tBQzlDLFFBQUEsUUFBUSxLQUFHLEVBQUcsb0JBQ2lCO01BQTlCLFFBQUEsZUFBZSx3QkFBcUIsR0FDQzt5QkFBckMsc0JBQWdCLFlBQVk7ZUFBTyxZQUFDLG1DQUF3QjtVQUFjO01BQUE7S0FBQTtLQUNoRjtJQUFBOzs7O0VBRUYsMkNBQ1U7O0dBQVQsb0JBQU07a0JBQ0wscUJBQUEsaUJBQ3NCOzhCQURULElBQUU7V0FDZjs7YUFBVSxLQUFBLGlCQUNZO3dCQUFqQixrQkFBYTtLQUFB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