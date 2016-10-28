var gulp            = require('gulp');
var bowerFiles      = require('main-bower-files');
var config          = require('../../config').bower;


// loads bower dependencies into lib
gulp.task('bower', function () {
  gulp.src(bowerFiles(config))
    .pipe(gulp.dest(config.dest));
});