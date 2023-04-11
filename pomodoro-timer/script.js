/**
 * POMODORO TIMER
 */


/**
 * Change tab color when time is up.
 */
function changeTabColor() {
    document.title = "Time's up!";
    let tabColor = "#FF0000"; // set the color of the tab
    document.querySelector("meta[name='theme-color']").setAttribute("content", tabColor);
}

const timerDisplay = document.querySelector('.time-display');
const startButton = document.querySelector('.start-button');
const resetButton = document.querySelector('.reset-button');

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
        alert('Time is up!');
      }
    }, 1000);
  }
}

