
const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');
const closeMenuBtn = document.querySelector('.close-menu__btn');

// Show menu function
menuBtn.addEventListener('click', () => {
    sideMenu.style.right = '0'; 
    sideMenu.style.display = 'block';
});
// Close menu function
closeMenuBtn.addEventListener('click', () => {
    sideMenu.style.right = '-100%'; 
});


