//Nav Hamburger
const hamburger = document.querySelector('.hamburger');
const nav_mobile = document.querySelector('.nav-mobile-container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav_mobile.classList.toggle('is-active');
});

//Nav Scroll
window.addEventListener('scroll',() => {
    let nav = document.querySelector('.nav');
    nav.classList.toggle('nav-scroll',window.scrollY>10)
})