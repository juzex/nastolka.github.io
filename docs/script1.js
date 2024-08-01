let seconds = 0;
let minutes = 0;
var selectedValue;
var select;
var interval = 1000;


function valuechange(identifier) {
  select = document.querySelector('select');
  selectedValue = select.value;
}

function starttime(identifier) {
  minutes = selectedValue;
  minutes = minutes - 1;
  if (minutes == selectedValue - 1) {
    seconds = 60;
    seconds--;
  } else if (seconds = 0 && minutes == selectedValue - 2) {
    seconds = 60;
    seconds--;
  } else if (minutes == selectedValue - 3) {
    seconds = 60;
    seconds--;
  } else if (minutes == selectedValue - 4) {
    seconds = 60;
    seconds--;
  } else if (minutes == selectedValue - 5) {
    seconds = 60;
    seconds--;
  } else {
    document.getElementById('timerall').innerText = minutes + ":" + seconds;

  }
}

setInterval(function starttime(identifier) {
	console.log(seconds++);
}, interval);
