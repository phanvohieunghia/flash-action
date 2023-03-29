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
const { run, checkI, runP, runPS, wrapH } = require('./utils/common')

const input = cli.input
const flags = cli.flags
const { clear, debug, window } = flags

;(async () => {
	!input.length && init({ clear })
	checkI(c.help) && cli.showHelp(0)
	debug && log(flags)
	if (checkI(c.c)) {
		// url
		if (!window) {
			checkI(c.cam) && run(`${script.chrome} ${script.url.cambridge}`)
			checkI(c.fi) && run(`${script.chrome} ${script.url.figma}`)
			checkI(c.gemi) &&
				run(`${script.chrome} ${wrapH(script.url.geminisoft, false)}`)
			checkI(c.gpt) && run(`${script.chrome} ${script.url.chatGPT}`)
			checkI(c.image) && run(`${script.chrome} ${script.url.google_image}`)
			checkI(c.keep) && run(`${script.chrome} ${script.url.google_keep}`)
			checkI(c.map) && run(`${script.chrome} ${script.url.google_map}`)
			checkI(c.me) && run(`${script.chrome} ${script.url.messenger}`)
			checkI(c.mi) && run(`${script.chrome} ${script.url.miro}`)
			checkI(c.no) && run(`${script.chrome} ${script.url.notion}`)
			checkI(c.ox) && run(`${script.chrome} ${script.url.oxford}`)
			checkI(c.tr) && run(`${script.chrome} ${script.url.google_translate}`)
			checkI(c.y) && run(`${script.chrome} ${script.url.youtube}`)
			checkI(c.yg) && run(`${script.chrome} ${script.url.youglish}`)
			checkI(c.z) && run(`${script.chrome} ${script.url.zalo}`)
		}
		// url with a window
		if (window) {
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
		}
	} else {
		// App
		checkI(c.code) && run(script.vscode)
		checkI(c.di) && run(script.discord)
		checkI(c.fi) && run(script.figma)
		checkI(c.no) && run(script.notion)
		checkI(c.obs) && run(`start /d ${script.obs} "" obs64.exe`)
		checkI(c.sh) && run(script.shareX)
		checkI(c.sl) && run(script.slack)
		checkI(c.tv) && run(script.teamViewer)
		checkI(c.z) && run(script.zalo)
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
})()
