const dropdownList = document.querySelector('.dropdown__value');
const dropdownItem = document.querySelectorAll('.dropdown__item');
const activeItem = document.querySelector('ul.dropdown__list');
const listLength = dropdownItem.length;

dropdownList.onclick = function() {
  activeItem.classList.toggle('dropdown__list_active');

  dropdownItem.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownList.textContent = event.target.textContent;
    activeItem.classList.remove('dropdown__list_active');
  });

}