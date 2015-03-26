"use strict"

var
	babel = require('gulp-babel'),
	gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch')

var src_ms = 'src/**/*.ms'
var src_js = 'src/**/*.js'

var dest = 'js'

function pipeMs(stream) {
	var ms = require('./js/compile/gulp-ms')
	return stream
	.pipe(sourcemaps.init())
	.pipe(ms())
	.pipe(sourcemaps.write('.', {
		debug: true,
		includeContent: false,
		sourceRoot: './src'
	}))
	.pipe(gulp.dest(dest))
}

function pipeJs(stream) {
	return stream
	.pipe(sourcemaps.init())
	.pipe(babel({
		whitelist: [
			'es6.arrowFunctions',
			'es6.classes',
			'es6.destructuring',
			'es6.modules',
			'es6.parameters.rest',
			'es6.spread',
			'es6.properties.shorthand',
			'es6.templateLiterals',
			'strict'
		]
	}))
	.pipe(sourcemaps.write('.', {
		debug: true,
		sourceRoot: '/src'
	}))
	.pipe(gulp.dest(dest))
}

gulp.task('js', function() {
	return pipeJs(gulp.src(src_js))
})

gulp.task('ms', [ 'js' ], function() {
	return pipeMs(gulp.src(src_ms))
})

gulp.task('watch-js', function() {
	pipeJs(gulp.src(src_js).pipe(watch(src_js)))
})

gulp.task('watch', [ 'ms' ], function() {
	pipeMs(gulp.src(src_ms).pipe(watch(src_ms)))
	pipeJs(gulp.src(src_js).pipe(watch(src_js)))
})

gulp.task('lint', function() {
	// For some reason, requiring this makes es6-shim unhappy.
	// So, can't lint and do other things in the same task.
	var eslint = require('gulp-eslint')
	return gulp.src(src_js)
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failOnError())
})

gulp.task('default', [ 'watch' ])