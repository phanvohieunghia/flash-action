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
const script = require('./utils/script')
const {
	run,
	checkI,
	runP,
	runPS,
	wrapH,
	checkExceptionCommand,
} = require('./utils/common')

let input = cli.input
const flags = cli.flags
const { clear, debug, window } = flags

;(async () => {
	!input.length && init({ clear })
	debug && log(flags)
	if (checkExceptionCommand()) {
		checkI(c.help) && cli.showHelp(0)
		if (checkI(c.c)) {
			// url
			if (!window) {
				checkI(c.cam) && run(`${script.app.chrome} ${script.url.cambridge}`)
				checkI(c.fi) && run(`${script.app.chrome} ${script.url.figma}`)
				checkI(c.gemi) &&
					run(`${script.app.chrome} ${wrapH(script.url.geminisoft, false)}`)
				checkI(c.gpt) && run(`${script.app.chrome} ${script.url.chatGPT}`)
				checkI(c.image) &&
					run(`${script.app.chrome} ${script.url.google_image}`)
				checkI(c.keep) && run(`${script.app.chrome} ${script.url.google_keep}`)
				checkI(c.map) && run(`${script.app.chrome} ${script.url.google_map}`)
				checkI(c.me) && run(`${script.app.chrome} ${script.url.messenger}`)
				checkI(c.mi) && run(`${script.app.chrome} ${script.url.miro}`)
				checkI(c.no) && run(`${script.app.chrome} ${script.url.notion}`)
				checkI(c.ox) && run(`${script.app.chrome} ${script.url.oxford}`)
				checkI(c.tr) &&
					run(`${script.app.chrome} ${script.url.google_translate}`)
				checkI(c.y) && run(`${script.app.chrome} ${script.url.youtube}`)
				checkI(c.yg) && run(`${script.app.chrome} ${script.url.youglish}`)
				checkI(c.z) && run(`${script.app.chrome} ${script.url.zalo}`)
				checkI(c.z) && run(`${script.app.chrome} ${script.url.zalo}`)
				checkI(c.github) && run(`${script.app.chrome} ${script.url.github}`)
			}
			// url with a window
			else if (window) {
				checkI(c.cam) && runP(script.url.cambridge)
				checkI(c.fi) && run(script.url.figma)
				checkI(c.gemi) && runP(script.url.geminisoft, false)
				checkI(c.gpt) && runP(script.url.chatGPT)
				checkI(c.image) && runP(script.url.google_image)
				checkI(c.keep) && runP(script.url.google_keep)
				checkI(c.map) && runP(script.url.google_map)
				checkI(c.me) && run(script.url.messenger)
				checkI(c.mi) && runP(script.url.miro)
				checkI(c.no) && runP(script.url.notion)
				checkI(c.ox) && runP(script.url.oxford)
				checkI(c.tr) && runP(script.url.google_translate)
				checkI(c.y) && runP(script.url.youtube)
				checkI(c.yg) && runP(script.url.youglish)
				checkI(c.z) && runP(script.url.zalo)
				checkI(c.github) && runP(script.url.github)
			}
		} else {
			// App
			checkI(c.code) && run(script.app.vscode)
			checkI(c.di) && run(script.app.discord)
			checkI(c.fi) && run(script.app.figma)
			checkI(c.no) && run(script.app.notion)
			checkI(c.obs) && run(`start /d ${script.app.obs} "" obs64.exe`)
			checkI(c.sh) && run(script.app.shareX)
			checkI(c.sl) && run(script.app.slack)
			checkI(c.tv) && run(script.app.teamViewer)
			checkI(c.z) && run(script.app.zalo)
			if (checkI(c.shutdown)) {
				runPS(script.shutdown)
			}
			if (checkI(c.restart)) {
				runPS(script.restart)
			}
		}

		// TODO: make search function
		// TODO: check if exception
		// TODO: add github website
	}
})()
