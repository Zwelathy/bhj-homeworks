'use strict';

//простейший вариант (изменено CSS tooltip с fixed на absolute)
document.addEventListener('click', key => {
  key.preventDefault();
  let target = key.target;
  let rect = target.getBoundingClientRect();
  console.log(rect);
  !document.querySelector('.tooltip_active') && (document.body.innerHTML += `<div class="tooltip tooltip_active"></div>`);
  let tooltip = document.querySelector('.tooltip_active');

  if (target.title) {
    if (tooltip.textContent == target.title) {
      document.body.removeChild(tooltip);
    }
    else {
      tooltip.textContent = target.title;
      tooltip.style.top = `${getPosition(rect).posY}px`;
      tooltip.style.left = `${getPosition(rect).posX}px`;
      //tooltip.style.position = 'absolute';
    }
  }
});

function getPosition(rect) {
  let posX = rect.left;
  let posY = rect.bottom + document.body.parentElement.scrollTop; //вычисление скролла html, а не вьюпорта
  //console.log(document.body.scrollTop, rect.top);

  return {posX: posX, posY: posY};
}

//первый вариант с затирающим подсказку скроллингом и разными позициями подсказок (нужна fixed позиция tooltip)
/*
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
    posX = rect.left;
    posY = rect.top + tooltip.getBoundingClientRect().height;
  }
  else {
    posX = rect.left;
    posY = rect.bottom - tooltip.getBoundingClientRect().height;
  }

  return {posX: posX, posY: posY};
}*/

/*document.addEventListener('scroll', () => {
  let tooltip = document.querySelector('.tooltip_active');
  tooltip && document.body.removeChild(tooltip);
});*/
