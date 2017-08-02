var gulp        = require('gulp');
var changed     = require('gulp-changed');
var config      = require('../../config').images;

/**
 * Copy images to build folder
 * if not changed
 */
gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.build)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(gulp.dest(config.build));
});