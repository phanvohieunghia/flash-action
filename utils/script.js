module.exports = {
	chrome: `"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"`,
	discord: `%USERPROFILE%\\AppData\\Local\\Discord\\Update.exe --processStart Discord.exe`,
	figma: `%USERPROFILE%\\AppData\\Local\\Figma\\Update.exe --processStart Figma.exe`,
	notion: `"%USERPROFILE%\\AppData\\Local\\Programs\\Notion"`,
	obs: `"C:\\Program Files\\obs-studio\\bin\\64bit"`,
	shareX: `"C:\\Program Files\\ShareX\\ShareX.exe"`,
	shutdown: `Get-Process | Where-Object {$_.MainWindowTitle -ne ""} | Where-Object ProcessName -NotContains "WindowsTerminal" | Stop-Process ; Stop-Computer`,
	restart: `Get-Process | Where-Object {$_.MainWindowTitle -ne ""} | Where-Object ProcessName -NotContains "WindowsTerminal" | Stop-Process ; Restart-Computer`,
	slack: `"%USERPROFILE%\\AppData\\Local\\slack\\slack.exe"`,
	teamViewer: `"C:\\Program Files\\TeamViewer\\TeamViewer.exe"`,
	vscode: 'code',
	zalo: `"%USERPROFILE%\\AppData\\Local\\Programs\\Zalo\\Zalo.exe"`,
	url: {
		cambridge: 'dictionary.cambridge.org',
		chatGPT: 'chat.openai.com',
		figma: 'figma.com',
		geminisoft: 'geminisoft.iptime.org:10000/projects/mymy-archive-pe/issues',
		google_image: 'images.google.com',
		google_keep: 'keep.google.com',
		google_map: 'maps.google.com',
		google_translate: 'translate.google.com',
		miro: 'miro.com',
		notion: 'notion.so',
		oxford: 'oxfordlearnersdictionaries.com',
		youglish: 'youglish.com',
		youtube: 'youtube.com',
		zalo: 'chat.zalo.me',
		messenger: 'messenger.com',
	},
}
