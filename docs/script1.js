let timer = document.getElementById('timerall');
let startBtn = document.getElementById('starttimer');
let stopBtn = document.getElementById('stoptimer');
let resetBtn = document.getElementById('resetcart');

let seconds = 0;
let minutes = 1;
let interval;

timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

resetBtn.style.display = "none";
stopBtn.style.display = "none";

document.getElementById('stoptimer').hidden  = true;

function valuechange(identifier) {
  minutes = document.getElementById("timer").value;
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


function updateTime() {
  if (seconds <= 0) {
    minutes--;
    seconds = 59;
  }
  seconds--;
  if (minutes === 0 && seconds === 0) {
    clearInterval(interval);
    resetBtn.style.display = "inline";
    startBtn.style.display = "none";
    minutes = document.getElementById("timer").value;
    stopBtn.style.display = "none";
  }
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
  interval = setInterval(updateTime, 1000);
  startBtn.style.display = "none";
  stopBtn.style.display = "inline";
});


stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  startBtn.style.display = "inline";
  stopBtn.style.display = "none";
});


