const inputParser = (element) => element.querySelectorAll('input');
const checkboxItems = inputParser(document);

checkboxItems.forEach(key => key.addEventListener('change', function() {
  let checkboxBlock = this.closest('li.interest');

  for (child of checkboxBlock.children) {
    if (child.nodeName === 'UL') {
      let checkboxChilds = inputParser(child);
      this.checked === true ? checkboxChilds.forEach(element => element.checked = true) : checkboxChilds.forEach(element => element.checked = false);
      }
    }

}));