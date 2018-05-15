const gulp     = require('gulp');
const scsslint = require('gulp-scss-lint');
const config   = require('../../project.config');

// Lint SCSS files
// `gem install scss-lint` needed
gulp.task('scsslint', function() {
  return gulp.src(config.scsslint.src)
    .pipe(scsslint(config.scsslint.options));
});