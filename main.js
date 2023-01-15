let user = document.querySelector('.navbar-email')
let desktopMenu = document.querySelector('.desktop-menu')
let menuMobile = document.querySelector('.menu-mobile')
let iconMenu = document.querySelector('.menu') 

user.addEventListener('click', toggleDesktopMenu) //Este toggleDesktopMenu solo es el nombre de una función

iconMenu.addEventListener('click', toggleMenuMobile)

function toggleDesktopMenu(){

desktopMenu.classList.toggle('inactive')

}


function toggleMenuMobile(){

menuMobile.classList.toggle('inactive')
}
   
