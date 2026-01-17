const timeEl = document.getElementById('time');
const statusEl = document.getElementById('status');
const cycleEl = document.getElementById('cycle');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');


let timer = null;
let time = 1500; 
let running = false;
let cycle = 1;
let isworking = true;

function updateDisplay() {
  let minute = Math.floor(time / 60);
  let seconds = time % 60;
  timeEl.textContent = `${minute}:${seconds < 10 ? "0" : ""}${seconds}`;
  document.title = `${minute}:${seconds < 10 ? "0" : ""}${seconds} - Pomodoro`;
}

startBtn.addEventListener("click", function() {
  if (running) return;

  running = true;
  statusEl.textContent = isworking ? "Working..." : "Break Time";
  statusEl.style.color = isworking ? "#2ecc71" : "#e74c3c";

  timer = setInterval(function() {
    time--;
    updateDisplay();

    if (time <= 0) {
      clearInterval(timer);
      running = false;

      if (isworking) {
        if (cycle >= 4) {
          statusEl.textContent = "All Done!";
          return;
        }
        isworking = false;
        time = 300; 
        cycleEl.textContent = `Cycle ${cycle}/4`;
      } else {
        isworking = true;
        time = 1500; 
      }

      updateDisplay();
      startBtn.click();
    }
  }, 1000);
});


stopBtn.addEventListener("click", function() {
  clearInterval(timer);
  running = false;
  statusEl.textContent = "Paused";
  statusEl.style.color = "#f39c12";
});

resetBtn.addEventListener("click", function() {
  clearInterval(timer);
  running = false;
  time = 1500;
  cycle = 1;
  isWork = true;
  statusEl.textContent = "Ready";
  statusEl.style.color = "#2ecc71";
  cycleEl.textContent = "Cycle 1/4";
  updateDisplay();
});

updateDisplay();
