import assert from 'assert'
import check, { fail, warnIf } from '../check'
import { AllKeywords, isNameCharacter, ReservedCharacters, ReservedWords } from '../Lang'
import Span, { single } from '../Span'
import { CallOnFocus, DotName, Keyword, Literal, Name } from '../Token'
import { rcons } from '../U/Bag'
import type from '../U/type'
import { code } from '../U'
import GroupPre from './GroupPre'
import Stream from './Stream'

const cc = ch => ch.charCodeAt(0)
const
	N0 = cc('0'), N1 = cc('1'), N2 = cc('2'), N3 = cc('3'), N4 = cc('4'),
	N5 = cc('5'), N6 = cc('6'), N7 = cc('7'), N8 = cc('8'), N9 = cc('9'),
	OpParen = cc('('), OpBracket = cc('['), OpBrace = cc('{'),
	ClParen = cc(')'), ClBracket = cc(']'), ClBrace = cc('}'),
	Space = cc(' '),
	Dot = cc('.'),
	Colon = cc(':'),
	Tilde = cc('~'),
	Bar = cc('|'),
	Underscore = cc('_'),
	Backslash = cc('\\'),
	Hash = cc('#'),
	Newline = cc('\n'),
	Backtick = cc('`'),
	Quote = cc('"'),
	Tab = cc('\t'),
	Hyphen = cc('-')

export default function* lexPlain(opts, stream, isInQuote) {
	type(stream, Stream, isInQuote, Boolean)

	let indent = 0

	while (stream.hasNext()) {
		const startPos = stream.pos
		const span = () => new Span(startPos, stream.pos)
		const s = members => {
			members.span = span()
			return members
		}
		const keyword = k => Keyword({ span: span(), k: k })
		const gp = k => GroupPre({ span: span(), k: k })

		function eatNumber() {
			let msLit = _ + stream.takeWhile(/[0-9\.e_]/)
			if (msLit.endsWith('.')) {
				msLit = msLit.slice(0, msLit.length - 1)
				stream.stepBack()
			}
			const jsLit = msLit.replace(/_/g, '')
			check(!Number.isNaN(Number(jsLit)), stream.pos, () =>
				`Invalid number literal ${code(msLit)}`)
			return Literal(s({ value: jsLit, k: Number }))
		}

		const _ = stream.eat()
		switch (cc(_)) {
			case N0: case N1: case N2: case N3: case N4:
			case N5: case N6: case N7: case N8: case N9:
				yield eatNumber(_, stream)
				break
			case OpParen: case OpBracket: case OpBrace: case ClParen: case ClBracket:
				yield gp(_)
				break
			case ClBrace:
				if (isInQuote)
					return
				yield gp(_)
				break
			case Space:
				warnIf(opts, stream.peek() === ' ', span, 'Multiple spaces in a row')
				yield gp('sp')
				break
			case Dot:
				if (stream.peek() === ' ' || stream.peek() === '\n') {
					// ObjLit assign in its own spaced group
					yield gp('sp')
					yield keyword('. ')
					yield gp('sp')
					break
				} else {
					yield DotName(s({
						// +1 for the dot we just skipped.
						nDots: stream.takeWhile('.').length + 1,
						name: stream.takeWhile(isNameCharacter)
					}))
					break
				}
			case Colon:
				yield keyword(':')
				break
			case Tilde:
				if (stream.tryEat('|')) {
					yield keyword('~|')
					yield gp('sp')
					break
				} else {
					yield keyword('~')
					break
				}
				break
			case Bar:
				// First arg in its own spaced group
				yield keyword('|')
				yield gp('sp')
				break
			case Underscore:
				yield keyword('_')
				break
			case Hash:
				stream.takeUpTo('\n')
				break
			case Newline: {
				check(!isInQuote, span, 'Quote interpolation cannot contain newline')
				check(stream.prev() !== ' ', span, 'Line ends in a space')
				// Skip any blank lines.
				stream.takeWhile('\n')
				const oldIndent = indent
				indent = stream.takeWhile('\t').length
				check(stream.peek() !== ' ', stream.pos, 'Line begins in a space')
				if (indent <= oldIndent) {
					for (let i = indent; i < oldIndent; i = i + 1)
						yield gp('<-')
					yield gp('ln')
				} else {
					check(indent === oldIndent + 1, span, 'Line is indented more than once')
					yield gp('->')
				}
				break
			}
			case Backtick: {
				const js = stream.takeUpTo(/[`\n]/)
				check(stream.eat() === '`', span, () => `Unclosed ${code('`')}`)
				yield Literal(s({ value: js, k: 'js' }))
				break
			}
			case Quote:
				yield* lexQuote(opts, stream, indent)
				break
			case Tab:
				fail(span(), 'Tab may only be used to indent')
			case Hyphen:
				if (/[0-9]/.test(stream.peek())) {
					yield eatNumber()
					break
				}
				// Else fallthrough
			default: {
				check(!ReservedCharacters.has(_), span, () => `Reserved character ${code(_)}`)
				// All other characters should be handled in a case above.
				assert(isNameCharacter(_))
				const name = _ + stream.takeWhile(isNameCharacter)
				switch (name) {
					case 'region':
						// Rest of line is a comment.
						stream.takeUpTo('\n')
						yield keyword('region')
						break
					default:
						if (stream.tryEat('_'))
							yield CallOnFocus(s({ name: name }))
						else if (AllKeywords.has(name))
							yield keyword(name)
						else if (ReservedWords.has(name))
							fail(span, `Reserved word ${code(name)}`)
						else
							yield Name(s({ name: name }))
				}
			}
		}
	}
}


function* lexQuote(opts, stream, indent) {
	type(stream, Stream, indent, Number)

	const isIndented = stream.peek() === '\n'
	const quoteIndent = indent + 1

	let first = true
	let read = ''
	let startOfRead = stream.pos

	function* yieldRead() {
		if (read !== '') {
			yield Literal({
				span: new Span(startOfRead, stream.pos),
				// Don't include leading newline of indented block
				value: first && isIndented ? read.slice(1) : read,
				k: String
			})
			first = false
		}
		read = ''
		startOfRead = stream.pos
	}

	yield GroupPre({ span: single(stream.pos), k: '"' })

	eatChars: while (true) {
		const chPos = stream.pos
		const ch = stream.eat()
		switch (cc(ch)) {
			case Backslash: {
				const escaped = stream.eat()
				check(quoteEscape.has(escaped), stream.pos, () =>
					`No need to escape ${code(escaped)}`)
				read = read + quoteEscape.get(escaped)
				break
			}
			case OpBrace: {
				yield* yieldRead()
				// We can't just create a Group now because there may be other GroupPre_s inside.
				yield GroupPre({ span: single(chPos), k: '(' })
				yield* lexPlain(opts, stream, true)
				yield GroupPre({ span: single(stream.pos), k: ')' })
				break
			}
			case Newline: {
				check(stream.prev() !== ' ', chPos, 'Line ends in a space')
				check(isIndented, chPos, 'Unclosed quote.')
				let newIndent = stream.takeWhile('\t').length

				let s = ''

				// Allow blank lines.
				if (newIndent === 0) {
					while (stream.tryEat('\n'))
						s = s + '\n'
					newIndent = stream.takeWhile('\t').length
				}

				if (newIndent < quoteIndent) {
					// Indented quote section is over.
					// Undo reading the tabs and newline.
					stream.stepBackMany(chPos, newIndent + 1)
					assert(stream.peek() === '\n')
					break eatChars
				}
				else
					read = read + s + '\n' + '\t'.repeat(newIndent - quoteIndent)
				break
			}
			case Quote:
				if (!isIndented)
					break eatChars
				// Else fallthrough
			default:
				read = read + ch
		}
	}

	yield* yieldRead()
	yield GroupPre({ span: single(stream.pos), k: 'close"' })
}

const quoteEscape = new Map([['{', '{'], ['n', '\n'], ['t', '\t'], ['"', '"'], ['\\', '\\']])

