/**
 * POMODORO TIMER
 */

const timerDisplay = document.querySelector('.time-display');
const startButton = document.querySelector('.start-button');
const resetButton = document.querySelector('.reset-button');
const alarmSound = new Audio('./oversimplified-alarm-clock.mp3');

let timeLeft = 25 * 60; // 25 minutes in seconds
let timerId; // store the interval ID returned by setInterval() when the timer is started

function startTimer() {
  if (!timerId) { // By checking whether timerId is null or not -> ensure that only one interval is running at a time (or bugs)
    timerId = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        clearInterval(timerId);
        timerId = null;
        //alert('Time is up!');
        alarmSound.play(); 
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  timeLeft = 25 * 60;
  updateTimerDisplay();
  alarmSound.pause(); // stop the alarm sound when resetting the timer
  alarmSound.currentTime = 0; // reset the alarm sound to the beginning
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
