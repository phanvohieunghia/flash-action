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
	help: { desc: `Print help info` },
	code: { desc: `Open Visual Studio Code` },
	di: { desc: `Open Discord` },
	fi: { desc: `Open Figma` },
	no: { desc: `Open Notion` },
	sh: { desc: `Open ShareX` },
	sl: { desc: `Open Slack` },
	tv: { desc: `Open Teamviewer Application` },
	z: { desc: `Open Zalo Application` },
	c: {
		desc: `Open Chrome with some website such as
cambridge(cam), geminisoft(gemi), figma(fi),
chatgpt(gpt), image, keep, map, mi(miro), 
oxford(ox), translate(tr), notion(no), youtube(y),
youglish(y), zalo(z)`,
	},
}

const footer = 'sflk'

const examples = [
	{
		command: `c <command>`,
	},
	{
		command: `c <command>`,
		flags: [`window`],
	},
]

const helpText = meowHelp({
	name: `n`,
	flags,
	commands,
	examples,
	footer,
})

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags,
}

module.exports = meow(helpText, options)
