'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require("gulp-babel-minify");
const { watch } = require('gulp');


// Directory/Folder
const src_dir_sass = './src/sass/**/*.scss';
const dest_dir_sass = './dist/css';
const src_dir_js = './src/js/**/*.js';
const dest_dir_js = './dist/js';

// view folder assetss
const src_dir_sass2 = './view/src/sass/**/*.scss';
const dest_dir_sass2 = './view/dist/css';
const src_dir_js2 = './view/src/js/**/*.js';
const dest_dir_js2 = './view/dist/js';



// Sass - ~gulp sass    /.
function gulpsass() {
    return gulp.src(src_dir_sass)
        .pipe(
            sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError)
        )
        .pipe(gulp.dest(dest_dir_sass));
};
exports.sass = gulpsass;

// Babel JS - ~gulp js  /.
function gulpjs() {
    return gulp.src(src_dir_js)
        .pipe(minify({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(gulp.dest(dest_dir_js))
};
exports.js = gulpjs;


// Sass - ~gulp sass_view   /View
function gulpsass_view() {
    return gulp.src(src_dir_sass2)
        .pipe(
            sass({
                outputStyle: 'compressed'
            }).on('error', sass.logError)
        )
        .pipe(gulp.dest(dest_dir_sass2));
};
exports.sass_view = gulpsass_view;

// Babel JS - ~gulp js_view  /view
function gulpjs_view() {
    return gulp.src(src_dir_js2)
        .pipe(minify({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(gulp.dest(dest_dir_js2))
};
exports.js_view = gulpjs_view;


// Default gulp - ~gulp
exports.default = function () {

    watch(src_dir_sass, gulpsass);
    watch(src_dir_js, gulpjs);
    watch(src_dir_sass2, gulpsass_view);
    watch(src_dir_js2, gulpjs_view);

};