const productsInput = document.querySelector('#products');
const ordersInput = document.querySelector('#orders');
const accountingInput = document.querySelector('#accounting');
const terminalInput = document.querySelector('#terminal');
const packageInput = document.querySelector('#package');
const packagesLiInput = packageInput.querySelectorAll('ul li');
const totalPriceSpan = document.querySelector('#total-price .total__price');

const basicPrice = 0;
const professionalPrice = 25;
const premiumPrice = 60;

let chosenPackage = "none";
let totalPrice = 0;

function refreshTotalPrice() {
    totalPrice = +productsInput.value * 0.5 + +ordersInput.value * 0.25;
    accountingInput.checked && (totalPrice += 35);
    terminalInput.checked && (totalPrice += 5);
    if (chosenPackage === "Professional")
        totalPrice += professionalPrice;
    else if (chosenPackage === "Premium")
        totalPrice += premiumPrice;
    totalPriceSpan.innerText = "$" + totalPrice;
}

productsInput.addEventListener('input', function (event) {
    refreshTotalPrice();
    const item = document.querySelector('[data-id="products"]');
    productsInput.value > 0 ? item.classList.remove('d-none') : item.classList.add('d-none');
    item.querySelector('.item__calc').innerText = productsInput.value + " * $0.5" ;
    item.querySelector('.item__price').innerText = "$" + (+productsInput.value * 0.5);
});

ordersInput.addEventListener('input', function (event) {
    refreshTotalPrice();
    const item = document.querySelector('[data-id="orders"]');
    ordersInput.value > 0 ? item.classList.remove('d-none') : item.classList.add('d-none');
    item.querySelector('.item__calc').innerText = ordersInput.value + " * $0.25" ;
    item.querySelector('.item__price').innerText = "$" + (+ordersInput.value * 0.25);
});

accountingInput.addEventListener('input', function (event) {
    refreshTotalPrice();
    const item = document.querySelector('[data-id="accounting"]');
    accountingInput.checked ? item.classList.remove('d-none') : item.classList.add('d-none');
    item.querySelector('.item__price').innerText = "$" + 35;
});

terminalInput.addEventListener('input', function (event) {
    refreshTotalPrice();
    const item = document.querySelector('[data-id="terminal"]');
    terminalInput.checked ? item.classList.remove('d-none') : item.classList.add('d-none');
    item.querySelector('.item__price').innerText = "$" + 5;
});

packageInput.addEventListener('click', function (event) {
    this.lastElementChild.classList.toggle('d-none');
});

packagesLiInput.forEach(function (li) {
    li.addEventListener('click', function (e) {
        const item = document.querySelector('[data-id="package"]');
        item.classList.remove('d-none');
        item.querySelector('.item__calc').innerText = this.dataset.value;
        if (this.dataset.value === "Basic") {
            item.querySelector('.item__price').innerText = "$" + basicPrice;
            chosenPackage = "Basic";
        } else if (this.dataset.value === "Professional") {
            item.querySelector('.item__price').innerText = "$" + professionalPrice;
            chosenPackage = "Professional";
        } else if (this.dataset.value === "Premium") {
            item.querySelector('.item__price').innerText = "$" + premiumPrice;
            chosenPackage = "Premium";
        }
        packageInput.firstElementChild.innerText = chosenPackage;
        refreshTotalPrice();
    })
});



