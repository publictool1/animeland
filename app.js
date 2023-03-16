const scrolls = document.querySelector('a[href^="#"]');
const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
const modalIta = document.getElementById('modal__itachi');
const modalNar = document.getElementById('modal__naruto');
const modalSas = document.getElementById('modal__saske');
const modalDra = document.getElementById('modal__dra');
const modalBib = document.getElementById('modal__bib');
const modalAlch = document.getElementById('modal__alch');
const buy = document.querySelector('.card__button');
const naruto = document.getElementById('naruto');
const alchimic = document.getElementById('alchimic');
const saske = document.getElementById('saske');
const bibop = document.getElementById('bibop');
const mai = document.getElementById('mai');
// const basket = document.getElementById('basket');
// const openBasket = document.getElementById('openBasket');
const openSS = document.getElementById('firstCon');
const all = document.getElementById('all');

let count = 0;
let width;

itachi.onclick = function() {
    modalIta.style.display = "block";
};

naruto.onclick = function() {
    modalNar.style.display = "block";
};

saske.onclick = function() {
    modalSas.style.display = "block";
};

mai.onclick = function() {
    modalDra.style.display = "block";
};

bibop.onclick = function() {
    modalBib.style.display = "block";
};

alchimic.onclick = function() {
    modalAlch.style.display = "block";
};

window.onclick = function(event) {
    if (event.target == modalIta) {
        modalIta.style.display = "none";
    }

    if (event.target == modalNar) {
        modalNar.style.display = "none";
    }

    if (event.target == modalAlch) {
        modalAlch.style.display = "none";
    }

    if (event.target == modalBib) {
        modalBib.style.display = "none";
    }

    if (event.target == modalDra) {
        modalDra.style.display = "none";
    }

    if (event.target == modalSas) {
        modalSas.style.display = "none";
    }


};

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}

for (let scroll of scrolls) {
    scroll.addEvenListner('click', function (e) {
        e.preventDefault();
        const id = scroll.getAtribute('href');


        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

