let intervalId;
let timer = 59;
function countdown() {
    timer = document.getElementById('timer').innerHTML;
        intervalId = setInterval(() => {
        if (timer ===0) {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!')
        return;
      } timer--;
      document.getElementById('timer').innerHTML = timer
      }, 1000)
    } 
    countdown()



