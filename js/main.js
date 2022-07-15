const iconMenu = document.querySelector('.container_menu');
const navBar = document.querySelector('.navbar');

const navbar_menu = document.querySelector('.navbar_menu');
const navbar_social = document.querySelector('.navbar_social');

function start() {
    iconMenu.onclick = function() {
        this.classList.toggle("change");
        navbar_menu.classList.toggle("responsiveMenu");
        navbar_social.classList.toggle('responsiveMenu');
        // navbar_menu.style.animation = 'fadeOut ease-out .3s'
    }

}
 
start();



