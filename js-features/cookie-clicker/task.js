let clickCounter = document.getElementById('clicker__counter').textContent;
let cookie = document.getElementById('cookie');

cookie.onclick = function() {
  document.getElementById('clicker__counter').textContent = ++clickCounter;

  let cookieSize = document.getElementById('cookie').width;

  if (cookieSize == 200) {
    document.getElementById('cookie').width = 300; //или для адаптивности += 100
  }
  else {
    document.getElementById('cookie').width = 200; // -= 100 для адаптивности
  }  
}