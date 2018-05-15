const config = require('../../project.config.js');
const eslint = require('gulp-eslint');
const gulp   = require('gulp');

gulp.task('eslint', function() {
  return gulp.src([config.js.src])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});
