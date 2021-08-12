let navbutton = document.getElementById('nav-mobile')
let navmenu =  document.getElementById('mobile-navigation')
let closebutton = document.getElementById('close-nav')

navmenu.hidden = true

navbutton.addEventListener('click',function(){
    navmenu.hidden = false;
    navbutton.style.display = 'none'
    closebutton.hidden = false
    
    closebutton.style.display = 'flex'
    closebutton.style.justifyContent = 'flex-end'
    closebutton.style.width = '100%'
    closebutton.style.cursor = 'pointer'
})

closebutton.addEventListener('click', function(){
    navbutton.style.display = 'flex'
    navbutton.style.justifyContent = 'flex-end'
    closebutton.style.display = 'none'
    navmenu.hidden = true
})