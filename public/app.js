
const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');
const closeMenuBtn = document.querySelector('.close-menu__btn');

menuBtn.addEventListener('click', () => {
    sideMenu.style.right = '0'; // منو نمایش داده شود
    sideMenu.style.display = 'block';
});

closeMenuBtn.addEventListener('click', () => {
    sideMenu.style.right = '-100%'; // منو پنهان شود
});


