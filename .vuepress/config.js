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
					{ text: "1. Nothing I see … means anything", link: "/workbook/part-1/1-nothing-i-see-means-anything/" },
					{ text: "2. I have given everything I see … all the meaning it has for me", link: "/workbook/part-1/2-i-have-given-everything-i-see-all-the-meaning-it-has-for-me/" },
					{ text: "3. I do not understand anything I see", link: "/workbook/part-1/3-i-do-not-understand-anything-i-see/" },
					{ text: "4. These thoughts do not mean anything", link: "/workbook/part-1/4-these-thoughts-do-not-mean-anything/"},
					{ text: "5. I am never upset for the reason I think", link: "/workbook/part-1/5-i-am-never-upset-for-the-reason-i-think/"},
					{ text: "6. I am upset because I see something that is not there", link: "/workbook/part-1/6-i-am-upset-because-i-see-something-that-is-not-there/"},
					{ text: "7. I see only the past", link: "/workbook/part-1/7-i-see-only-the-past/"},
					{ text: "8. My mind is preöccupied with past thoughts", link: "/workbook/part-1/8-my-mind-is-preoccupied-with-past-thoughts/"},
					{ text: "9. I see nothing as it is now", link: "/workbook/part-1/9-i-see-nothing-as-it-is-now/"}
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
					"/text/1-the-meaning-of-miracles/",
					"/text/2-the-separation-and-the-atonement/"
				],
			},
			{
				title: "Workbook for Students",
				path: "/workbook/",
				children: [
					["/workbook/", "Introduction"],
					["/workbook/part-1/1-nothing-i-see-means-anything/", "1. Nothing I see … means anything"],
					["/workbook/part-1/2-i-have-given-everything-i-see-all-the-meaning-it-has-for-me/", "2. I have given everything I see … all the meaning it has for me"],
					["/workbook/part-1/3-i-do-not-understand-anything-i-see/", "3. I do not understand anything I see"],
					["/workbook/part-1/4-these-thoughts-do-not-mean-anything/", "4. These thoughts do not mean anything"],
					["/workbook/part-1/5-i-am-never-upset-for-the-reason-i-think/", "5. I am never upset for the reason I think"],
					["/workbook/part-1/6-i-am-upset-because-i-see-something-that-is-not-there/", "6. I am upset because I see something that is not there"],
					[ "/workbook/part-1/7-i-see-only-the-past/", "7. I see only the past"],
					[ "/workbook/part-1/8-my-mind-is-preoccupied-with-past-thoughts/", "8. My mind is preöccupied with past thoughts"]
				],
			},
			{
				title: "More",
				path: "/more/",
				children: [
					"/more/bibliography/",
					"/more/course-teacher-comparison/",
					"/more/random-section/",
					"/more/prayers-from-the-course/",
					"/more/course-thought-system/"
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