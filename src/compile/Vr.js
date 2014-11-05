"use strict"

const
	assert = require("assert"),
	E = require("./E"),
	Lang = require("./Lang"),
	type = require("./U/type"),
	types = require("./U/types")

const Vr = module.exports = types.recordType("Vr", Object, {
	accessToK: Map,
	eToIsInGenerator: Map
})
Object.assign(Vr.prototype, {
	isLazy: function(local) {
		type(local, E.LocalAccess)
		const k = this.accessToK.get(local)
		type(k, Lang.KLocal)
		return k === "lazy"
	},
	setEIsInGenerator: function(e, is) {
		type(e, E, is, Boolean)
		assert(botherWithIsInGenerator(e))
		this.eToIsInGenerator.set(e, is)
	},
	eIsInGenerator: function(e) {
		assert(botherWithIsInGenerator(e))
		assert(this.eToIsInGenerator.has(e))
		return this.eToIsInGenerator.get(e)
	}
})

const botherWithIsInGenerator = function(e) {
	return type.isa(e, E.CaseVal) || type.isa(e, E.BlockWrap)
}
