if (typeof define !== 'function') var define = require('amdefine')(module);define(['exports', './util'], function (exports, _util) {
	'use strict';

	var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	const head = function (arr) {
		_util.assert(!isEmpty(arr));
		return arr[0];
	},
	      last = function (arr) {
		_util.assert(!isEmpty(arr));
		return arr[arr.length - 1];
	},
	      tail = function (arr) {
		_util.assert(!isEmpty(arr));
		return arr.slice(1);
	},
	      rtail = function (arr) {
		_util.assert(!isEmpty(arr));
		return arr.slice(0, arr.length - 1);
	},
	      toArray = function (iter) {
		const out = [];
		for (let em of iter) out.push(em);
		return out;
	},
	      repeat = function (em, n) {
		_util.assert(n >= 0);
		const out = [];
		for (let i = n; i > 0; i = i - 1) out.push(em);
		return out;
	},
	      isEmpty = function (arr) {
		return arr.length === 0;
	},
	      range = function (min, max) {
		_util.assert(min < max);
		const out = [];
		for (let i = min; i < max; i = i + 1) out.push(i);
		return out;
	},
	      flatMap = function (mapped, mapper) {
		const out = [];
		mapped.forEach(function (_, i) {
			return out.push.apply(out, _toConsumableArray(mapper(_, i)));
		});
		return out;
	},
	     

	// These are mutators for slight performance gain
	unshift = function (em, mutArr) {
		mutArr.unshift(em);
		return mutArr;
	},
	      push = function (mutArr, em) {
		mutArr.push(em);
		return mutArr;
	},
	      cat = function (mutArr, ems) {
		mutArr.push.apply(mutArr, _toConsumableArray(ems));
		return mutArr;
	};
	exports.head = head;
	exports.last = last;
	exports.tail = tail;
	exports.rtail = rtail;
	exports.toArray = toArray;
	exports.repeat = repeat;
	exports.isEmpty = isEmpty;
	exports.range = range;
	exports.flatMap = flatMap;
	exports.unshift = unshift;
	exports.push = push;
	exports.cat = cat;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGEvY29tcGlsZS9wcml2YXRlL1UvQmFnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRU8sT0FDTixJQUFJLEdBQUcsVUFBQSxHQUFHLEVBQUk7QUFDYixRQUpPLE1BQU0sQ0FJTixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ3JCLFNBQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO0VBQ2I7T0FDRCxJQUFJLEdBQUcsVUFBQSxHQUFHLEVBQUk7QUFDYixRQVJPLE1BQU0sQ0FRTixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ3JCLFNBQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7RUFDMUI7T0FDRCxJQUFJLEdBQUcsVUFBQSxHQUFHLEVBQUk7QUFDYixRQVpPLE1BQU0sQ0FZTixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ3JCLFNBQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtFQUNuQjtPQUNELEtBQUssR0FBRyxVQUFBLEdBQUcsRUFBSTtBQUNkLFFBaEJPLE1BQU0sQ0FnQk4sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUNyQixTQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7RUFDbkM7T0FDRCxPQUFPLEdBQUcsVUFBQSxJQUFJLEVBQUk7QUFDakIsUUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFBO0FBQ2QsT0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQ2xCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDYixTQUFPLEdBQUcsQ0FBQTtFQUNWO09BQ0QsTUFBTSxHQUFHLFVBQUMsRUFBRSxFQUFFLENBQUMsRUFBSztBQUNuQixRQTFCTyxNQUFNLENBMEJOLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNkLFFBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQTtBQUNkLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQy9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDYixTQUFPLEdBQUcsQ0FBQTtFQUNWO09BQ0QsT0FBTyxHQUFHLFVBQUEsR0FBRyxFQUFJO0FBQ2hCLFNBQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUE7RUFDdkI7T0FDRCxLQUFLLEdBQUcsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFLO0FBQ3JCLFFBcENPLE1BQU0sQ0FvQ04sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0FBQ2pCLFFBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQTtBQUNkLE9BQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQ25DLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDWixTQUFPLEdBQUcsQ0FBQTtFQUNWO09BQ0QsT0FBTyxHQUFHLFVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBSztBQUM3QixRQUFNLEdBQUcsR0FBRyxFQUFFLENBQUE7QUFDZCxRQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7VUFBSyxHQUFHLENBQUMsSUFBSSxNQUFBLENBQVIsR0FBRyxxQkFBUyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDO0dBQUEsQ0FBQyxDQUFBO0FBQ25ELFNBQU8sR0FBRyxDQUFBO0VBQ1Y7Ozs7QUFHRCxRQUFPLEdBQUcsVUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFLO0FBQ3pCLFFBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDbEIsU0FBTyxNQUFNLENBQUE7RUFDYjtPQUNELElBQUksR0FBRyxVQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUs7QUFDdEIsUUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNmLFNBQU8sTUFBTSxDQUFBO0VBQ2I7T0FDRCxHQUFHLEdBQUcsVUFBQyxNQUFNLEVBQUUsR0FBRyxFQUFLO0FBQ3RCLFFBQU0sQ0FBQyxJQUFJLE1BQUEsQ0FBWCxNQUFNLHFCQUFTLEdBQUcsRUFBQyxDQUFBO0FBQ25CLFNBQU8sTUFBTSxDQUFBO0VBQ2IsQ0FBQTtTQXpERCxJQUFJLEdBQUosSUFBSTtTQUlKLElBQUksR0FBSixJQUFJO1NBSUosSUFBSSxHQUFKLElBQUk7U0FJSixLQUFLLEdBQUwsS0FBSztTQUlMLE9BQU8sR0FBUCxPQUFPO1NBTVAsTUFBTSxHQUFOLE1BQU07U0FPTixPQUFPLEdBQVAsT0FBTztTQUdQLEtBQUssR0FBTCxLQUFLO1NBT0wsT0FBTyxHQUFQLE9BQU87U0FPUCxPQUFPLEdBQVAsT0FBTztTQUlQLElBQUksR0FBSixJQUFJO1NBSUosR0FBRyxHQUFILEdBQUciLCJmaWxlIjoibWV0YS9jb21waWxlL3ByaXZhdGUvVS9CYWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc3NlcnQgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdFxuXHRoZWFkID0gYXJyID0+IHtcblx0XHRhc3NlcnQoIWlzRW1wdHkoYXJyKSlcblx0XHRyZXR1cm4gYXJyWzBdXG5cdH0sXG5cdGxhc3QgPSBhcnIgPT4ge1xuXHRcdGFzc2VydCghaXNFbXB0eShhcnIpKVxuXHRcdHJldHVybiBhcnJbYXJyLmxlbmd0aCAtIDFdXG5cdH0sXG5cdHRhaWwgPSBhcnIgPT4ge1xuXHRcdGFzc2VydCghaXNFbXB0eShhcnIpKVxuXHRcdHJldHVybiBhcnIuc2xpY2UoMSlcblx0fSxcblx0cnRhaWwgPSBhcnIgPT4ge1xuXHRcdGFzc2VydCghaXNFbXB0eShhcnIpKVxuXHRcdHJldHVybiBhcnIuc2xpY2UoMCwgYXJyLmxlbmd0aCAtIDEpXG5cdH0sXG5cdHRvQXJyYXkgPSBpdGVyID0+IHtcblx0XHRjb25zdCBvdXQgPSBbXVxuXHRcdGZvciAobGV0IGVtIG9mIGl0ZXIpXG5cdFx0XHRvdXQucHVzaChlbSlcblx0XHRyZXR1cm4gb3V0XG5cdH0sXG5cdHJlcGVhdCA9IChlbSwgbikgPT4ge1xuXHRcdGFzc2VydChuID49IDApXG5cdFx0Y29uc3Qgb3V0ID0gW11cblx0XHRmb3IgKGxldCBpID0gbjsgaSA+IDA7IGkgPSBpIC0gMSlcblx0XHRcdG91dC5wdXNoKGVtKVxuXHRcdHJldHVybiBvdXRcblx0fSxcblx0aXNFbXB0eSA9IGFyciA9PiB7XG5cdFx0cmV0dXJuIGFyci5sZW5ndGggPT09IDBcblx0fSxcblx0cmFuZ2UgPSAobWluLCBtYXgpID0+IHtcblx0XHRhc3NlcnQobWluIDwgbWF4KVxuXHRcdGNvbnN0IG91dCA9IFtdXG5cdFx0Zm9yIChsZXQgaSA9IG1pbjsgaSA8IG1heDsgaSA9IGkgKyAxKVxuXHRcdFx0b3V0LnB1c2goaSlcblx0XHRyZXR1cm4gb3V0XG5cdH0sXG5cdGZsYXRNYXAgPSAobWFwcGVkLCBtYXBwZXIpID0+IHtcblx0XHRjb25zdCBvdXQgPSBbXVxuXHRcdG1hcHBlZC5mb3JFYWNoKChfLCBpKSA9PiBvdXQucHVzaCguLi5tYXBwZXIoXywgaSkpKVxuXHRcdHJldHVybiBvdXRcblx0fSxcblxuXHQvLyBUaGVzZSBhcmUgbXV0YXRvcnMgZm9yIHNsaWdodCBwZXJmb3JtYW5jZSBnYWluXG5cdHVuc2hpZnQgPSAoZW0sIG11dEFycikgPT4ge1xuXHRcdG11dEFyci51bnNoaWZ0KGVtKVxuXHRcdHJldHVybiBtdXRBcnJcblx0fSxcblx0cHVzaCA9IChtdXRBcnIsIGVtKSA9PiB7XG5cdFx0bXV0QXJyLnB1c2goZW0pXG5cdFx0cmV0dXJuIG11dEFyclxuXHR9LFxuXHRjYXQgPSAobXV0QXJyLCBlbXMpID0+IHtcblx0XHRtdXRBcnIucHVzaCguLi5lbXMpXG5cdFx0cmV0dXJuIG11dEFyclxuXHR9XG5cbiJdLCJzb3VyY2VSb290IjoiL3NyYyJ9