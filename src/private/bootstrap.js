export const pAdd = (object, key, value) =>
	Object.defineProperty(object, key, {
		value,
		enumerable: true,
		// TODO:ES6 `writable` shouldn't need to be explicit
		writable: false
	})

// region Builtin Functions for use by the compiler
export const
	// This object contains functions called upon by compiled code.
	ms = { },
	msDef = (name, fun) =>
		pAdd(ms, name, fun),
	msCall = (name, ...args) =>
		ms[name](...args)

pAdd(global, '_ms', ms)

const msDefs = {
	lazyGetModule(module) {
		if (module === undefined)
			throw new Error('Module undefined.')
		return module._get instanceof ms.Lazy ? module._get : ms.lazy(() => module)
	},

	getModule(module) {
		if (module === undefined)
			throw new Error('Module undefined.')
		return module._get instanceof ms.Lazy ? module._get.get() : module
	},

	getDefaultExport: module => {
		if (module === undefined)
			throw new Error('Module undefined.')
		const mod = ms.getModule(module)
		return mod.default === undefined ? mod : mod.default
	},

	lazyProp(lazyObject, key) {
		if (!(lazyObject instanceof ms.Lazy))
			throw new Error(`Expected a Lazy, got: ${lazyObject}`)
		return ms.lazy(() => lazyObject.get()[key])
	},

	get(object, key) {
		const _ = object[key]
		if (_ === undefined)
			throw new Error(`Module ${object.name} does not have ${key}`)
		return _
	},

	bool(b) {
		if (typeof b !== 'boolean')
			throw new Error(`Expected Boolean, got ${b}`)
		return b
	},

	// Used for splat calls.
	// TODO:ES6 Shouldn't need. `fun(...arg)` should work for any iterable.
	arr(a) {
		if (a instanceof Array)
			return a
		const out = []
		for (let em of ms.iterator(a))
			out.push(em)
		return out
	},

	// For use by Obj-Type.ms generated code.
	checkNoExtras(_this, _, rtName) {
		// If there was some key in `_` that we didn't copy:
		if (Object.keys(_).length > Object.keys(_this).length)
			Object.getOwnPropertyNames(_).forEach(function(name) {
				// TODO:DISPLAYNAME
				if (name !== 'name')
					if (!Object.prototype.hasOwnProperty.call(_this, name))
						throw new Error('Extra prop ' + name + ' for ' + rtName)
			})
	},

	Lazy: function Lazy(get) {
		this.get = () => {
			this.get = () => {
				throw new Error(`Lazy value depends on itself. Thunk: ${get}`)
			}
			const _ = get()
			this.get = () => _
			return _
		}
	},
	lazy: _ => new ms.Lazy(_),
	unlazy: _ => _ instanceof ms.Lazy ? _.get() : _,

	set(_, k0, v0, k1, v1, k2, v2, k3) {
		const doSet = (k, v) => {
			// TODO:DISPLAYNAME
			if (!(k === 'name' && _ instanceof Function))
				_[k] = v
		}

		doSet(k0, v0)
		if (k1 === undefined)
			return _
		doSet(k1, v1)
		if (k2 === undefined)
			return _
		doSet(k2, v2)
		if (k3 === undefined)
			return _
		for (let i = 7; i < arguments.length; i = i + 2)
			doSet(arguments[i], arguments[i + 1])
		return _
	},


	lset(_, k0, v0, k1, v1, k2, v2, k3) {
		setOrLazy(_, k0, v0)
		if (k1 === undefined)
			return _
		setOrLazy(_, k1, v1)
		if (k2 === undefined)
			return _
		setOrLazy(_, k2, v2)
		if (k3 === undefined)
			return _
		for (let i = 7; i < arguments.length; i = i + 2)
			setOrLazy(_, arguments[i], arguments[i + 1])
		return _
	}
}
Object.keys(msDefs).forEach(_ => msDef(_, msDefs[_]))

const setOrLazy = (obj, key, val) => {
	if (val instanceof ms.Lazy)
		Object.setProperty(obj, key, { get() { return ms.unlazy(val) } })
	else
		pAdd(obj, key, val)
}

const msDefTemp = (name, fun) =>
	ms[name] = fun

msDefTemp('show', _ => {
	if (typeof _ !== 'string' && typeof _ !== 'number')
		throw new Error(
			`Only use Strings or Numbers here until this is overridden by show.ms. Got:\n${_}`)
	return _.toString()
})

// region Contains
// Some Types want to implement contains? before it is officially defined.
export const containsImplSymbol = 'impl-contains?'
export const implContains = (type, impl) =>
	Object.defineProperty(type.prototype, containsImplSymbol, {
		value: impl,
		enumerable: false
	})

// Overwritten by Type/index.ms to actually do type checking.
msDefTemp('checkContains', (type, val) => val)

Object[containsImplSymbol] = function(ignore, _) {
	if (_ == null)
		return false
	switch (typeof _) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'symbol':
			return false
		default:
			return true
	}
};

// An object is a Function if its typeof is `function`.
// This helps us catch any callabe Obj-Type.
// TODO: Separate Function from Callable
// Since these are primitives, we can't use `instanceof`.
[ Function, Boolean, String, Symbol, Number ].forEach(type => {
	const typeOf = type.name.toLowerCase()
	type[containsImplSymbol] = (ignore, _) => typeof _ === typeOf
})
