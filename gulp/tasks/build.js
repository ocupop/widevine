const gulp        = require('gulp');
const runSequence = require('run-sequence');
const config      = require('../../project.config');

let tasks = [];
Object.keys(config.tasks).forEach(function (key) {
  if (config.tasks[key] && key != 'browsersync' && key != 'watch') {
    tasks.push((key == 'webpack' && config.tasks.watch) ? '_' + key : key);
  }
});


gulp.task('build', function(callback) {
  // Run all tasks needed for a build in defined order
  // TODO - Logic for seperating tasks inot groups
  runSequence(tasks, callback);
});
