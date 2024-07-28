let time = 60;
    const timer1 = setInterval(() => { const countdownElement = document.getElementById('countdown1');
        if(time >= 0) {countdownElement.value = time--;} 
        else { clearInterval(timer1); }
}, 1000);

const button = document.querySelector('#startBtn');

button.addEventListener('click', timer1);
