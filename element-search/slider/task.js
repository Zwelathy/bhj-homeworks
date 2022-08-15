const sliderItem = document.querySelectorAll(".slider__item");
const sliderCount = sliderItem.length;
const sliderDot = document.querySelectorAll(".slider__dot");
const leftButton = document.querySelector(".slider__arrow_prev");
const rightButton = document.querySelector(".slider__arrow_next");

let activeSliderCounter = 0;

function activateSlide(activeSliderCounter) {
    let activeSlide = document.querySelector(".slider__item_active");
    let activeDot = document.querySelector(".slider-dot-active");
    activeSlide.classList.remove('slider__item_active');
    activeDot.classList.remove('slider-dot-active');
    sliderItem.item(activeSliderCounter).classList.add('slider__item_active');
    sliderDot.item(activeSliderCounter).classList.add('slider-dot-active');   
}

leftButton.addEventListener('click', function() {
    activeSliderCounter--;

    if (activeSliderCounter < 0) {
      activeSliderCounter = sliderCount - 1;
    }

    activateSlide(activeSliderCounter);

    return activeSliderCounter;
}); 

rightButton.addEventListener('click', function() {
  
    activeSliderCounter++;

    if (activeSliderCounter === sliderCount) {
      activeSliderCounter = 0;
    }

    activateSlide(activeSliderCounter);
    
    return activeSliderCounter;
});

for (let key = 0; key < sliderCount; key++) {
  sliderDot.item(key).addEventListener('mouseover', () => activateSlide(key));
};