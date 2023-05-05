//PORTFOLIO SLIDER

//Declarando variáveis do slider
var sliderContainer = document.querySelector('.pj-slider-container');
var sliderList = document.querySelector('.pj-slider-list');
var sliderItem = document.querySelectorAll('.pj-portfolio-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var prevItem = document.querySelector('.pj-item-prev');
var nextItem = document.querySelector('.pj-item-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.pj-current-slide');
var totalSlide = document.querySelector('.pj-total-slide');
var currentCounter = 1;
var navItems = document.querySelectorAll('.pj-item-navigator a');
var navCounter = document.querySelector('.pj-navigator-counter span');


//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px';

for (var p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + 'px';
    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';


//Fazendo Animaçao do Slider onClick


//HANDLERS

//Next Slide Animaçao
var nextSlideAnim = function () {
    var lastItem = sliderListWidth - containerWidth;

    if ((-1 * (sliderPos) === lastItem)) {
        return;
    }

    sliderPos -= containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

//Prev Slide Animaçao
var prevSlideAnim = function () {
    if (sliderPos === 0) {
        return;
    }

    sliderPos += containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

//Counter Formater
var counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n;
    } else {
        return n;
    }
}

//Counter Add
var counterAdd = function () {
    if ((currentCounter >= 0) && (currentCounter < sliderTotalItems)) {
        currentCounter++;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Counter Remove
var counterRemove = function () {
    if ((currentCounter > 1) && (currentCounter <= sliderTotalItems)) {
        currentCounter--;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

//Set Active Nav
var setActiveNav = function () {
    for (var nv = 0; nv < navItems.length; nv++) {
        let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));

        if (myNavNum === currentCounter) {
            navItems[nv].classList.add('pj-item-active');

            anime({
                targets: '.pj-item-active',
                width: 90
            });
        }
    }
}

//Set Active Slide
var setActiveSlide = function () {
    for (var sld = 0; sld < sliderItem.length; sld++) {
        let mySlideNum = parseInt(sliderItem[sld].getAttribute('data-slide'));

        if (mySlideNum === currentCounter) {
            sliderItem[sld].classList.add('pj-slide-active');
            sliderItem[sld].querySelector('.pj-portfolio-item-box').classList.add('pj-scale-right');
            sliderItem[sld].querySelector('.pj-portfolio-item-thumb img').classList.add('pj-scale-up');
            sliderItem[sld].querySelector('.pj-portfolio-item-info').classList.add('pj-fade-from-left');
        }
    }
}

var changeActive = function () {
    for (var rm = 0; rm < navItems.length; rm++) {
        navItems[rm].classList.remove('pj-item-active');
        anime({
            targets: navItems[rm],
            width: 20
        });
    }

    for (var rms = 0; rms < sliderItem.length; rms++) {
        sliderItem[rms].classList.remove('pj-slide-active');
        sliderItem[rms].querySelector('.pj-portfolio-item-box').classList.remove('pj-scale-right');
        sliderItem[rms].querySelector('.pj-portfolio-item-thumb img').classList.remove('pj-scale-up');
        sliderItem[rms].querySelector('.pj-portfolio-item-info').classList.remove('pj-fade-from-left');
    }
    setActiveNav();
    setActiveSlide();
}



//ACTIONS
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

anime({
    targets: '.pj-item-active',
    width: 90
});


nextItem.addEventListener('click', function () {
    nextSlideAnim();
    counterAdd();
    changeActive();
});

prevItem.addEventListener('click', function () {
    prevSlideAnim();
    counterRemove();
    changeActive();
});