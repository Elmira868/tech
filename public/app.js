
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

// Create users
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
<div class="w-fit swiper-slide">
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

// Create members
const members = [
  {fullName: 'سمیرا احمدی' , jobTitle: 'مدیر پروژه' , imgUrl: './img/member-1.jpg'},
  {fullName: 'الناز محمدی' , jobTitle: 'فرانت اند دولوپر' , imgUrl: './img/member-2.jpg'},
  {fullName: 'الما یزدانی' , jobTitle: 'بک اند دولوپر' , imgUrl: './img/member-3.jpg'},
  {fullName: 'دریا یعقوبی' , jobTitle: 'محتوانویس' , imgUrl: './img/member-4.jpg'}
]

const memberContainer = document.querySelector('.member-container')

members.forEach(member => {
  memberContainer.insertAdjacentHTML('beforeend',`
    <div class="flex gap-x-3 mt-4 lg:mt-0">
                <!-- Icon of member box -->
                 <div class="flex flex-col gap-y-6">
                  <svg class="md:w-8 md:h-8 w-5 h-5 text-gray-500 transition-all delay-100 hover:cursor-pointer hover:text-primary-orange">
                    <use href="#instagram"></use>
                  </svg>
                  <svg class="md:w-8 md:h-8 w-5 h-5 text-gray-500 transition-all delay-100 hover:cursor-pointer hover:text-primary-orange">
                    <use href="#facebook"></use>
                  </svg>
                  <svg class="md:w-8 md:h-8 w-5 h-5 text-gray-500 transition-all delay-100 hover:cursor-pointer hover:text-primary-orange">
                    <use href="#youtube"></use>
                  </svg>
                  <svg class="md:w-8 md:h-8 w-5 h-5 text-gray-500 transition-all delay-100 hover:cursor-pointer hover:text-primary-orange">
                    <use href="#linkedin"></use>
                  </svg>
                 </div>
                <!-- Photo and name of member box -->
                <div class="w-fit p-1 flex flex-col">
                  <div>
                    <img class="w-52 h-52 rounded-lg rounded-br-4xl transition-all  transform hover:-translate-y-1" src=${member.imgUrl} alt=${member.fullName}>
                    <div class="text-center mt-2">
                      <h3 class="font-IRANSans-Bold text-zinc-950 text-base lg:text-lg">
                        ${member.fullName}
                      </h3>
                      <h5 class="font-IRANSans-Light text-gray-500 text-sm mt-1.5">
                        ${member.jobTitle}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
    `)
})

