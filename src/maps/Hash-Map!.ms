\ TODO: TEST

use
	..assert -> ! !not
	..bags.? -> Opt->?
	..bags.Bag -> flat-map map
	..bags.Seq -> seq=?
	..bags.Stream -> streaming
	..Bool -> false true
	..Comparable -> =?
	..Comparable! -> <!
	..hash-code
	.Identity-Map!
	..Object
	..Object! -> change-property!
	.Map -> ?get has-key? keys values
	.Map! -> delete! set!
	..methods -> empty empty! freeze
	..pred-types -> Any
	..Ref -> get ref
	..types.Method -> impl!
	..types.Record-Type
	..types.util -> self-type

Bucket-Entry = Record-Type
	doc. "
		TODO
		Explain how this is both Bucket and Bucket-Entry
	members.
		key.
		val!.
		next!.

Hash-Map! = Record-Type
	doc. "TODO"
	test. |
		_ =
			1 -> 2
			3 -> 4
		! =? _[1] 2
		! =? _[3] 4
		! seq=? keys_ [ 1 3 ]
		! =? (?get _ 8) (empty ?)

	members.
		hash->bucket. Identity-Map!

<! Hash-Map! Map!

opt-bucket = |_ key
	_.hash->bucket.get (hash-code key

opt-bucket-entry = |opt-bucket key
	case opt-bucket
		:Any
			case
				=? _.key key
					_
				else
					opt-bucket-entry _.next! key
		else
			()

impl! ?get Hash-Map! |:? _ key
	bucket = opt-bucket _ key
	entry = opt-bucket-entry bucket key
	map (Opt->? entry) |be
		be.val!

impl! keys Hash-Map! |_
	buckets = values _.hash->bucket
	flat-map buckets |bucket
		streaming ~|
			cur-bucket = ref bucket
			loop!
				case! get cur-bucket
					:Any
						<~ _.key
						set! cur-bucket _.next!
					else
						end-loop!

\ TODO: impl! values, similarly

impl! set! Hash-Map! |hm key val
	out
		! =? hm[key] val

	bucket = opt-bucket hm key
	case! opt-bucket-entry bucket
		:Any
			change-property! _ "val!" val
		else
			k = key
			be = Bucket-Entry
				\ TODO:SYNTAX
				key. k
				val!. val
				next!. bucket
			hm.hash->bucket.set (hash-code key) be

impl! delete! Hash-Map! |:Bool hm key
	out
		!not has-key? hm key

	bucket = opt-bucket hm key
	case bucket
		=? _.key key
			case! bucket.next!
				:Any
					set! hm.hash->bucket key _
				else
					delete! hm.hash->bucket (hash-code key
			true

		:Any
			delete-from-next-bucket! = |prev-bucket
				next = prev-bucket.next!
				case next
					:Any
						case
							=? next.key key
								change-property! prev-bucket "next!" next.next!
								true
							else
								delete-from-next-bucket! next
					else
						false

			delete-from-next-bucket! bucket

		else
			false

impl! freeze Hash-Map! |_
	freeze _.hash->bucket
	Object.freeze _

impl! empty! Hash-Map! |_
	empty! _.hash->bucket

impl! empty (self-type Hash-Map!) |
	Hash-Map!
		hash->bucket. empty Identity-Map!

Hash-Map!