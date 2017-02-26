'use strict';

let path        = require('path');
let gulp        = require('gulp');
let $           = require('gulp-load-plugins')();
let browserSync = require('browser-sync');

let globs = {
    'scss' : './assets/sass/*.scss'
};

let paths = {
    'css' : './assets/css'
};

let errorHandler = (title) => {
    'use strict';

    return function (err) {
        $.util.log($.util.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};

gulp.task('serve', ['watch'], function () {
    browserSync.init({
        server : "./",
        open   : "internal"
    });
});

gulp.task('reload', [], function () {
    browserSync.reload();
});

gulp.task('watch', [], function () {
    gulp.watch([
        './**/*.html',
        './**/*.js'
    ], ['reload']);

    gulp.watch(['./**/*.scss'], ['styles:reload']);
});

gulp.task('styles', [], function () {
    let sassOptions = {
        outputStyle : 'expanded',
        precision   : 10
    };

    return gulp.src([globs.scss])
        .pipe($.sass(sassOptions)).on('error', errorHandler('Sass'))
        .pipe(gulp.dest(paths.css))
});

gulp.task('styles:reload', ['styles'], function () {
    browserSync.reload();
});