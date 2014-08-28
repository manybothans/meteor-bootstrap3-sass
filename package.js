Package.describe({
	summary: "Bootstrap 3 with Sass support"
});

Package.onUse(function (api) {

    api.versionsFrom('0.9.0');
    
	api.use(["jquery", "fourseven:scss"]);

	api.addFiles([
		"assets/javascripts/bootstrap/affix.js",
		"assets/javascripts/bootstrap/alert.js",
		"assets/javascripts/bootstrap/button.js",
		"assets/javascripts/bootstrap/carousel.js",
		"assets/javascripts/bootstrap/collapse.js",
		"assets/javascripts/bootstrap/dropdown.js",
		"assets/javascripts/bootstrap/tab.js",
		"assets/javascripts/bootstrap/transition.js",
		"assets/javascripts/bootstrap/scrollspy.js",
		"assets/javascripts/bootstrap/modal.js",
		"assets/javascripts/bootstrap/tooltip.js",
		"assets/javascripts/bootstrap/popover.js"
	], "client");

	api.addFiles([
		"assets/fonts/bootstrap/glyphicons-halflings-regular.eot",
		"assets/fonts/bootstrap/glyphicons-halflings-regular.svg",
		"assets/fonts/bootstrap/glyphicons-halflings-regular.ttf",
		"assets/fonts/bootstrap/glyphicons-halflings-regular.woff"
	], "client");
});

Package.onTest(function(api) {
	api.use("bootstrap3-sass");
	api.use(["fourseven:scss", "tinytest", "test-helpers"]);

	api.addFiles([
			"tests.scss",
			"tests.js"
		], "client");
});
