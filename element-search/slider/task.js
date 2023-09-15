const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const slider = document.querySelectorAll('.slider__item');
let activeSlide = document.querySelector('.slider__item_active');

let slides = Array.from(slider);

function activateSlider (oldIndex, newIndex) {
    slides[oldIndex].classList.remove('slider__item_active');    
    slides[newIndex].classList.add('slider__item_active');
}

arrowNext.onclick = function() {
    let activeIndex = slides.findIndex(function(slide) {
        return slide.className.includes('slider__item_active');
});
    let newIndex;
    if (activeIndex !== slides.length - 1) {
        newIndex = activeIndex+1;
    } else {
        newIndex = 0;
    }; 
    activateSlider(activeIndex, newIndex);
};

arrowPrev.onclick = function() {
    let activeIndex = slides.findIndex(function(slide) {
        return slide.className.includes('slider__item_active')
    });
    let newIndex;
    if (activeIndex !== 0) {
        newIndex = activeIndex - 1;
    } else {
        newIndex = 4;
    };
    activateSlider(activeIndex, newIndex);
};
