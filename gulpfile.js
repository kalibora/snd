'use strict';

// Require
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uncss = require('gulp-uncss'),
    rename = require('gulp-rename'),
    nano = require('gulp-cssnano');

// Compile to sass
gulp.task('sass', function () {
    return gulp.src('sass/tachyons.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('full.css'))
        .pipe(gulp.dest('css/'));
});

// Watch sass changes
gulp.task('sasswatch', function () {
    return gulp.watch('sass/**/*.scss', ['sass']);
});

// Minfiy css
gulp.task('uncss', function() {
    return gulp.src('css/full.css')
        .pipe(uncss({ 
            html: ['index.html', '_includes/**/*.html', '_layouts/**/*.html']
        }))
        .pipe(nano())
        .pipe(rename('min.css'))
        .pipe(gulp.dest('css/'));
});