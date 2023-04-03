## Flash action

Flash action is a CLI helps users improve work performances

## Installation

```sh
npm install -g flash-action
```

## Usage

### For application:

```sh
n app "string of commands"
n app "no"
n app "no obs z"
```

Supported apps include:

- `c` - Google Chrome.
- `code` - Visual Studio Code.
- `di` - Discord.
- `fi` - Figma.
- `miro` - Miro.
- `no` - Notion.
- `obs` - OBS Studio.
- `sharex` - ShareX.
- `sl` - Slack.
- `teamview` - Teamviewer.
- `z` - Zalo.

### For website:

You use flash-action as basic browser:

```sh
n web "string of commands"
n web "cam"
n web "fi miro ox"
```

You can also surf the internet as a window:

```sh
n web "string of commands" --window
n web "cam" --window
n web "fi miro ox" --window
```

Supported websites include:

- `cam` - Cambridge Dictionary.
- `fi` - Figma.
- `gpt` - ChatGPT.
- `image` - Google Image.
- `keep` - Google Keep.
- `map` - Google Map.
- `me` - Messenger.
- `mi` - Miro.
- `no` - Notion.
- `ox` - Oxford Dictionary.
- `tr` - Google Translate.
- `y` - Youtube.
- `yg` - Youglish.
- `z` - Zalo.

**IMPORTANT:** You must have Google Chrome application.

### Shutdown:

Forcing close on window all program and shutdown immediately.

```sh
n shutdown
```

### Restart:

Forcing close on window all program and restart immediately.

```sh
n restart
```
