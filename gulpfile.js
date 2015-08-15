var gulp = require("gulp");
var babel = require("gulp-babel");
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task("babel:watch", function () {
  return gulp.src("src/**/*.js")
    .pipe(plumber())
    .pipe(watch('src/**/*.js'))
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['babel:watch']);
