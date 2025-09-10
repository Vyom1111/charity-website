const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navBar = document.querySelector('nav')  

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
      navClose.classList.add('visible')
      navBar.style.opacity = '1'
      navToggle.classList.add('invisible')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
      navClose.classList.remove('visible')
      navBar.style.opacity = '0.9'
      navToggle.classList.remove('invisible')
   })
}

