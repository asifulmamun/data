'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const {watch} = require('gulp');


// Directory/Folder
const src_dir_sass = './src/sass/**/*.scss';
const dest_dir_sass = './dist/css';
const src_dir_js = './src/js/**/*.js';
const dest_dir_js = './dist/js';



// Sass - ~gulp sass
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



// Babel JS - ~gulp js
function gulpjs() {
    return gulp.src(src_dir_js)
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest(dest_dir_js))
};
exports.js = gulpjs;



// Default gulp - ~gulp
exports.default = function() {
    
    watch(src_dir_sass, gulpsass);
    watch(src_dir_js, gulpjs);

};