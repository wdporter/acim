module.exports = {
	title: "ACIM Golden Chain",
	description: "A Course in Miracles, adjusting pronouns to help students understand the text. Features quotes from well-known Course teachers.",
	themeConfig: {
    nav: [
      {
        text: "Text",
				link: "/text/",
				items: [
					{ text: "T-in. Introduction", link: "/text/in/" },
					{ text: "T-1. The Meaning of Miracles", link: "/text/1/" 
					/*, items: [{text: "T-1.I Principles of Miracles", link: "/text/1/i"}]*/
					},
					{ text: "T-2. The Separation and the Atonement", link: "/text/2/" },
					{ text: "T-3. The Innocent Perception", link: "/text/3/" },
					{ text: "T-4. The Illusions of the Ego", link: "/text/4/" }
				]
			},
      {
        text: 'Workbook',
        link: '/workbook/'
      },
      {
        text: 'Manual',
        link: '/manual/'
      },
      {
        text: 'More',
        link: '/other/'
      }
    ],
		sidebar: "auto",
		//https://vuepress.vuejs.org/default-theme-config/ 
		/*sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]*/
		repo: "w-david-porter/acim",
		repoLabel: "Help Us",
    editLinks: true,
    editLinkText: "Help us improve this page!"
  }
}