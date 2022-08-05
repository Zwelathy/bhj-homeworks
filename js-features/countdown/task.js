const timerData = document.getElementById('timer').textContent;
let setTime = parseInt(timerData, 10);

function timeCounter() {
  if (setTime <= 0) {
    clearInterval(timer);
    return alert('Вы победили в конкурсе!');
  }
  
  setTime -= 1;
  document.getElementById('timer').textContent = setTime;
  return setTime;
  
}

let timer = setInterval(timeCounter, 1000, setTime);
