var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var browsersync  = require('browser-sync');
var sass         = require('gulp-ruby-sass');
var gulpFilter   = require('gulp-filter');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var changed      = require('gulp-changed');
var config       = require('../../config');

// Generate CSS from SCSS
// Build sourcemaps
gulp.task('sass', function() {
  var sassConfig = config.sass.options;

  sassConfig.onError = browsersync.notify;

  // Don’t write sourcemaps of sourcemaps
  var filter = gulpFilter(['*.css', '!*.map'], { restore: true });

  browsersync.notify('Compiling Sass');

  return sass(config.sass.src, sassConfig)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(filter) // Don’t write sourcemaps of sourcemaps
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: 'app/_assets/scss' }))
    .pipe(filter.restore) // Restore original files
    .pipe(gulp.dest(config.sass.dest));
});

// Copy vendor styles
gulp.task('sass:vendor', function() {
  return gulp.src(config.sass.vendor.src)
    .pipe(changed(config.sass.vendor.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.sass.vendor.dest));
});