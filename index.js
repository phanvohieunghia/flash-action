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
const s = require('./utils/script') // scirpt
const { run, checkI, runP, runPS, wrapH, checkExceptionCommand, checkIL } = require('./utils/common')

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
				checkI(c.cam) && run(`${s.app.chrome} ${s.url.cambridge}`)
				checkI(c.fi) && run(`${s.app.chrome} ${s.url.figma}`)
				checkI(c.gemi) && run(`${s.app.chrome} ${wrapH(s.url.geminisoft, false)}`)
				checkI(c.gpt) && run(`${s.app.chrome} ${s.url.chatGPT}`)
				checkI(c.image) && run(`${s.app.chrome} ${s.url.google_image}`)
				checkI(c.keep) && run(`${s.app.chrome} ${s.url.google_keep}`)
				checkI(c.map) && run(`${s.app.chrome} ${s.url.google_map}`)
				checkI(c.me) && run(`${s.app.chrome} ${s.url.messenger}`)
				checkI(c.mi) && run(`${s.app.chrome} ${s.url.miro}`)
				checkI(c.no) && run(`${s.app.chrome} ${s.url.notion}`)
				checkI(c.ox) && run(`${s.app.chrome} ${s.url.oxford}`)
				checkI(c.tr) && run(`${s.app.chrome} ${s.url.google_translate}`)
				checkI(c.y) && run(`${s.app.chrome} ${s.url.youtube}`)
				checkI(c.yg) && run(`${s.app.chrome} ${s.url.youglish}`)
				checkI(c.z) && run(`${s.app.chrome} ${s.url.zalo}`)
				checkI(c.z) && run(`${s.app.chrome} ${s.url.zalo}`)
				checkI(c.github) && run(`${s.app.chrome} ${s.url.github}`)
				checkIL((stack) => {
					stack.forEach((port) => {
						run(`${s.app.chrome} http://localhost:${port}`)
					})
				})
			}
			// url with a window
			else if (window) {
				checkI(c.cam) && runP(s.url.cambridge)
				checkI(c.fi) && run(s.url.figma)
				checkI(c.gemi) && runP(s.url.geminisoft, false)
				checkI(c.gpt) && runP(s.url.chatGPT)
				checkI(c.image) && runP(s.url.google_image)
				checkI(c.keep) && runP(s.url.google_keep)
				checkI(c.map) && runP(s.url.google_map)
				checkI(c.me) && run(s.url.messenger)
				checkI(c.mi) && runP(s.url.miro)
				checkI(c.no) && runP(s.url.notion)
				checkI(c.ox) && runP(s.url.oxford)
				checkI(c.tr) && runP(s.url.google_translate)
				checkI(c.y) && runP(s.url.youtube)
				checkI(c.yg) && runP(s.url.youglish)
				checkI(c.z) && runP(s.url.zalo)
				checkI(c.github) && runP(s.url.github)
			}
		} else {
			// App
			checkI(c.code) && run(s.app.vscode)
			checkI(c.di) && run(s.app.discord)
			checkI(c.fi) && run(s.app.figma)
			checkI(c.no) && run(s.app.notion)
			checkI(c.obs) && run(`start /d ${s.app.obs} "" obs64.exe`)
			checkI(c.sh) && run(s.app.shareX)
			checkI(c.sl) && run(s.app.slack)
			checkI(c.tv) && run(s.app.teamViewer)
			checkI(c.z) && run(s.app.zalo)
			if (checkI(c.shutdown)) {
				runPS(s.shutdown)
			}
			if (checkI(c.restart)) {
				runPS(s.restart)
			}
		}

		// TODO: make search function
		// TODO: check if exception
		// TODO: add github website
	}
})()
