const gulp          = require('gulp');
const sass          = require('gulp-sass');
const postcss       = require('gulp-postcss');
const autoprefixer  = require('autoprefixer');
const sourcemaps    = require('gulp-sourcemaps');
const browsersync   = require('browser-sync');
const config        = require('../../project.config');

// Generate CSS from SCSS
gulp.task('sass', function() {
  browsersync.notify('Compiling Sass');
  
  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer(config.autoprefixer)
    ]))
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: config.sass.src }))
    .pipe(gulp.dest(config.sass.dest));
});
