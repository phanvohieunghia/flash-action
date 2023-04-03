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

// Run website
function runW(url, isWindow, isS = true) {
	let convertURL = isS ? `https://${url}` : `http://${url}`
	convertURL = isWindow ? ' --app=' + convertURL : convertURL
	run(`${c.app.chrome} ${convertURL}`)
}
// Run powershell
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

function checkCommand(command) {
	return !!c[command]
}

function handleValidation(stack) {
	while (stack.length) {
		const command = stack.shift()
		checkCommand(command) && performCommandType(command, stack)
	}
}

function performCommandType(command, stack) {
	const options = stack.shift().trim().split(/[ ]+/g)
	switch (command) {
		case 'app':
			handleAppCommand(options)
			break
		case 'web':
			handleWebCommand(options)
			break
		case 'shutdown':
			runPS(c.shutdown)
			break
		case 'restart':
			runPS(c.restart)
			break
		case 'help':
			cli.showHelp(0)
			break
		default:
			checkExceptionCommand()
	}
}

function handleAppCommand(options) {
	options.forEach((option) => {
		if (!!c.app[option]) run(c.app[option])
		else console.log(`Unknown command: "${option}"`)
	})
}

function handleWebCommand(options) {
	options.forEach((option) => {
		if (!!c.web[option]) {
			if (option === 'gemi') runW(c.web[option], window, true)
			else runW(c.web[option], window)
		} else if (option.match(/:[\d]+/)) runW('localhost' + option)
		else console.log(`Unknown command: "${option}"`)
	})
}

module.exports = { handleValidation }
