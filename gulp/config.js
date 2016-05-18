var fs = require("fs");

var pkg = JSON.parse(fs.readFileSync("./package.json", "utf-8"));
var srcRoot = "src";
var artifactRoot = "_artifact";
const tsdMainFile = "tools/typings/tsd.d.ts";

module.exports = {
	output: {
		root: "dist",
		tmpl : {
			moduleName: `${pkg.name}.tmpls`,
			fileName: `${pkg.name}.tmpls.js`
		}
	},
	src: {
		root: srcRoot,
		ts: `${srcRoot}/**/*.ts`,
		html: `${srcRoot}/**/*.html`,
		sass: `${srcRoot}/**/*.scss`,
		tsd: tsdMainFile
	},
	artifact: {
		root: artifactRoot,
		assets: `${artifactRoot}/assets`,
		amd: `${artifactRoot}/amd`
	},
	test: {
		files: `${srcRoot}/**/*.spec.{ts,d.ts}`,
		setup: "tests/setup.ts",
		karmaConfig: "karma.conf.js",
		output: `${artifactRoot}/test/unit`,
		reporters: ["mocha"],
		browsers: ["Chrome"]
	},
	doc: "./doc",
	packageName: pkg.name,
	loadPluginsOptions: {
		pattern: [
			"gulp-*",
			"gulp.*",
			"run-sequence",
			"del",
			"conventional-changelog",
			"merge2",
			"dts-generator",
			"karma",
			"path",
			"stylelint",
			"postcss-*"
		]
	}
};