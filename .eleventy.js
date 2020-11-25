const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const CleanCSS = require("clean-css");

module.exports = function (cfg) {

	let showCommentary = false

	cfg.addPassthroughCopy("assets");
	cfg.addPlugin(eleventyNavigationPlugin);
	cfg.addFilter("cssmin", function (code) {
		return new CleanCSS({}).minify(code).styles;
	});

	let markdownIt = require("markdown-it")({html: true});
	let markdownItContainer = require("markdown-it-container");
  /*let options = {
    html: true
  };*/
	let markdownLib = markdownIt.use(markdownItContainer, "details",
		{
			validate: function (params) {
				return params.trim().match(/^details\s+(.*)$/);
			},

			render: function (tokens, idx) {
				var m = tokens[idx].info.trim().match(/^details\s+(.*)$/);

				if (tokens[idx].nesting === 1) {
					// opening tag
					return '<details><summary>' + markdownIt.utils.escapeHtml(m[1]) + '</summary>\n';

				} else {
					// closing tag
					return '</details>\n';
				}
			}
		}

	);

	cfg.setLibrary("md", markdownLib);

};


