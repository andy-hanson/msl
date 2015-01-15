use
	..@ -> count each! iterator
	.@-Type -> from-stream
	..Comparable! -> <!
	..control -> returning
	..js -> global new
	..methods -> +! -! contains? empty empty!
	.Set!
	..types.util -> self-type

Identity-Set! = global.Set

<! Identity-Set! Set!
	count -> |_
		_.size
	+! -> |_ addeds
		each! addeds |added
			_.add added
	empty! -> |_
		_.clear ()
	-! -> |_  deleteds
		each! deleteds |deleted
			_.delete deleted
	iterator -> |_
		\ TODO:ES6 Should be done by default
		_.keys ()
	contains? -> |_ val
		_.has val

<! (self-type Identity-Set!) @-Type
	empty -> new
	\ TODO: Define it this way for all @!s
	from-stream -> |type stream
		returning (empty type) |_
			each! stream |em
				_.add em

Identity-Set!