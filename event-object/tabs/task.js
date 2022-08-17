let menuArr = [];
const tabMenu = document.querySelectorAll("div.tab__navigation > div");
const tabContent = document.querySelectorAll("div.tab__contents > div");
const menuLength = tabMenu.length;

for (let i = 0; i < menuLength; i++) {
  menuArr.push(tabMenu[i].innerText);
}

for (let i = 0; i < menuLength; i++) {
  tabMenu[i].addEventListener('click', function(event) {
    let activeTab = document.querySelector('.tab_active');
    let activeContent = document.querySelector('.tab__content_active');
    
    if (activeTab.innerText != event.target.innerText) {
      activeTab.classList.remove('tab_active');
      activeContent.classList.remove('tab__content_active');
      event.target.classList.add('tab_active');

      let arrInx = menuArr.indexOf(event.target.innerText);

      tabContent[arrInx].classList.add('tab__content_active');
    }
  });
}