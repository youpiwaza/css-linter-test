const { dest, parallel, series, src, task, watch } 	= require('gulp'),
      colors    = require('ansi-colors'),
      fancyLog  = require('fancy-log'),
      stylelint = require('gulp-stylelint');
;

task('lint-css', function lintCssTask() {
  return src('src/**/*.css')
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true},
        {formatter: isCssOk}
      ]
    }));
});

task('default', parallel('lint-css'));

function isCssOk(report) {
  // console.log(report);
  if(typeof report[0].errored === 'undefined'){
    fancyLog(colors.green('CSS is clean :)'));
  }
}
