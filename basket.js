// const openBasket = document.getElementById('openBasket');
// const basketModal = document.getElementById('basketContent');
// const basket = document.getElementById('basket');
// const buyItachi = document.getElementById('buy');
// const buyNaruto = document.getElementById('buyN');
// const buyAlch = document.getElementById('buyA');
// const buySasuke = document.getElementById('buyS');
// const buyBib = document.getElementById('buyB');
// const buyMai = document.getElementById('buyM');

// openBasket.onclick = function() {
//     basket.style.display = 'block';
// };

// window.onclick = function(event) {
//     if (event.target == basket) {
//       basket.style.display = "none";
//     }
// };



// buyItachi.addEventListener('click', (e) => {

//     e.preventDefault();
//     let nameI = document.getElementById('nameItachi').textContent;
//     let priceI = document.getElementById('priceItachi').textContent;
//     let imageI = document.querySelector('.card-image img').src;

//     let newDiv = document.createElement('div');
//     let newPrice = document.createElement('p');
//     let newName = document.createElement('p');
//     let imageItachi = document.createElement('img');

//     newName.innerText = nameI;
//     newPrice.innerText = priceI;
//     imageItachi.src = imageI;

//     newDiv.appendChild(imageItachi);
//     newDiv.appendChild(newName);
//     newDiv.appendChild(newPrice);
//     newDiv.classList.add('basket__add');
//     basketModal.appendChild(newDiv);
// });

// buyNaruto.addEventListener('click', (e) => {

//     e.preventDefault();
//     let name = document.getElementById('nameNaruto').textContent;
//     let price = document.getElementById('priceNaruto').textContent;
//     let image = document.querySelector('.card-image-naruto img').src;

//     let newDiv = document.createElement('div');
//     let newPrice = document.createElement('p');
//     let newName = document.createElement('p');
//     let imageNaruto = document.createElement('img');

//     newName.innerText = name;
//     newPrice.innerText = price;
//     imageNaruto.src = image;

//     newDiv.appendChild(imageNaruto);
//     newDiv.appendChild(newName);
//     newDiv.appendChild(newPrice);

//     newDiv.classList.add('basket__add');
//     basketModal.appendChild(newDiv);
// });

// buyAlch.addEventListener('click', (e) => {

//     e.preventDefault();
//     let name = document.getElementById('nameAlch').textContent;
//     let price = document.getElementById('priceAlch').textContent;
//     let image = document.querySelector('.card-image-alch img').src;

//     let newDiv = document.createElement('div');
//     let newPrice = document.createElement('p');
//     let newName = document.createElement('p');
//     let imageAlch = document.createElement('img');

//     newName.innerText = name;
//     newPrice.innerText = price;
//     imageAlch.src = image;

//     newDiv.appendChild(imageAlch);
//     newDiv.appendChild(newName);
//     newDiv.appendChild(newPrice);

//     newDiv.classList.add('basket__add');
//     basketModal.appendChild(newDiv);
// });

// buySasuke.addEventListener('click', (e) => {

//     e.preventDefault();
//     let name = document.getElementById('nameSas').textContent;
//     let price = document.getElementById('priceSas').textContent;
//     let image = document.querySelector('.card-image-sasuke img').src;

//     let newDiv = document.createElement('div');
//     let newPrice = document.createElement('p');
//     let newName = document.createElement('p');
//     let imageSasuke = document.createElement('img');

//     newName.innerText = name;
//     newPrice.innerText = price;
//     imageSasuke.src = image;

//     newDiv.appendChild(imageSasuke);
//     newDiv.appendChild(newName);
//     newDiv.appendChild(newPrice);

//     newDiv.classList.add('basket__add');
//     basketModal.appendChild(newDiv);
// });

// buyBib.addEventListener('click', (e) => {

//     e.preventDefault();
//     let name = document.getElementById('nameBib').textContent;
//     let price = document.getElementById('priceBib').textContent;
//     let image = document.querySelector('.card-image-bib img').src;

//     let newDiv = document.createElement('div');
//     let newPrice = document.createElement('p');
//     let newName = document.createElement('p');
//     let imageBibop = document.createElement('img');

//     imageBibop.src = image;
//     newName.innerText = name;
//     newPrice.innerText = price;


//     newDiv.appendChild(imageBibop);
//     newDiv.appendChild(newName);
//     newDiv.appendChild(newPrice);
//     newDiv.classList.add('basket__add');
//     basketModal.appendChild(newDiv);
// });

// buyMai.addEventListener('click', (e) => {

//     e.preventDefault();
//     let name = document.getElementById('nameMai').textContent;
//     let price = document.getElementById('priceMai').textContent;
//     let image = document.querySelector('.card-image-mai img').src;

//     let newDiv = document.createElement('div');
//     let newPrice = document.createElement('p');
//     let newName = document.createElement('p');
//     let imageMai = document.createElement('img');

//     newName.innerText = name;
//     newPrice.innerText = price;
//     imageMai.src = image;

//     newDiv.appendChild(imageMai);
//     newDiv.appendChild(newName);
//     newDiv.appendChild(newPrice);

//     newDiv.classList.add('basket__add');
//     basketModal.appendChild(newDiv);
// });