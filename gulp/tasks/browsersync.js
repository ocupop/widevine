const gulp        = require('gulp');
const browsersync = require('browser-sync');
const config      = require('../../project.config');

// Run the build task and start a server with BrowserSync
gulp.task('browsersync', ['build'], function() {
  browsersync(config.browsersync);
});