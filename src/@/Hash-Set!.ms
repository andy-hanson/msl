use
	..@ -> each! iterator
	.@-Type -> from-stream
	..Bool -> true
	.Set
	.Set!
	..Comparable -> =?
	..Comparable! -> <!
	..control -> returning
	..maps.Map -> keys
	..maps.Map! -> assoc! un-assoc!
	..maps.Hash-Map!
	..methods -> +! -! empty empty!
	..types.Method -> impl! impl-for
	..types.Record-Type
	..types.util -> self-type

Hash-Set! = Record-Type
	doc. "TODO"
	members.
		data. Hash-Map!

<! Hash-Set! Set!
	iterator -> |_
		iterator (keys _.data

	+! -> |_ addeds
		each! addeds |added
			assoc! _.data added true

	-! -> |_ deleteds
		each! deleteds |deleted
			un-assoc! _.data deleted

	empty! -> |_
		empty! _.data

<! (self-type Hash-Set!) @-Type
	empty -> |
		Hash-Set!
			data. empty Hash-Map!

	\ TODO: Define it this way for all @!-Types
	from-stream -> |type stream
		returning (empty type) |_
			each! stream |em
				+! _ [ em ]

\ TODO: This should not be necessary!
impl! =? Hash-Set! (impl-for =? Set)

Hash-Set!