const cli = require('./cli')
const input = cli.input
const s = require('./script')
const cmd = require('node-cmd')
const PowerShell = require('powershell')
const c = require('./command.json')

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
	run(`${s.app.chrome} --app=${wrapH(url, isS)}`)
}

// check command have in input list
function checkI(command) {
	return input.includes(command)
}

function wrapH(url, isS = true) {
	const s = isS ? 's' : ''
	return `http${s}://${url}`
}

function runPS(script) {
	const ps = new PowerShell(script)
	ps.on('error', (err) => {
		console.info.call(console, `\x1b[31m${err}\x1b[0m`)
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

function checkExceptionCommand() {
	if (input.every((item) => c[item] === undefined)) {
		console.log(`Unknown command: "${input[0]}"
		
To see a list of supported n command, run:
  n help`)
		return false
	}
	return true
}

module.exports = { run, runP, runPS, checkI, wrapH, checkExceptionCommand }
