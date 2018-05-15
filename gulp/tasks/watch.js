const gulp    = require('gulp');
const config  = require('../../project.config');
// const log = require('fancy-log');

// Start browsersync task and then watch files for changes
gulp.task('watch', ['browsersync'], function() {

  if(config.tasks.jekyll) {
    gulp.watch(config.jekyll.watch, ['jekyll-rebuild']);
  }

  if(config.tasks.sass) {
    gulp.watch(config.sass.watch, ['sass', 'scsslint']);
  }

  if(config.tasks.imagemin) {
    gulp.watch(config.imagemin.src, ['imagemin']);
  }

});