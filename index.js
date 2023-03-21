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

const input = cli.input
const flags = cli.flags
const { clear, debug } = flags

;(async () => {
	!input.length && init({ clear })

	input.includes(`help`) && cli.showHelp(0)
	input.includes(`n`) && 'cd ..'
	var shell = new window.ActiveXObject('WScript.shell')
	console.log(shell)
	// shell.run("notepad.exe", 1, True);

	debug && log(flags)
})()
