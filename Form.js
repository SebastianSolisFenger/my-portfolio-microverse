// *************************************************************************************************
// <--------------------------FORM-SECTION-VAR-------------------------->
// *************************************************************************************************

const form = document.querySelector('#form');
const emailInput = document.querySelector('#email');
const errorMsgContainer = document.querySelector('#errorMsg');
const errorMsg = '* Hi there! Please, write the content of the email field in lower case, thanks.*';
const regex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/;

// *************************************************************************************************
// <--------------------------FUNCTIONS-------------------------->
// *************************************************************************************************

function isValidEmail(emailValue) {
  return regex.test(emailValue);
}

function showError() {
  errorMsgContainer.classList.add('showError');
  errorMsgContainer.textContent = errorMsg;
}

function deleteErrorMessage() {
  errorMsgContainer.classList.remove('showError');
  errorMsgContainer.innerHTML = '';
}

// *************************************************************************************************
// <--------------------------SUBMIT-------------------------->
// *************************************************************************************************

form.addEventListener('submit', (event) => {
  const emailValue = emailInput.value;

  if (!isValidEmail(emailValue)) {
    event.preventDefault();
    showError();
  } else {
    deleteErrorMessage();
  }
});
