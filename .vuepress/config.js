module.exports = {
	title: "ACIM Golden Chain",
	lang: "en-au",
	description: "A Course in Miracles, adjusting pronouns to help students understand the text. Features quotes from well-known Course teachers.",
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }]
	],
	serviceWorker: true,

	markdown: {
		extendMarkdown: md => {
			md.use(require("markdown-it-sup"))
		}
	},

	themeConfig: {
		logo: "/logo.jpg",
		smoothScroll: true,

		nav: [
			{
				text: "Text",
				ariaLabel: "Text Menu",
				items: [
					{ text: "Introduction", link: "/text/" },
					{ text: "1. The Meaning of Miracles", link: "/text/1-the-meaning-of-miracles/" },
					{ text: "2. The Separation and the Atonement", link: "/text/2-the-separation-and-the-atonement/" },
					{ text: "3. The Innocent Perception", link: "/text/3-the-innocent-perception/" },
					{ text: "4. The Illusions of the Ego", link: "/text/4-the-illusions-of-the-ego/" },
					{ text: "5. Healing and Wholeness", link: "/text/5-healing-and-wholeness/" }
				]
			},
			{
				text: "Workbook",
				ariaLabel: "Workbook Menu",
				items: [
					{ text: "Introduction", link: "/workbook/" },
					{ text: "1. Nothing I see … means anything", link: "/workbook/part-1/1-nothing-i-see-means-anything/" }
				]
			},
			{
				text: "More",
				ariaLabel: "More Items Menu",
				items: [
					{ text: "Bibliography", link: "/more/bibliography/" },
					{ text: "Course Teacher Comparison", link: "/more/course-teacher-comparison/" },
					{ text: "Course Thought System", link: "/more/course-thought-system/" },
					{ text: "Prayers from the Course", link: "/more/prayers-from-the-course/" },
					{ text: "Random Section", link: "/more/random-section/" },
				]
			}
		],
		sidebar: [
			{
				title: "Text",
				path: "/text/",
				children: [
					["/text/", "Introduction"],
					"/text/1-the-meaning-of-miracles/"
				],
			},
			{
				title: "Workbook for Students",
				path: "/workbook/",
				children: [
					["/workbook/", "Introduction"],
					["/workbook/part-1/1-nothing-i-see-means-anything/", "1. Nothing I see … means anything"]
				],
			},
			{
				title: "More",
				path: "/more/",
				children: [
					"/more/bibliography/",
					"/more/random-section/",
					"/more/prayers-from-the-course/",
					"/more/course-thought-system/",
					"/more/course-teacher-comparison/"
				]
			}
		],
		repo: "wdporter/a-course-in-miracles",
		repoLabel: "Help",
		editLinks: true,
		editLinkText: "Help us improve this page",
		evergreen: true
	},

	plugins: ['@vuepress/back-to-top', 'vuepress-plugin-element-tabs']
}