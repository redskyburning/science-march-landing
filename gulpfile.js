'use strict';

var path = require('path');
var gulp = require('gulp');

var browserSync = require('browser-sync');

gulp.task('serve', ['watch'], function () {
	browserSync.init({
		server : "./",
		open : "internal"
	});
});

gulp.task('reload', [], function () {
	browserSync.reload();
});

gulp.task('watch', [], function () {
	gulp.watch([
		'./**/*.html',
		'./**/*.css',
		'./**/*.js'
   	], ['reload']);
});