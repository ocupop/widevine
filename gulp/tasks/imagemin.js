const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');
const newer    = require('gulp-newer');
const plumber  = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const config   = require('../../project.config.js');

gulp.task('imagemin', function () {
  return gulp.src(config.imagemin.src)
    .pipe(plumber())
    .pipe(newer(config.imagemin.dest))
    .pipe(imagemin({
      progressive: config.imagemin.progressive,
      svgoPlugins: config.imagemin.svgoPlugins,
      use:         [pngquant()],
    }))
    .pipe(gulp.dest(config.imagemin.dest));
});