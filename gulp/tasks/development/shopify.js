var gulp        = require('gulp');
var changed     = require('gulp-changed');
var flatten     = require('gulp-flatten');
var config      = require('../../config').shopify;

// Copy and flatten assets to work with Shopify
gulp.task('shopify:assets', function() {
  return gulp.src(config.src)
    .pipe(flatten()) // Flatten folder structure
    .pipe(changed(config.assets)) // Ignore unchanged files
    .pipe(gulp.dest(config.assets));
});