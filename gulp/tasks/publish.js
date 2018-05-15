const gulp    = require('gulp');
const ghPages = require('gulp-gh-pages');
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
  if(config.publish.github) {
    return gulp.src(config.publish.src + '/**/*')
      .pipe(ghPages());
  }
});