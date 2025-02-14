
const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');
const closeMenuBtn = document.querySelector('.close-menu__btn');

// Show menu function
menuBtn.addEventListener('click', () => {
    sideMenu.style.right = '0'; 
    sideMenu.style.display = 'block';
    sideMenu.style.zIndex ='9999'
});
// Close menu function
closeMenuBtn.addEventListener('click', () => {
    sideMenu.style.right = '-100%'; 
});

const users = [
    {name: 'علی', img:'./img/user-3.webp', comment:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده'},
    {name: 'رضا' , img:'./img/user-4.webp', comment:'ل تولید سادگی نامفهوم از و لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت'},
    {name: 'سارا', img:'./img/user-1.jpg' , comment:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،'},
    {name: 'هدیه' , img:'./img/user-2.jpg' , comment:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان'}
];

const slideContainer = document.querySelector('.swiper-wrapper');

users.forEach(user =>{
    slideContainer.insertAdjacentHTML('beforeend' , `
      <div class="swiper-slide">
      <!-- Card -->
<div class="w-fit border border-gray-400 rounded-md rounded-br-4xl swiper-slide">
  <div class="flex p-3 gap-x-4 centered">
    <img class="lg:w-24 lg:h-24 w-20 h-20 rounded-full" src=${user.img} alt=${user.name}>
    <span class="font-IRANSans-Bold text-zinc-950 text-base lg:text-lg">
      ${user.name}
    </span>
  </div>
  <p class="lg:text-lg text-sm  text-zinc-950 text-center w-56 lg:w-64 mt-2  md:line-clamp-4">
    ${user.comment}
  </p>
  </div>
    </div>  
        `)
})

