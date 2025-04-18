const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => { // arrow function
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');
 };
 menu.addEventListener('click',mobileMenu);

// const menu = document.querySelector('#mobile-menu');
// const menuLinks=document.querySelector('.navbar__menu');


// // display the menu
// menu.addEventListener('click',function(){

//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// });