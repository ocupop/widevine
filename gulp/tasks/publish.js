const gulp    = require('gulp');
const ghPages = require('gulp-gh-pages');
const shell   = require('gulp-shell');
const config  = require('../../project.config');

// const log = require('fancy-log');

let publishTasks = [];
Object.keys(config.publish.tasks).forEach(function (key) {
  if (config.tasks[key]) {
    publishTasks.push(key);
  }
});

// Start browsersync task and then watch files for changes
gulp.task('publish', publishTasks, function() {
  // Publish to ghPages
  if(config.publish.github) {
    return gulp.src(config.publish.src + '/**/*')
      .pipe(ghPages());
  }

  // Publish to Firebase
  if(config.publish.firebase) {
    return shell.task([
      'firebase deploy'
    ]);
  }

});