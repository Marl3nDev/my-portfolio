const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav__items');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('nav__items--visible');
  burger.classList.toggle('burger--active');
});


const subscribeBtn = document.querySelector('.form-subscribe__button');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');

subscribeBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  popup.classList.remove('_hidden');
});

closeBtn.addEventListener('click', () => {
  popup.classList.add('_hidden');
});