var config = require("../config");
var gulp = require("gulp");
var $ = require("gulp-load-plugins")(config.loadPluginsOptions);

gulp.task("lint", (cb) => {
	return $.runSequence(
		["lint:ts", "lint:sass"],
		cb);
});

gulp.task("lint:ts", () => {
	return gulp.src([config.src.ts, `!${config.test.files}`])
		.pipe($.tslint())
		.pipe($.tslint.report($.tslintStylish, {
			emitError: true,
			sort: true,
			bell: false
		}));
});

gulp.task("lint:sass", (cb) => {
	var processors = [
		$.stylelint(),
		$.postcssReporter({
			clearMessages: true,
			throwError: true
		}),
	];

	return gulp.src(config.src.sass)
		.pipe($.postcss(processors, {
			syntax: $.postcssScss
		}));
});