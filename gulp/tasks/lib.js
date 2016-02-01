'use strict';

var config      = require('../config');
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');

gulp.task('lib', function() {

  return gulp.src(config.lib.src)
    .pipe(gulp.dest(config.lib.dest));
});