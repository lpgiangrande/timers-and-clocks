/**
 * POMODORO TIMER
 */

const timerDisplay = document.querySelector('.time-display');
const startButton = document.querySelector('.start-button');
const resetButton = document.querySelector('.reset-button');
const stopButton = document.querySelector('.stop-button');
const pauseButton = document.querySelector('.pause-button');
const alarmSound = new Audio('../assets/oversimplified-alarm-clock.mp3');

let timeLeft; // The amount of time left on the timer in seconds. 25 or 5 min
let timerId; // store the interval ID returned by setInterval() when the timer is started

/**
 * Starts the timer with the specified duration.
 * If a timer is already running, does nothing.
 * If the timer reaches 0, plays an alarm sound.
 *
 * @param {number} duration - The duration of the timer in seconds. Default is 25 minutes.
 */
function startTimer(duration = 25 * 60) {
  // Stop the alarm if it is playing.
  stopAlarm();

  // Only start a new timer if one is not already running.
  if (!timerId) {
    // Set up a new timer using setInterval().
    timerId = setInterval(() => {
      // Decrease the timeLeft variable by 1 second.
      timeLeft--;
      
      // Update the timer display on the page.
      updateTimerDisplay();
      
      // If the timer has reached 0, stop the timer and play the alarm sound.
      if (timeLeft <= 0) {
        clearInterval(timerId);
        timerId = null;
        alarmSound.play(); 
      }
    }, 1000);

    // Set the timeLeft variable to the specified duration.
    timeLeft = duration;
    // Update the timer display on the page with the new timeLeft value.
    updateTimerDisplay();
  }
}

function startPauseTimer() {
  stopAlarm();
  startTimer(5 * 60); // 0.1 * 60 value for test -> 5 sec
  startButton.textContent = 'Start Work';
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function stopAlarm() {
  alarmSound.pause();
  alarmSound.currentTime = 0; // sets the current playback time of the audio to the beginning of the audio file.
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  timeLeft = 25 * 60;
  updateTimerDisplay();
  stopAlarm();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

startButton.addEventListener('click', () => {
  startTimer();
  startButton.disabled = true;
  pauseButton.disabled = false;
});
resetButton.addEventListener('click', resetTimer);
stopButton.addEventListener('click', stopAlarm);
pauseButton.addEventListener('click', startPauseTimer);