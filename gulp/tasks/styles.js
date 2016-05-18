var config = require("../config");
var gulp = require("gulp");
var $ = require("gulp-load-plugins")(config.loadPluginsOptions);


gulp.task("styles", (cb) => {
	return $.runSequence(
		"copy:sass",
		cb);
});

gulp.task("copy:sass", () => {
	return gulp.src(config.src.sass)
		.pipe($.plumber())
		.pipe(gulp.dest(config.artifact.assets));
});