'use strict';
const gulp       = require('gulp');
const requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

// Default task begins by setting the watch
gulp.task('default', ['watch']);
