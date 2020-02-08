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
					{ text: "T-4. The Illusions of the Ego", link: "/text/4-the-illusions-of-the-ego/" },
					{ text: "T-5. Healing and Wholeness", link: "/text/5-healing-and-wholeness/" }
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
        text: "Other",
        link: "/other/",
				items: [
					{text: "Other Stuff", link: "/other/"},
					{text: "Bibliography", link: "/other/bibliography"},
					{text: "Random Section", link: "/other/random"}
				]
      }
    ],
 		//displayAllHeaders: true,
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
						title: "2. The Separation and the Atonement",
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
					},
					{
						title: "3. The Innocent Perception",
						children: [
							"/text/3-the-innocent-perception/i-atonement-without-sacrifice",
							"/text/3-the-innocent-perception/ii-miracles-as-true-perception",
							"/text/3-the-innocent-perception/iii-perception-versus-knowledge",
							"/text/3-the-innocent-perception/iv-error-and-the-ego",
							"/text/3-the-innocent-perception/v-beyond-perception",
							"/text/3-the-innocent-perception/vi-judgement-and-the-authority-problem",
							"/text/3-the-innocent-perception/vii-creating-versus-the-self-image"
						]
					},
					{
						title: "4. The Illusions of the Ego",
						children: [
							"/text/4-the-illusions-of-the-ego/introduction",
							"/text/4-the-illusions-of-the-ego/i-right-teaching-and-right-learning",
							"/text/4-the-illusions-of-the-ego/ii-the-ego-and-false-autonomy",
							"/text/4-the-illusions-of-the-ego/iii-love-without-conflict",
							"/text/4-the-illusions-of-the-ego/iv-this-need-not-be",
							"/text/4-the-illusions-of-the-ego/v-the-ego-body-illusion",
							"/text/4-the-illusions-of-the-ego/vi-the-rewards-of-god",
							"/text/4-the-illusions-of-the-ego/vii-creation-and-communication"
						]
					},
					{
						title: "5. Healing and Wholeness",
						children: [
							"/text/5-healing-and-wholeness/introduction",
							"/text/5-healing-and-wholeness/i-the-invitation-to-the-holy-spirit",
							"/text/5-healing-and-wholeness/ii-the-voice-for-god",
							"/text/5-healing-and-wholeness/iii-the-guide-to-salvation"
						]
					}
				]
			},
			{
				title: "Other Stuff",
				children: [ 
					"/other/bibliography",
					"/other/random",
					"/other/prayers-from-the-course",
					"/other/course-thought-system",
					"/other/course-teacher-comparison"
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