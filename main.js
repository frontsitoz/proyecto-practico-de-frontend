let user = document.querySelector('.navbar-email')
let desktopMenu = document.querySelector('.desktop-menu')


user.addEventListener('click', toggleDesktopMenu) //Este toggleDesktopMenu solo es el nombre de una función

function toggleDesktopMenu(){

desktopMenu.classList.toggle('inactive')

}
   
