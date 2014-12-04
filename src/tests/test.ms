doc. "TODO"

use
	..assert -> ! !call
	..bags.? -> get-or
	..bags.Array
	..bags.Bag -> each!
	..Bool -> false or true
	..Comparable -> =?
	..Dict
	..Fun -> apply ignore
	..maps.Identity-Map!
	..maps.Map -> keys
	..maps.Map! -> set!
	..modules -> promise-all-modules
	..Object -> ?get-property own-properties own-enumerable-properties
	..pred-types -> Any
	..Ref -> get ref
	..Str
	..Try -> annotate-errors Success try
	..types.Impl-Type
	..types.Interface -> concrete-implementors
	..types.Method -> impl!
	..types.Type -> subsumes?
	..types.util -> self-type

\ TODO: move
\ TODO: implement
detect-infinite-loop. |fun
	fun ()

\ TODO
test. |
	tested-x = ref false
	tested-y = ref false
	tested-b = ref false
	dict =
		a.
			test.
				x. |
					set! tested-x true
				y. |
					set! tested-y true
		b. `{}` \ TODO: empty Dict
		impl! test-special (self-type b) |
			set! tested-b true
		c. () \ not testable
	maybe-test "dict" dict true
	! (get tested-x)
	! (get tested-y)
	! (get tested-b)

\ TODO: Better name (but not `test`, because that's a common module property)
test-special. Method
	doc. "TODO"
	default. ignore

\ TODO: MOVE THESE
impl! test-special Impl-Type |type
	each! (?get-property type "prototype") |prototype
		each! (own-properties prototype) |name
			\ Some prototype properties throw errors. For example, global.Map.size.
			\ TODO: Inline fun
			x = try |
				?get-property prototype name
			case x
				:Success
					each! _.val |val
						maybe-test "{type}#{name}" val false
				else
					()

impl! test-special Interface |_
	each! (?get-property _ "implementor-test") |test:Fun
		each! concrete-implementors_ |implementor
			test-test-fun implementor test "{_}.implementor-test of {implementor}" implementor

\ TODO: empty Grow-Set!
all-tested. `new global.Set()`

\ TODO: Better name
maybe-test. |name:Str value:Any is-module:Bool
	case!
		all-tested.has value
			()
		else
			all-tested.add value
			test-special value
			case! value
				\ TODO: variadic `or`
				or is-module ~(or :Dict ~:Fun)
					each! own-enumerable-properties_ |prop-name
						next-name = "{name}.{prop-name}"
						each! (?get-property _ prop-name) |prop-val
							case! prop-name
								=? _ "test"
									test-test-prop value prop-val next-name
								else
									maybe-test next-name prop-val false
				else
					()

test-test-prop = |value value-test name \...test-args
	case! value-test
		:Fun
			test-test-fun value value-test name
		else
			()
	case! value-test
		:Dict
			each! keys_ |sub-name
				test-test-prop value _[sub-name] "{name}.{sub-name}"
		else
			()

test-test-fun = |value value-test:Fun name \TODO:ES6 ...args
	args = (Array.prototype.slice.call `arguments` 3)
	annotate-errors "In {name}:\n" |
		\ TODO:ES6 value-test ...args
		got = detect-infinite-loop |
			apply value-test args
		case! got
			:Map
				! (subsumes? Fun value)
					"Test of {name} returned a Map, but the value is not callable."
				!call value _
			else
				()

test-all. |dir-path:Str
	p = (promise-all-modules dir-path).then |_
		each! _ test-module
	p.done ()

\ TODO:ES6 Use module reflection
test-module.
	doc. "TODO"
	|module
		module-name = get-or (?get-property module "displayName") "<anonymous module>"
		maybe-test module-name module true