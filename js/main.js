const iconMenu = document.querySelector('.container_menu');
const navBar = document.querySelector('.navbar');

const navbar_menu = document.querySelector('.navbar_menu');
const navbar_social = document.querySelector('.navbar_social');

function start() {
    iconMenu.onclick = function() {
        if (this.classList.contains("change")) {
            this.classList.remove("change");
        } else {
            this.classList.add("change");
        }

        if (navbar_menu.classList.contains("responsiveMenu") &&
        navbar_social.classList.contains('responsiveMenu')) {
            navbar_menu.classList.remove("responsiveMenu");
            navbar_social.classList.remove('responsiveMenu');
        } else {
            navbar_menu.classList.add("responsiveMenu");
            navbar_social.classList.add('responsiveMenu');
        }
        
    }
    window.addEventListener("scroll", () => {

        if (iconMenu.classList.contains("change")) {
            iconMenu.classList.remove("change");
        }

        if(navbar_menu.classList.contains("responsiveMenu") &&
        navbar_social.classList.contains('responsiveMenu')) {
            navbar_menu.classList.remove("responsiveMenu");
        navbar_social.classList.remove('responsiveMenu')
        }
    })
    
}
 
start();



