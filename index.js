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
const PowerShell = require('powershell')

const input = cli.input
const flags = cli.flags
const { clear, debug } = flags

function run(script) {
	const ps = new PowerShell(script)
	ps.on('error', (err) => {
		console.error(err)
	})
	// Stdout
	ps.on('output', (data) => {
		console.log(data)
	})
	// Stderr
	ps.on('error-output', (data) => {
		console.error(data)
	})
	// End
	ps.on('end', (code) => {
		// Do Something on end
	})
}

;(async () => {
	!input.length && init({ clear })

	input.includes(`help`) && cli.showHelp(0)

	input.includes(`c`) && run(`start ${path.chrome}`)
	input.includes(`cam`) && run(`start ${path.chrome} ${path.cambridge}`)
	input.includes(`code`) && run(path.vscode)
	input.includes(`di`) && run(`start ${path.discord}`)
	input.includes(`fi`) && run(`start ${path.figma}`)
	input.includes(`image`) && run(`start ${path.chrome} ${path.google_image}`)
	input.includes(`keep`) && run(`start ${path.chrome} ${path.google_keep}`)
	input.includes(`map`) && run(`start ${path.chrome} ${path.google_map}`)
	input.includes(`mi`) && run(`start ${path.chrome} ${path.miro}`)
	input.includes(`ox`) && run(`start ${path.chrome} ${path.oxford}`)
	input.includes(`sh`) && run(`start ${path.shareX}`)
	input.includes(`sl`) && run(`start ${path.slack}`)
	input.includes(`tr`) && run(`start ${path.chrome} ${path.google_translate}`)
	input.includes(`tv`) && run(`start ${path.teamViewer}`)
	input.includes(`y`) && run(`start ${path.chrome} ${path.youtube}`)
	input.includes(`yg`) && run(`start ${path.chrome} ${path.youglish}`)
	input.includes(`z`) && run(`start ${path.zalo}`)
	//FIXME: add notion short action

	debug && log(flags)
})()
