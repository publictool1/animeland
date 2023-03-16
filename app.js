const scrolls = document.querySelector('a[href^="#"]');
const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');

const burgerOpen = document.getElementById('burgerOpen');
const burgerModal = document.getElementById('burger');

const openBasket = document.getElementById('openBasket');
const basketModal = document.getElementById('basketContent');
const basket = document.getElementById('basket');
const buyItachi = document.getElementById('buy');
const buyNaruto = document.getElementById('buyN');
const buyAlch = document.getElementById('buyA');
const buySasuke = document.getElementById('buyS');
const buyBib = document.getElementById('buyB');
const buyMai = document.getElementById('buyM');

const closeBasket = document.getElementById('closeBasket');
const newContent = document.getElementById('newContent');

const cartNum = document.getElementById('cartNum');


let count = 0;
let width;

window.onclick = function(event) {
    if (event.target == burgerModal) {
        burgerModal.style.display = 'none';
    }
    if (event.target == basket) {
        basket.style.display = "none";
    }
};

openBasket.onclick = function() {
    basket.style.display = 'block';
};

closeBasket.onclick = function() {
    basket.style.display = 'none';
};


burgerOpen.addEventListener('click', (e) => {
    e.preventDefault();
    burgerModal.style.display = 'block';
});

buyItachi.addEventListener('click', (e) => {

    e.preventDefault();
    let nameI = document.getElementById('nameItachi').textContent;
    let priceI = document.getElementById('priceItachi').textContent;
    let imageI = document.querySelector('.card-image img').src;

    let newDiv = document.createElement('div');
    let newPrice = document.createElement('p');
    let newName = document.createElement('p');
    let imageItachi = document.createElement('img');

    newName.innerText = nameI;
    newPrice.innerText = priceI;
    imageItachi.src = imageI;

    newDiv.appendChild(imageItachi);
    newDiv.appendChild(newName);
    newDiv.appendChild(newPrice);
    newDiv.classList.add('basket__add');
    newContent.appendChild(newDiv);
    count++;
    cartNum.innerText = count;
});

buyNaruto.addEventListener('click', (e) => {

    e.preventDefault();
    let name = document.getElementById('nameNaruto').textContent;
    let price = document.getElementById('priceNaruto').textContent;
    let image = document.querySelector('.card-image-naruto img').src;

    let newDiv = document.createElement('div');
    let newPrice = document.createElement('p');
    let newName = document.createElement('p');
    let imageNaruto = document.createElement('img');

    newName.innerText = name;
    newPrice.innerText = price;
    imageNaruto.src = image;

    newDiv.appendChild(imageNaruto);
    newDiv.appendChild(newName);
    newDiv.appendChild(newPrice);

    newDiv.classList.add('basket__add');
    newContent.appendChild(newDiv);
    count++;
    cartNum.innerText = count;
});

buyAlch.addEventListener('click', (e) => {

    e.preventDefault();
    let name = document.getElementById('nameAlch').textContent;
    let price = document.getElementById('priceAlch').textContent;
    let image = document.querySelector('.card-image-alch img').src;

    let newDiv = document.createElement('div');
    let newPrice = document.createElement('p');
    let newName = document.createElement('p');
    let imageAlch = document.createElement('img');

    newName.innerText = name;
    newPrice.innerText = price;
    imageAlch.src = image;

    newDiv.appendChild(imageAlch);
    newDiv.appendChild(newName);
    newDiv.appendChild(newPrice);

    newDiv.classList.add('basket__add');
    newContent.appendChild(newDiv);
    count++;
    cartNum.innerText = count;
});

buySasuke.addEventListener('click', (e) => {

    e.preventDefault();
    let name = document.getElementById('nameSas').textContent;
    let price = document.getElementById('priceSas').textContent;
    let image = document.querySelector('.card-image-sasuke img').src;

    let newDiv = document.createElement('div');
    let newPrice = document.createElement('p');
    let newName = document.createElement('p');
    let imageSasuke = document.createElement('img');

    newName.innerText = name;
    newPrice.innerText = price;
    imageSasuke.src = image;

    newDiv.appendChild(imageSasuke);
    newDiv.appendChild(newName);
    newDiv.appendChild(newPrice);

    newDiv.classList.add('basket__add');
    newContent.appendChild(newDiv);
    count++;
    cartNum.innerText = count;
});

buyBib.addEventListener('click', (e) => {

    e.preventDefault();
    let name = document.getElementById('nameBib').textContent;
    let price = document.getElementById('priceBib').textContent;
    let image = document.querySelector('.card-image-bib img').src;

    let newDiv = document.createElement('div');
    let newPrice = document.createElement('p');
    let newName = document.createElement('p');
    let imageBibop = document.createElement('img');

    imageBibop.src = image;
    newName.innerText = name;
    newPrice.innerText = price;


    newDiv.appendChild(imageBibop);
    newDiv.appendChild(newName);
    newDiv.appendChild(newPrice);
    newDiv.classList.add('basket__add');
    newContent.appendChild(newDiv);
    count++;
    cartNum.innerText = count;
});

buyMai.addEventListener('click', (e) => {

    e.preventDefault();
    let name = document.getElementById('nameMai').textContent;
    let price = document.getElementById('priceMai').textContent;
    let image = document.querySelector('.card-image-mai img').src;

    let newDiv = document.createElement('div');
    let newPrice = document.createElement('p');
    let newName = document.createElement('p');
    let imageMai = document.createElement('img');

    newName.innerText = name;
    newPrice.innerText = price;
    imageMai.src = image;

    newDiv.appendChild(imageMai);
    newDiv.appendChild(newName);
    newDiv.appendChild(newPrice);

    newDiv.classList.add('basket__add');
    newContent.appendChild(newDiv); 
    count++;
    cartNum.innerText = count;
});

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

