import chalk from 'chalk'
import { PluginError, replaceExtension } from 'gulp-util'
import { obj } from 'through2'
import applySourceMap from 'vinyl-sourcemaps-apply'
import compile from './index'
import { CompileError } from './check'
import manglePath from './manglePath'

const Name = 'gulp-ms'

export default function gulpMs(opts) {
	opts = opts || { }
	// TODO: Move to Opts.js
	if (opts.checks === undefined)
		opts.checks = true

	return obj((file, enc, cb) => {
		if (file.isNull())
			cb(null, file)
		else if (file.isStream())
			cb(new PluginError(Name, 'Streaming not supported'))
		else {
			const src = file.contents.toString('utf8')
			const outFile = manglePath(replaceExtension(file.path, '.js'))
			try {
				const { code, sourceMap } = compile(src, file.path, opts)
				applySourceMap(file, sourceMap)
				file.contents = new Buffer(code)
				file.path = outFile
				cb(null, file)
			} catch (err) {
				const anno = `${chalk.magenta('error')} ${chalk.green(file.path)} `
				err.message = anno + err.message
				err.stack = anno + err.stack
				if (err instanceof CompileError) {
					console.log(err.message)
					cb(new PluginError(Name, 'Error in Mason source.'))
				}
				else
					cb(new PluginError(Name, err))
			}
		}
	})
}