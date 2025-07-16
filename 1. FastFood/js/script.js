const burger = document.querySelector('.burger');
const navList = document.querySelector('.header__list');

burger.addEventListener('click', () => {
  navList.classList.toggle('active');
});