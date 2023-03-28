const meow = require('meow')
const meowHelp = require('cli-meow-help')

const flags = {
	clear: {
		type: `boolean`,
		default: false,
		alias: `c`,
		desc: `Clear the console`,
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`,
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`,
	},
	version: {
		type: `boolean`,
		default: false,
		alias: `v`,
		desc: `Print CLI version`,
	},
	window: {
		type: `boolean`,
		default: false,
		alias: `w`,
		desc: `Open website as a window`,
	},
}

const commands = {
	cam: { desc: `Open chrome with Cambridge Dictionary website` },
	fi: { desc: `Open Figma Application` },
	gpt: { desc: `Open chrome with chatGPT website` },
	help: { desc: `Print help info` },
	image: { desc: `Open chrome with Google Image website` },
	keep: { desc: `Open chrome with Google Keep website` },
	map: { desc: `Open chrome with Google Map website` },
	mi: { desc: `Open chrome with Miro website` },
	no: { desc: `Open Notion Application` },
	ox: { desc: `Open chrome with Oxford Dictionary website` },
	sh: { desc: `Open ShareX Application` },
	sl: { desc: `Open Slack Application` },
	tr: { desc: `Open chrome with Google Translate website` },
	tv: { desc: `Open Teamviewer Application` },
	y: { desc: `Open chrome with Youtube website` },
	yg: { desc: `Open chrome with Youglish website` },
	z: { desc: `Open Zalo Application` },
}

const helpText = meowHelp({
	name: `n`,
	flags,
	commands,
})

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags,
}

module.exports = meow(helpText, options)
