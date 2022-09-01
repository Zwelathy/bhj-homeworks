/*'use strict';

const tooltipHandler = document.querySelectorAll('.has-tooltip');
const position = ['bottom', 'bottom', 'right', 'left', 'top', 'top'];

[...tooltipHandler].map((element, index) => element.setAttribute('data-position', position[index]));


document.addEventListener('click', key => {
  key.preventDefault();
  let target = key.target;
  let rect = target.getBoundingClientRect()
  let position = target.dataset.position;
  !document.querySelector('.tooltip_active') && (document.body.innerHTML += `<div class="tooltip tooltip_active"></div>`);
  let tooltip = document.querySelector('.tooltip_active');

  if (target.title) {
    if (tooltip.textContent == target.title) {
      document.body.removeChild(tooltip);
    }
    else {
      tooltip.textContent = target.title;
      tooltip.style.top = `${getPosition(rect, position, tooltip).posY}px`;
      tooltip.style.left = `${getPosition(rect, position, tooltip).posX}px`;
    }
  }
});

//не исчезающая при скроллинге подсказка только снизу
function getPosition(rect) {
  let posX = rect.left;
  let posY = rect.bottom;

  return {posX: posX, posY: posY}
}

function getPosition(rect, position, tooltip) {
  let posX;
  let posY;

  if (position == 'top') {
    posX = rect.left;
    posY = rect.top - tooltip.getBoundingClientRect().height;
  }
  else if (position == 'right') {
    posX = rect.right;
    posY = rect.top;
  }
  else if (position == 'left') {
    posX = rect.left - tooltip.getBoundingClientRect().width;
    posY = rect.top;
  }
  else {
    posX = rect.left;
    posY = rect.bottom;
  }

  return {posX: posX, posY: posY}
}

document.addEventListener('scroll', () => {
  let tooltip = document.querySelector('.tooltip_active');
  tooltip && document.body.removeChild(tooltip);
});*/

//вариант номер два
'use strict';

const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));

tooltips.forEach(tooltip => {
  const element = document.createElement('div');
  element.textContent = tooltip.title;

  tooltip.addEventListener("click", (key) => {
    key.preventDefault();

    element.classList.add("tooltip");
    tooltip.insertAdjacentElement('beforeBegin', element);
    element.style.position = "absolute";

    element.style.left = `${tooltip.getBoundingClientRect().left}px`;
    element.style.top = `${tooltip.getBoundingClientRect().bottom}px`;

    const elements = Array.from(document.querySelectorAll(".tooltip_active"));
    const findElement = elements.find(key => key.classList.contains("tooltip_active"));

    if (findElement === undefined) {
      element.classList.add("tooltip_active");
    }
    else {
      if (findElement !== element) {
        element.classList.add("tooltip_active");
      }
      
      findElement.classList.remove("tooltip_active");
    }

  })

});