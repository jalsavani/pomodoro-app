const bellSound = new Audio('bell.wav');
const startBtn = document.querySelector('.btn-start');
const pauseBtn = document.querySelector('.btn-pause');
const resetBtn = document.querySelector('.btn-reset');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const message = document.querySelector('.app-message');

let interval;
let totalSeconds = 25 * 60;
let isRunning = false;
let isPaused = false;

function updateDisplay() {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  minutesDisplay.textContent = String(mins).padStart(2, '0');
  secondsDisplay.textContent = String(secs).padStart(2, '0');
}

function startTimer() {
  if (isRunning) return;
  bellSound.play().catch((err) => {
    console.warn("Could not play bell on start:", err);
  });
  if (isRunning) return;
  isRunning = true;
  isPaused = false;
  pauseBtn.textContent = "Pause";
  message.textContent = "Focus time!";

  interval = setInterval(() => {
    if (totalSeconds > 0) {
      totalSeconds--;
      updateDisplay();
    } else {
      clearInterval(interval);
      message.textContent = "Time's up!";
      bellSound.play().catch((err) => {
        console.warn("Sound couldn't play:", err);
      });
      isRunning = false;
    }    
  }, 1000);
}

function togglePauseResume() {
  if (!isRunning) return;

  if (!isPaused) {
    clearInterval(interval);
    isPaused = true;
    pauseBtn.textContent = "Resume";
    message.textContent = "Paused";
  } else {
    isPaused = false;
    pauseBtn.textContent = "Pause";
    message.textContent = "Resumed";

    interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
      } else {
        clearInterval(interval);
        message.textContent = "Time's up!";
        isRunning = false;
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(interval);
  totalSeconds = 25 * 60;
  isRunning = false;
  isPaused = false;
  updateDisplay();
  pauseBtn.textContent = "Pause";
  message.textContent = "Press start to begin";
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', togglePauseResume);
resetBtn.addEventListener('click', resetTimer);

updateDisplay(); // Initial time display
