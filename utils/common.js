const cli = require('./cli')
const cmd = require('node-cmd')
const PowerShell = require('powershell')
const c = require('./command.json')

const flags = cli.flags

// run command by Command Prompt
function run(command) {
	cmd.run(command, function (err, data, stderr) {
		if (err) logError(err)
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
		logError(err)
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

	function logError(script) {
		console.info.call(console, `\x1b[31m${script}\x1b[0m`)
	}
}

function checkExceptionCommand(command) {
	if (c[command] === undefined) {
		console.log(`Unknown option: "${command}"
		
To see a list of supported n option, run:
  n help`)
	}
}

function handleValidation(stack) {
	while (stack.length) {
		const command = stack.shift()
		makeCommand(command, stack)
	}
}

function checkOptions(command, options) {
	switch (command) {
		case 'help':
		case 'shutdown':
		case 'restart':
			return true
	}
	if (!options) {
		logError('You need string input with each command separated by a space')
		return false
	} else return true
}

function makeCommand(command, stack) {
	const options = stack.shift()?.trim().split(/[ ]+/g)
	if (!checkOptions(command, options)) return

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
			checkExceptionCommand(command)
	}
}

function handleAppCommand(options) {
	options.forEach((option) => {
		if (!!c.app[option]) run(c.app[option])
		else logError(`Unknown command: "${option}"`)
	})
}

function handleWebCommand(options) {
	options.forEach((option) => {
		if (!!c.web[option]) {
			if (option === 'gemi') runW(c.web[option], flags.window, false)
			else runW(c.web[option], flags.window)
		} else if (option.match(/:[\d]+/)) runW('localhost' + option)
		else logError(`Unknown command: "${option}"`)
	})
}

module.exports = { handleValidation }
