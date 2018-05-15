const gulp          = require('gulp');
const argv          = require('yargs').argv;
const named         = require('vinyl-named');
const plumber       = require('gulp-plumber');
const uglify        = require('gulp-uglify');
const webpackStream = require('webpack-stream');
const webpack       = require('webpack');
const config        = require('../../project.config');


const entry = [];
for (var i = 0; i <= config.js.entry.length - 1; i++) {
  entry.push(config.js.entry[i]);
}

// To lint or not to lint
if (config.tasks.eslint) config.webpack.module.rules.push(config.eslintLoader);

config.webpack.watch = argv.watch;

gulp.task('webpack', function () {

  return gulp.src(entry)
    .pipe(plumber())
    .pipe(named())
    .pipe(webpackStream(config.webpack, webpack))
    .pipe(uglify())
    .pipe(gulp.dest(config.js.dest));
});

// For internal use only
gulp.task('_webpack', function () {
  config.webpack.watch = config.tasks.watch;
  gulp.start('webpack');
});
