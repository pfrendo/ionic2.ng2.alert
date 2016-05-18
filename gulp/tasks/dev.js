var config = require("../config");
var gulp = require("gulp");
var $ = require("gulp-load-plugins")(config.loadPluginsOptions);

gulp.task("watch", () => {
	gulp.watch([`${config.src.ts}`, `!${config.test.files}`], ["scripts"])
		.on("change", reportChange)
		.on("error", swallowError);

	gulp.watch(`${config.src.html}`, ["html"])
		.on("change", reportChange)
		.on("error", swallowError);

	gulp.watch(`${config.src.sass}`, ["styles"])
		.on("change", reportChange)
		.on("error", swallowError);

	gulp.watch(`${config.test.files}`, ["compile:test"])
		.on("change", reportChange)
		.on("error", swallowError);

});

var reportChange = function (event) {
	console.log(`File ${event.path} was ${event.type}, running tasks...`);
};

var swallowError = function (error) {
	console.log($.util.colors.red(`Error occurred while running watched task...`));
};