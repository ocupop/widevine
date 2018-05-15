const gulp        = require('gulp');
const argv        = require('yargs').argv;
const cp          = require('child_process');
const browsersync = require('browser-sync');
const config      = require('../../project.config');

let jekyll        = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

// Build the Jekyll Site
gulp.task('jekyll', function(done) {
  browsersync.notify('Building Jekyll Site');

  let jekyllConfig = config.jekyll.config.default;
  if (argv.production) {
    process.env.JEKYLL_ENV = 'production';
    jekyllConfig += config.jekyll.config.production ? ',' + config.jekyll.config.production : '';
  } else {
    jekyllConfig += config.jekyll.config.development ? ',' + config.jekyll.config.development : '';
  }
  return cp.spawn(jekyll, ['build', '--config', jekyllConfig], {stdio: 'inherit', env: process.env})
    .on('close', done);
});


// Rebuild Site
gulp.task('jekyll-rebuild', ['jekyll'], function() {
  browsersync.notify('Re-building...');
  browsersync.reload();
});