#!/usr/bin/env node

/**
 * flash-action
 * Support yourself to increase performance
 *
 * @author Phan Vo Hieu Nghia <https://phanvohieunghia.vercel.app/>
 */

const init = require('./utils/init')
const cli = require('./utils/cli')
const log = require('./utils/log')

const path = require('./utils/path')
const cmd = require('node-cmd')

const input = cli.input
const flags = cli.flags
const { clear, debug, window } = flags
function run(command) {
	cmd.run(command, function (err, data, stderr) {
		err && console.info.call(console, `\x1b[31m${err}\x1b[0m`)
	})
}
function runPopup(link, isS = true) {
	const s = isS ? 's' : ''
	run(`${path.chrome} --app=http${s}://${link}/`)
}
;(async () => {
	!input.length && init({ clear })
	input.includes(`help`) && cli.showHelp(0)
	if (!window) {
		input.includes(`cam`) && run(`${path.chrome} ${path.web.cambridge}`)
		input.includes(`gemi`) && run(`${path.web.geminisoft} `)
		input.includes(`gpt`) && run(`${path.chrome} ${path.web.chatGPT}`)
		input.includes(`image`) && run(`${path.chrome} ${path.web.google_image}`)
		input.includes(`keep`) && run(`${path.chrome} ${path.keep.google_keep}`)
		input.includes(`map`) && run(`${path.chrome} ${path.web.google_map}`)
		input.includes(`mi`) && run(`start ${path.chrome} ${path.web.miro}`)
		input.includes(`ox`) && run(`start ${path.chrome} ${path.web.oxford}`)
		input.includes(`tr`) && run(`${path.chrome} ${path.web.google_translate}`)
		input.includes(`y`) && run(`start ${path.chrome} ${path.web.youtube}`)
		input.includes(`yg`) && run(`start ${path.chrome} ${path.web.youglish}`)
	} else if (window) {
		input.includes(`cam`) && runPopup(path.web.cambridge)
		input.includes(`gemi`) && runPopup(path.web.geminisoft, false)
		input.includes(`gpt`) && runPopup(path.web.chatGPT)
		input.includes(`image`) && runPopup(path.web.google_image)
		input.includes(`keep`) && runPopup(path.keep.google_keep)
		input.includes(`map`) && runPopup(path.web.google_map)
		input.includes(`mi`) && runPopup(path.web.miro)
		input.includes(`ox`) && runPopup(path.web.oxford)
		input.includes(`tr`) && runPopup(path.web.google_translate)
		input.includes(`y`) && runPopup(path.web.youtube)
		input.includes(`yg`) && runPopup(path.web.youglish)
	}
	input.includes(`c`) && run(path.chrome)
	input.includes(`code`) && run(path.vscode)
	input.includes(`di`) && run(`start ${path.discord}`)
	input.includes(`fi`) && run(`start ${path.figma}`)
	input.includes(`no`) && run(`start ${path.notion}`)
	input.includes(`sh`) && run(`start ${path.shareX}`)
	input.includes(`sl`) && run(`start ${path.slack}`)
	input.includes(`tv`) && run(`start ${path.teamViewer}`)
	input.includes(`z`) && run(`start ${path.zalo}`)

	// TODO: make full-screen for website window --start-fullscreen
	// TODO: make search function
	// TODO: check if exception
	// TODO: make shutdown function

	debug && log(flags)
})()
