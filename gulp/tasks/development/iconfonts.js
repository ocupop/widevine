var gulp = require('gulp');
var fontcustom = require('gulp-fontcustom');
var slugify = require('slugify');
var config = require('../../config').iconfonts;

// Build font family with icon files
// **** NEEDS REFACTOR *********
gulp.task('iconfonts', function() {
  gulp.src(config.src)
  .pipe(fontcustom({
    font_name: slugify(config.fontName).toLowerCase(),  // defaults to 'fontcustom', 
    'css-selector': '.icon-{{glyph}}'
  }))
  .pipe(gulp.dest(config.dest))
});