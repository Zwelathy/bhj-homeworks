const menuKeys = document.querySelectorAll("ul.menu_main > li");
const menuKeysValue = menuKeys.length;

for (let i = 0; i < menuKeysValue; i++) {
  menuKeys.item(i).addEventListener('click', function(event) { 
    let activeMenu = document.querySelector('.menu_active');
    let menuItem = this.querySelector('ul.menu_sub');  

    if (!event.target.getAttribute('href')) {
      event.preventDefault();
    }           
    
    if (menuItem === activeMenu && activeMenu) {
      activeMenu.classList.remove('menu_active');
      
      return;
        }

    if (menuItem) {

      if (activeMenu) {
        activeMenu.classList.remove('menu_active');          
      }
      
      menuItem.classList.add('menu_active');
      
      return;
    }

    return;
  });
  
}