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
const { handleValidation } = require('./utils/common')

const input = cli.input
const flags = cli.flags
const { clear, debug } = flags

;(async () => {
	debug && log(flags)
	// Check any input
	if (!input.length) {
		init({ clear })
		return
	}

	handleValidation(input)

	// TODO: make search function
})()
