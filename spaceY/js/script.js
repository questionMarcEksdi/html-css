let menu = document.getElementById('menu'); 
let menuItems = document.getElementById('menuItems')


// console.log(menuItems)

menu.addEventListener('click', function(){

   
    if (menuItems.style.display == ''){
        menuItems.style.display = 'block'
        menu.style.backgroundImage = 'url(icon/x.svg)'
    }

    else {
        menuItems.style.display =''
        menu.style.backgroundImage = 'url(icon/menu-2.svg)'
    }



})
