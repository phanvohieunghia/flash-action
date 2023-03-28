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
const c = require('./utils/command.json')
const path = require('./utils/path')
const { run, checkI, runP, runPS, wrapH } = require('./utils/common')

const input = cli.input
const flags = cli.flags
const { clear, debug, window } = flags

;(async () => {
	!input.length && init({ clear })
	checkI(c.help) && cli.showHelp(0)
	debug && log(flags)
	if (checkI(c.c)) {
		// Web
		if (!window) {
			checkI(c.cam) && run(`${path.chrome} ${path.web.cambridge}`)
			checkI(c.fi) && run(`${path.chrome} ${path.web.figma}`)
			checkI(c.gemi) &&
				run(`${path.chrome} ${wrapH(path.web.geminisoft, false)}`)
			checkI(c.gpt) && run(`${path.chrome} ${path.web.chatGPT}`)
			checkI(c.image) && run(`${path.chrome} ${path.web.google_image}`)
			checkI(c.keep) && run(`${path.chrome} ${path.web.google_keep}`)
			checkI(c.map) && run(`${path.chrome} ${path.web.google_map}`)
			checkI(c.me) && run(`${path.chrome} ${path.web.messenger}`)
			checkI(c.mi) && run(`${path.chrome} ${path.web.miro}`)
			checkI(c.no) && run(`${path.chrome} ${path.web.notion}`)
			checkI(c.ox) && run(`${path.chrome} ${path.web.oxford}`)
			checkI(c.tr) && run(`${path.chrome} ${path.web.google_translate}`)
			checkI(c.y) && run(`${path.chrome} ${path.web.youtube}`)
			checkI(c.yg) && run(`${path.chrome} ${path.web.youglish}`)
			checkI(c.z) && run(`${path.chrome} ${path.web.zalo}`)
		}
		// Web with a window
		if (window) {
			checkI(c.cam) && runP(path.web.cambridge)
			checkI(c.fi) && run(path.web.figma)
			checkI(c.gemi) && runP(path.web.geminisoft, false)
			checkI(c.gpt) && runP(path.web.chatGPT)
			checkI(c.image) && runP(path.web.google_image)
			checkI(c.keep) && runP(path.web.google_keep)
			checkI(c.map) && runP(path.web.google_map)
			checkI(c.me) && run(path.web.messenger)
			checkI(c.mi) && runP(path.web.miro)
			checkI(c.no) && runP(path.web.notion)
			checkI(c.ox) && runP(path.web.oxford)
			checkI(c.tr) && runP(path.web.google_translate)
			checkI(c.y) && runP(path.web.youtube)
			checkI(c.yg) && runP(path.web.youglish)
			checkI(c.z) && runP(path.web.zalo)
		}
	} else {
		// App
		checkI(c.code) && run(path.vscode)
		checkI(c.di) && run(path.discord)
		checkI(c.fi) && run(path.figma)
		checkI(c.no) && run(path.notion)
		checkI(c.sh) && run(path.shareX)
		checkI(c.sl) && run(path.slack)
		checkI(c.tv) && run(path.teamViewer)
		checkI(c.z) && run(path.zalo)
		if (checkI(c.shutdown)) {
			runPS(c.shutdown)
		}
	}

	// TODO: mak-screen for website window --starscreen
	// TODO: make search function
	// TODO: check if exception
	// TODO: make shutdown function
})()
