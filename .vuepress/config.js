module.exports = {
	title: "ACIM Golden Chain",
	lang: "en-au",
	description: "A Course in Miracles, adjusting pronouns to help students understand the text. Features quotes from well-known Course teachers.",
	head: [
  	["link", { rel: "icon", href: "/favicon.ico" }]
  ],
	serviceWorker: true,
	themeConfig: {
		serviceWorker: {
			updatePopup: true
		},
    nav: [
      {
        text: "Text",
				link: "/text/",
				items: [
					{ text: "Text", link: "/text/" },
					{ text: "T-in. Introduction", link: "/text/introduction/" },
					{ text: "T-1. The Meaning of Miracles",  link: "/text/1-the-meaning-of-miracles/"}, 
					{ text: "T-2. The Separation and the Atonement", link: "/text/2-the-separation-and-the-atonement/" },
					{ text: "T-3. The Innocent Perception", link: "/text/3-the-innocent-perception/" },
					{ text: "T-4. The Illusions of the Ego", link: "/text/4-the-illusions-of-the-ego/" }
				]
			},
      {
        text: "Workbook",
        link: "/workbook/",
      },
      {
        text: "Manual",
        link: '/manual/'
      },
      {
        text: 'More',
        link: '/other/'
      }
    ],
 		//displayAllHeaders: true,
		//sidebar: "auto",
		sidebar: [
			{
				title: "Text",
				children: [
					{
						title: "Introduction",
						children: [
							"/text/introduction/"
						]
					},
					{
						title: "1. The Meaning of Miracles",
						children: [
							"/text/1-the-meaning-of-miracles/i-principles-of-miracles",
							"/text/1-the-meaning-of-miracles/ii-revelation-time-and-miracles",
							"/text/1-the-meaning-of-miracles/iii-atonement-and-miracles",
							"/text/1-the-meaning-of-miracles/iv-the-escape-from-darkness",
							"/text/1-the-meaning-of-miracles/v-wholeness-and-spirit",
							"/text/1-the-meaning-of-miracles/vi-the-illusion-of-needs",
							"/text/1-the-meaning-of-miracles/vii-distortions-of-miracle-impulses"
						] 
					},
					{
						title: "2 The Separation and the Atonement",
						children: [
							"/text/2-the-separation-and-the-atonement/i-the-origins-of-separation",
							"/text/2-the-separation-and-the-atonement/ii-the-atonement-as-defence",
							"/text/2-the-separation-and-the-atonement/iii-the-altar-of-god",
							"/text/2-the-separation-and-the-atonement/iv-healing-as-release-from-fear",
							"/text/2-the-separation-and-the-atonement/v-the-function-of-the-miracle-worker",
							"/text/2-the-separation-and-the-atonement/vi-fear-and-conflict",
							"/text/2-the-separation-and-the-atonement/vii-cause-and-effect",
							"/text/2-the-separation-and-the-atonement/viii-the-meaning-of-the-last-judgement"
						]
					}
				]
			}
		],
		repo: "w-david-porter/acim",
		repoLabel: "Help",
    editLinks: true,
    editLinkText: "Help us improve this page",
		evergreen: true
  }
}