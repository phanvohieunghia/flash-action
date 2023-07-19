const cli = require('./cli')
const cmd = require('node-cmd')
const PowerShell = require('powershell')
const c = require('./command.json')
const fs = require('fs')
const archiver = require('archiver')

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
	run(`${c.app.c} ${convertURL}`)
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
}

function logError(script) {
	console.info.call(console, `\x1b[31m${script}\x1b[0m`)
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

function checkOptions(options, commandKey) {
	if (!options) {
		if (commandKey === c.d) logError('You need decoded string.')
		else logError('You need string input with each command separated by a space.')
		return false
	} else return true
}

function handleFolderZip(options) {
	function zipFolder(options) {
		const output = fs.createWriteStream(options + '.rar')
		const archive = archiver('zip', { zlib: { level: 9 } })

		output.on('close', function () {
			console.log('Folder successfully zipped.')
		})

		archive.on('error', function (err) {
			throw err
		})

		archive.pipe(output)
		archive.directory(process.cwd() + '\\' + options, false)
		archive.finalize()
	}

	async function zipMultipleFolders(options) {
		// FIX: feat: output
		// if (sourceFolders.length !== outputFilePaths.length) {
		// 	console.log('Error: The number of source folders and output file paths must be the same.')
		// 	return
		// }

		try {
			for (let i = 0; i < options.length; i++) {
				await zipFolder(options[i])
			}
		} catch (err) {
			console.log('An error occurred:', err)
		}
	}

	zipMultipleFolders(options)
}

function makeCommand(command, stack) {
	const options = stack.shift()?.trim().split(/[ ]+/g)
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
		case 'wifi':
			handleWifi(options)
			break
		case 'd':
			handleDecodeURIComponent(options)
			break
		case 'zip':
			handleFolderZip(options)
			break
		case 'help':
			cli.showHelp(0)
			break
		default:
			checkExceptionCommand(command)
	}
}

function handleDecodeURIComponent(options) {
	if (!checkOptions(options, c.d)) return
	console.log(decodeURIComponent(options))
}

function handleWifi(options) {
	if (options) runPS(`netsh wlan show profile "${options.join(' ')}" key=clear`)
	else runPS('netsh wlan show profile')
}

function handleAppCommand(options) {
	if (!checkOptions(options)) return
	options.forEach((option) => {
		if (!!c.app[option]) run(c.app[option])
		else logError(`Unknown command: "${option}"`)
	})
}

function handleWebCommand(options) {
	if (!checkOptions(options)) return
	options.forEach((option) => {
		const cO = option.replace(/\/.+/, '') // convert option
		const param = option.replace(cO, '')
		if (!!c.web[cO]) {
			if (cO === 'gemi') runW(c.web[cO], flags.window, false)
			else runW(c.web[cO] + param, flags.window)
		} else if (cO.match(/:[\d]+/)) runW('localhost' + cO, flags.window, false)
		else logError(`Unknown command: "${cO}"`)
	})
}

module.exports = { handleValidation }
