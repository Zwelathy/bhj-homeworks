const modalElem = document.getElementById('modal_main');
modalElem.classList.add('modal_active');

const modalButton = document.getElementsByClassName('modal__close')
const closureButton = modalButton.item(0);
const successButton = modalButton.item(1);
const successModalClosure = modalButton.item(2);
const successElement = document.getElementById('modal_success');

function modalClosure() { 
  modalElem.classList.remove('modal_active');
}

function modalExecution() {
  modalClosure();
  successElement.classList.add('modal_active');

  return false;
}

successButton.onclick = modalExecution;
closureButton.onclick = modalClosure;

function successModalClose() { 
  successElement.classList.remove('modal_active');
  
  return false;
}

const btnSuccess = document.getElementsByClassName('btn_success').item(0);

successModalClosure.onclick = successModalClose;
btnSuccess.onclick = successModalClose;