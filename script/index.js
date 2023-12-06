const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');
const dark = document.querySelector('#tema');
const html = document.querySelector('html');
const darkMobile = document.querySelector('#tema-mobile');



button.addEventListener('click', function() {
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function() {
    if(this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});

dark.addEventListener('change', () => {
    html.classList.toggle('dark-mode');
});

darkMobile.addEventListener('click', () => {
    html.classList.toggle('dark-mode');
});


