const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const CleanCSS = require("clean-css");

module.exports = cfg => {

	cfg.addPassthroughCopy("assets");
	cfg.addPlugin(eleventyNavigationPlugin);
	cfg.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

	return {
		dir: {
			input: "src"
		}
	}

};


