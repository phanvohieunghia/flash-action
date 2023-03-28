const cli = require('./cli')
const input = cli.input
const path = require('./path')
const cmd = require('node-cmd')

// run command by Command Prompt
function run(command) {
	cmd.run(command, function (err, data, stderr) {
		if (err) {
			console.info.call(console, `\x1b[31m${err}\x1b[0m`)
		}
	})
}

// Run website as a window
function runP(url, isS = true) {
	run(`${path.chrome} --app=${wrapH(url, isS)}`)
}

// check command have in input list
function checkI(command) {
	return input.includes(command)
}

function wrapH(url, isS = true) {
	const s = isS ? 's' : ''
	return `http${s}://${url}`
}

module.exports = { run, runP, checkI, wrapH }
