var time = 5;
    const timer1 = setInterval(() => { const countdownElement = document.getElementById('countdown1');
        if(time >= 0) {countdownElement.value = time - 1;} 
        else { 
          clearInterval(timer1);
          console.log('все');
         }
}, 1000);

const button = document.getElementById('startBtn');
button.addEventListener('click', timer1);
