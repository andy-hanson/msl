"use strict"

const
	E = require("../E"),
	Lang = require("../Lang"),
	T = require("../T"),
	Sq = require("../U/Sq"),
	type = require("../U/type"),
		isa = type.isa,
	U = require("../U"),
	Px = require("./Px")
const
	parseBlock_ = function() { return require("./parseBlock") },
	parseExpr_ = function() { return require("./parseExpr") },
	parseSpaced = require("./parseSpaced")

module.exports = function parseSingle(px, t) {
	type(px, Px, t, T)
	px = px.withSpan(t.span)
	switch (true) {
		case isa(t, T.CallOnFocus):
			return E.Call(px.s({
				called: E.LocalAccess(px.s({ name: t.name })),
				args: [E.LocalAccess.focus(px.span)]
			}))

		case isa(t, T.Literal):
			return E.Literal(t)
		case isa(t, T.Name):
			return E.LocalAccess(px.s({ name: t.name }))
		case T.Keyword.is("this")(t):
			return E.This(px.s({}))
		case T.Keyword.is("_")(t):
			return E.LocalAccess.focus(px.span)
		case T.Keyword.is(Lang.SpecialKeywords)(t):
			return E.SpecialKeyword(px.s({ k: t.k }))

		case T.Group.is('sp')(t):
			return parseSpaced(px, t.sqt)
		case T.Group.is('->')(t):
			return parseBlock_().wrap(px, t.sqt, "val")
		case T.Group.is('"')(t):
			return E.Quote(px.s({
				parts: t.sqt.map(function(tSub) { return parseSingle(px, tSub) })
			}))
		case T.Group.is('(')(t):
			return parseExpr_()(px, t.sqt)
		case T.Group.is('[')(t):
			return E.ListSimple(px.s({
				parts: parseExpr_().parseExprParts(px, t.sqt)
			}))

		case isa(t, T.DotName):
			if (t.nDots === 3)
				return E.Splat(px.s({ splatted: E.LocalAccess(px.s({ name: t.name })) }))

		default:
			check.fail(px.span, "Unexpected " + t)
	}
}
