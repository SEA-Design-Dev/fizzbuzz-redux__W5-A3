var gulp = require("gulp");
var webpack = require("webpack-stream");

gulp.task('webpack', function(callback) {
  return gulp.src("js/**/*.js")
  .pipe(webpack({
    output: {
      filename: "main.js"
    }
  }))
  .pipe(gulp.dest('./build/'));
});

gulp.task("default", ["webpack"], function() {
  gulp.watch("js/**/*.js", ["webpack"]);
});
