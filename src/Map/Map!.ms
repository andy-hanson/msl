use
	..@ _ each!
	..@.?
	..methods +! -! <! empty empty?
	..Type.Impl-Type self-type
	..Type.Kind
	..Type.Method _ impl!
	..Type.Pred-Type Any
	..Map _ each-pair! ?get
use~
	.Hash-Map!
debug use~
	..! _ !not
	..@ map
	..@.Array
	..@.Set set=?
	..Bool not
	..control if!
	..methods => =? * compare empty!
	..Map has-key? keys
	..Type.Wrap-Type
	.Weak-Identity-Map!

Map! = Kind
	doc. "
		TODO:REST
		-!: Takes a @ of keys to remove.
		+!: Adds another map.
	implementor-test. |type
		Mt = Wrap-Type
			doc. "Mappable Thing; might be a Weak-Identity-Map!, so must be a reference type."
		\ Might be a Sorted-Map, so must be comparable.
		impl! compare Mt |a b
			compare a.val b.val
		\ => Array because these must maintain by their identity for Weak-Identity-Map!
		ks = => Array (map [ 1 3 5 4 2 ] Mt
		noweak = |do
			if! (not :Weak-Identity-Map!) do
		_ = empty type
		noweak |
			! empty? _
		do-adds = |
			each! ks |n
				add! _ n (* 2 n.val)
		do-adds()
		each! ks |n
			! =? _[n] (* 2 n.val)
		?get _ (Mt 0
		! empty? (?get _ (Mt 0
		noweak |
			! set=? keys_ (map [ 1 2 3 4 5 ] Mt
			empty! _
			! empty? _
			do-adds()
			-! _ ks
			! empty? _

\ TODO: <! (self-type Map!) Map-Type
impl! empty (self-type Map!) |
	empty Hash-Map!

assoc!. Method
	doc. |_ key:Any val:Any
		"Set _[key] to val."

un-assoc!. Method
	doc. |:? _ key
		"If there is a value associated with `key`, removes it and returns the value associated."

impl! -! Map!
	doc. "Removes keys (and by proxy, their associated values)."
	|_ @to-delete:@
		each! @to-delete un-assoc![_]

add!. Method
	doc. |_ key:Any val:Any
		"assoc! key val, but fail if _[key] is set already."
	default. |_ key:Any val:Any
		in
			!not (has-key? _ key) ~"
				Already have key {key}.
		assoc! _ key val

get-or-add!. Method
	doc. "map[key], and if it's not already there, fill it in with default-val."
	default. |map key:Any ~default-val
		case ?get map key
			empty?_
				assoc! map key default-val
				default-val
			else
				_.val

impl! +! Map!
	doc. "Adds the other map's keys to mine, overriding my values."
	test. "See Map!.implementor-test."
	|_ to-add:Map
		each-pair! to-add assoc![_]

<! Map! Map

Map!