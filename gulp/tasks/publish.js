const gulp    = require('gulp');
const shell   = require('gulp-shell');
const config  = require('../../project.config');

let publishTasks = [];
Object.keys(config.publish.tasks).forEach(function (key) {
  if (config.tasks[key]) {
    publishTasks.push(key);
  }
});

gulp.task('publish', publishTasks, shell.task('firebase deploy'));
