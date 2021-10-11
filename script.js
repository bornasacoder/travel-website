let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let loginBtn = document.querySelector('#login-btn');
let formLogin  = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let  videoBtn = document.querySelectorAll('.vid-btn');

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
menu.addEventListener('click', () =>{
     menu.classList.toggle('fa-times');
     navbar.classList.toggle('active');
});
loginBtn.addEventListener('click', () =>{
    formLogin.classList.add('active');
});
formClose.addEventListener('click', () =>{

   formLogin.classList.remove('active');
});

videoBtn.forEach(btn=>{
    btn.addEventListener('click', ()=>{
          document.querySelector('.controls .active').classList.remove('active');
          btn.classList.add('active');
          let src = btn.getAttribute('data-src');
          document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoint:{
        640:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,
        },
        1024:{
            slidesPerview:3,
        },
    },
});
var swiper = new Swiper(".brand-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoint:{
        640:{
            slidesPerview:1,
        },
        768:{
            slidesPerview:2,
        },
        1024:{
            slidesPerview:3,
        },
    },
});