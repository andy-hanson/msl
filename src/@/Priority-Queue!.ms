use
	.@!
	.?
	..Comparable -> =?
	..Comparable! -> <!
	..methods -> +! empty empty?
	..types.Interface
	..types.Method
use~
	..!

Priority-Queue! = Interface
	doc. "TODO"
	implementor-test. |type
		_ = empty type
		+! _ [ 3 1 2 ]
		! =? (? 1) ?pop!_
		! =? (? 2) ?pop!_
		! =? (? 3) ?pop!_
		! empty? _

<! Priority-Queue! @!

\ TODO: Move?
?pop!. Method
	doc. "TODO"

Priority-Queue!