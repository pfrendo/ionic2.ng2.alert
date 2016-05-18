System.config({
	baseURL: "/",
	defaultJSExtensions: true,
	transpiler: "none",
	paths: {
		"*": "_artifact/*",
		"bower/*": "bower_components/*"
	},

	meta: {
		"angular": {
			format: "global",
			exports: "angular"
		}
	},

	map: {
		"obg.ng.ui.skeleton": "amd/index",
		"obg.ng.ui.skeleton.tmpls": "amd/assets/obg.ng.ui.skeleton.tmpls",
		"angular": "bower/angular/angular",
	}
});