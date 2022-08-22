const rotatorCase = document.querySelectorAll('span.rotator > .rotator__case');
let textColor = rotatorCase[0].getAttribute('data-color'); 
rotatorCase[0].setAttribute('style', `color: ${textColor}`);
let activeToggle = true;

function rotatorCaseToggle() {

  let element = null;
  const currentPhrase = document.querySelector('.rotator__case_active');
  let nextPhrase = currentPhrase.nextElementSibling;

  if (activeToggle) {

    activeToggle = false;

    if (nextPhrase) {
      element = nextPhrase;
    }
    else {
      element = rotatorCase[0];
    }

    timeOut = element.getAttribute('data-speed');    
    currentPhrase.classList.remove('rotator__case_active');
    textColor = element.getAttribute('data-color');
    element.classList.add('rotator__case_active');
    element.setAttribute('style', `color: ${textColor}`);

    const changeDelay = setTimeout(() => {
      activeToggle = true;
    }, timeOut);

  }

}

const changeTimer = setInterval(() => rotatorCaseToggle(), 50);