const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');

hamburger.addEventListener('click', function (e) {
    console.log(menu);
    menu.classList.toggle('d-none');
});

menu.querySelectorAll('li').forEach(function (li) {
    li.addEventListener('click', function (e) {
        menu.classList.toggle('d-none');
    })
})