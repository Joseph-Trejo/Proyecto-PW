const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


burger.addEventListener('click', () =>{
// Deslice nav
nav.classList.toggle('nav-active');


// Animar los links
navLinks.forEach((link, index) => {
    if(link.style.animation){
        link.style.animation = '';
    }else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.3}s`;
    }
});
//animacion pesta;a
  burger.classList.toggle('toggle');

});

}

navSlide();


