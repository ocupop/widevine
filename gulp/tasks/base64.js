var gulp   = require('gulp');
var base64     = require('gulp-base64');
const config   = require('../../project.config');
// var config = require('../../config').base64;

// Replace urls in CSS files with base64 encoded data
gulp.task('base64', ['sass'], function() {
  return gulp.src(config.src)
    .pipe(base64(config.options))
    .pipe(gulp.dest(config.dest));
});