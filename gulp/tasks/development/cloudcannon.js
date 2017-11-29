var gulp        = require('gulp');
var changed     = require('gulp-changed');
var config      = require('../../config').cloudcannon;

// Copy and flatten assets to work with Shopify
gulp.task('cloudcannon:assets', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});