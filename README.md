# Pomodoro App

A minimal Pomodoro-style focus timer built with vanilla JavaScript, HTML, and CSS. Press start, focus for 25 minutes, and get an audio alert when time is up.

## Features

- 25-minute countdown displayed as `MM:SS` in a circular, gradient-styled timer
- **Start**, **Pause / Resume**, and **Reset** controls
- Live status messages: "Press start to begin", "Focus time!", "Paused", "Resumed", "Time's up!"
- Bell sound when a session starts and when time runs out (see [Known Issues](#known-issues))

## Tech Stack

- **JavaScript** (DOM manipulation, `setInterval` timer, the `Audio` API)
- **HTML5**
- **CSS3** (flexbox, gradients)
- **Google Fonts** (Inter)

No frameworks, dependencies, or build step.

## Getting Started

```bash
git clone https://github.com/jalsavani/pomodoro-app.git
cd pomodoro-app
```

Open `index.html` in any modern browser. The Inter font loads from Google Fonts, so the app falls back to a default sans-serif font when offline.

## Usage

1. Click **Start** to begin the 25-minute session (a bell plays and the message changes to "Focus time!").
2. Click **Pause** to stop the clock. The button changes to **Resume**; click it to continue.
3. Click **Reset** at any time to return to 25:00.
4. When the timer hits 00:00, the message changes to "Time's up!".

## How It Works

- Timer state lives in `totalSeconds`, `isRunning`, and `isPaused`.
- `setInterval` ticks once per second, decrementing `totalSeconds` and calling `updateDisplay()`, which pads minutes and seconds to two digits.
- Pausing clears the interval; resuming starts a new one from the remaining time.
- Reset clears the interval and restores the 25-minute default.

## Project Structure

```
pomodoro-app/
├── index.html   # Page structure and controls
├── style.css    # Layout, gradient timer ring, and button styling
├── app.js       # Timer logic and event handlers
└── bell.wav     # Alert sound
```

## Known Issues

- The bell does not play at the end of a session that was paused and resumed (the resume path in `app.js` has no sound call).

## Future Improvements

- Add a 5-minute break and a repeating focus/break cycle with a session counter
- Make session and break lengths configurable
- Add an animated progress ring for the countdown
- Show the remaining time in the browser tab title
- Deploy with GitHub Pages so the app can be tried without cloning

## Author

**Jal Savani**: [GitHub](https://github.com/jalsavani) · [LinkedIn](https://www.linkedin.com/in/jal-savani-170413346)
