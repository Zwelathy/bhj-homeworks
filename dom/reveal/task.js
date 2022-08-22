const banner = document.querySelectorAll('.reveal');
const viewportHeight = window.innerHeight;

window.addEventListener('scroll', function() {

  for (let key of banner) {
    let popUp = { top, bottom } = key.getBoundingClientRect();

    if ((viewportHeight - popUp.top - 120 >= 0) && (popUp.bottom - 100 >= 0)) { 
      key.classList.add('reveal_active');
    }
    else {
      key.classList.remove('reveal_active');
    }
  }
  
});