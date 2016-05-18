var config = require("../config");
var gulp = require("gulp");
var $ = require("gulp-load-plugins")(config.loadPluginsOptions);

gulp.task("html", (cb) => {
	return $.runSequence(
		["html:copy", "html:minify"],
		cb);
});

gulp.task("html:copy", () => {
	return gulp.src(config.src.html)
		.pipe($.plumber())
		.pipe(gulp.dest(config.artifact.assets));
});

gulp.task("html:minify", () => {
	return gulp.src(config.src.html)
		.pipe($.sourcemaps.init())
		.pipe($.htmlmin())
		.pipe($.ngTemplates({
				module: config.output.tmpl.moduleName,
				path: (path, base) => {
					return path.replace(base, `/${config.output.root}/assets/`);
				},
			})
		)
		.pipe($.concat(config.output.tmpl.fileName))
		.pipe($.sourcemaps.write("."))
		.pipe(gulp.dest(config.artifact.assets));
});