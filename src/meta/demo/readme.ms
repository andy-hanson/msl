use-debug
	...! _ !not
	...@ _ count map
	...@.@-Type empty
	...@.Array!
	...@.Seq seq=?
	...@.Stream
	...Bool and
	...compare =? <? <=?
	...control Ref! get set!
	...Fun _ noop
	...Generator! _ each~ gen-next!
	...math.Num _ divisible? Int
	...math.methods + - * /
	...Str
	...Try fails?

doc. "Making sure the code in README.md actually works."

test. |
	my-obj.
		one. 1
		two. 2
	! =? my-obj.one 1
	! =? my-obj.two 2

	this-is-true.
	! =? this-is-true true

	my-list.
		. 1
		. 2
	! =? my-list [ 1 2 ]

	my-map.
		1 -> 2
		2 -> 4
	! =? my-map[1] 2
	! =? my-map[2] 4

	my-list-2.
		. 1
		two = + 1 1
		. two
	! =? my-list my-list-2
	my-obj-2.
		displayName. "my-obj" # TODO:DISPLAYNAME
		one. 1
		two. + 1 1
	! =? my-obj my-obj-2

	one two = my-obj-2
	! =? one 1
	! =? two 2

	two-2 =
		one = 1
		+ one one
	! =? two-2 2

	identity = |a
		a
	! =? (identity 1) 1
	two-of = |a
		. a
		. a
	! =? (two-of 1) [ 1 1 ]
	pair = |a b
		first. a
		second. b
	! =? (pair 1 2)
		first. 1
		second. 2

	! =? (identity (pair (two-of 1) (two-of 2)))
		first. [ 1 1 ]
		second. [ 2 2 ]
	(identity (pair (two-of 1) (two-of 2 # Can leave off parens

	! seq=? [ 2 4 6 ] (map [1 2 3] |x
		* x 2

	half. |a
		in
			! divisible? a 2
		out
			! =? (* res 2) a

		/ a 2

	debug ! fails? |
		half 1
	! =? (half 2) 1

	one-1:Int. 1
	Str->Num. |:Num str:Str
		Num.parseFloat str
	! =? (Str->Num "3") 3

	ints:@[Int] =
		. 1
		. 2
	noop ints

	twice = |x
		* 2 x

	two-and-a-half-of. |_:Num
		+ twice_ half_
	! =? (two-and-a-half-of 2) 5

	is-str?. |_
		:Str
	! is-str? ""

	rate-guess. |case
		=? _ 7
			"You got it!"
		:Num
			"Off by {- _ 7}"
		else
			"Try using a number..."

	! =? (rate-guess 7) "You got it!"
	! =? (rate-guess 9) "Off by 2"
	! =? (rate-guess "seven") "Try using a number..."

	! =? "One plus one is {+ 1 1}." "One plus one is 2."

	x = "
		We hold these truths to be self-evident,
		that one plus one is {+ 1 1}.

	! =? x "
		We hold these truths to be self-evident,
		that one plus one is 2.

	! =? (count "\t\n\{\\") 4

	region Loop
		arr = empty Array!
		log! = |_
			arr.push _

		i = Ref! 10
		loop!
			case! get i
				<? 0 _
					log! _
					set! i (- _ 1)
				else
					end-loop!
					log! "This line is never run"
		! =? arr [ 10 9 8 7 6 5 4 3 2 1 ]


	incrementing. |gen-maker:Fun[Generator!]
		gen:Generator! = gen-maker ()
		last-value = Ref! 0
		loop!
			value done = gen-next! gen (+ (get last-value) 1
			set! last-value value
			case! done
				_
					end-loop!
				else
					()
		get last-value

	y = incrementing ~|:Int
		two <~ 1
		three <~ two
		three
	! =? y 3

	one-two-one-two. ~|
		<~~ one-two ()
		<~~ one-two ()

	one-two. ~|
		<~ 1
		<~ 2

	! seq=? (Stream one-two-one-two) [ 1 2 1 2 ]

	double. |x
		* x 2
	triple. |x
		* x 3
	doubled-then-tripled. |_:@
		Stream ~|
			<~~ each~ _ ~|x
				<~ double x
			<~~ each~ _ ~|x
				<~ triple x

	! seq=? (doubled-then-tripled [ 1 2 3 ]) [ 2 4 6 3 6 9 ]
	dt2. |_
		+ (map _ double) (map _ triple)
	! seq=? (dt2 [ 1 2 3 ]) [ 2 4 6 3 6 9 ]

	log = empty Array!
	logging. |gen-maker:Fun[Generator!]
		gen = gen-maker ()
		last-value = Ref! ()
		loop!
			value done = gen-next! gen
			case! done
				_
					set! last-value value
					end-loop!
				else
					log.push value
		get last-value

	increment-thrice. |x
		logging ~|
			incr1 <~~ increment~ x
			incr2 <~~ increment~ incr1
			<~~ increment~ incr2
	increment~. ~|x
		<~ "Incrementing {x}"
		+ x 1
	! =? (increment-thrice 0) 3
	! =? log [ "Incrementing 0" "Incrementing 1" "Incrementing 2" ]

	in-range?. |n min max
		and (<=? min n) ~(<=? n max)
	! in-range? 1 0 2
	!not in-range? 3 0 2