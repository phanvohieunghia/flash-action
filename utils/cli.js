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
	zip: {
		type: `boolean`,
		default: false,
		desc: `Compress folder with ZIP file format`,
	},
}

const commands = {
	help: { desc: `Print help info` },
	shutdown: { desc: `Close all process and shutdown immediately` },
	restart: { desc: `Close all process and restart immediately` },
	web: { desc: `Open Website` },
	app: { desc: `Open Application` },
}

const footer = `List of website supported:
  cambridge(cam), figma(fi), github, chatGPT(gpt),
  google image(image), keep(google keep), map(google map), 
  messenger(me), miro, notion(no), oxford dictionary(ox), 
  google translate(tr), youtube(y), youglish(yg), zalo(z)
List of website supported:
  figma(fi), miro, notion(no), obs, sharex, slack(sl),
  teamviewer(teamview), zalo(z)`

const examples = [
	{
		command: `shutdown`,
	},
	{
		command: `restart`,
	},
	{
		command: `app "string of commands"`,
	},
	{
		command: `web "string of commands"`,
	},
	{
		command: `web "string of commands"`,
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
