use
	.$ -> $after
	.console -> log!
	.Fun -> Act
	.js -> global new
	.js-impl -> i-time*
	.math.Num -> Nat
	.methods -> -
	.Str

$time!.
	doc. "TODO"
	|:$ name:Str $time-me:$
		$after ($time $time-me) |time:Num
			log! "{name}: {time}"
			$time-me

time!.
	doc. "TODO"
	|name:Str time-me:Act
		val time-taken = time time-me
		log! "{name}: {time-taken}"
		val

$time.
	doc. "
		TODO:REST
		Returned value in ms.
	|:$[Num] $time-me:$
		start = current-time-ms ()
		$after $time-me |
			end = current-time-ms ()
			- end start

time.
	doc. "
		TODO:REST
		Returned value in ms.
	|time-me:Fun
		start = current-time-ms ()
		val. time-me ()
		end = current-time-ms ()
		time-taken. - end start

current-time-ms.
	doc. "TODO"
	|
		(new global.Date).getTime ()

time*!.
	doc. "TODO"
	|name:Str times:Nat time-me:Act
		time! name |
			i-time* times time-me