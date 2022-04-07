// *************************************************************************************************
// <--------------------------FORM-SECTION-VAR-------------------------->
// *************************************************************************************************

const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#msg-text');
const errorMsgContainer = document.querySelector('#errorMsg');
const errorMsg = '* Hi there! Please, write the content of the email field in lower case, thanks.*';
const regexPattern = /^[a-z0-9.!#$%&'+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)$/;
// *************************************************************************************************
// <--------------------------FUNCTIONS-------------------------->
// *************************************************************************************************
function isValidEmail(emailValue) {
  return regexPattern.test(emailValue);
}

function displayError() {
  errorMsgContainer.classList.add('showError');
  errorMsgContainer.textContent = errorMsg;
}

function deleteErrorMsg() {
  errorMsgContainer.classList.remove('showError');
  errorMsgContainer.innerHTML = '';
}

form.addEventListener('submit', (event) => {
  const emailValue = emailInput.value;

  if (!isValidEmail(emailValue)) {
    event.preventDefault();
    displayError();
  } else {
    deleteErrorMsg();
  }
});

// *************************************************************************************************
// <--------------------------LOCAL-STORAGE-------------------------->
// *************************************************************************************************

const saveDataLocal = () => {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    msg: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
};
nameInput.addEventListener('change', saveDataLocal);
emailInput.addEventListener('change', saveDataLocal);
messageInput.addEventListener('change', saveDataLocal);
window.addEventListener('load', () => {
  const formData = JSON.parse(localStorage.getItem('formData'));
  nameInput.value = formData.name;
  emailInput.value = formData.email;
  messageInput.value = formData.msg;
});

// // *********************************************************************************************
// // <--------------------------FORM-SECTION-VAR-------------------------->
// // **********************************************************************************************
// const emailErrorMessage = 'Please enter email address in small letters.';
// // const nameInput = document.querySelector("#name");
// const contactForm = document.querySelector('.form');
// const emailContainer = document.querySelector('.email-container');
// const emailInput = document.getElementById('#email');
// const errorMessageContainer = document.querySelector('#errorMsg');
// const formElement = document.querySelectorAll('textarea, input');
// let formData = { name: '', email: '', message: '' };

// // *****************************************************************************************
// // <--------------------------FUNCTIONS-------------------------->
// // ************************************************************************************
// if (localStorage.getItem('formdata') !== null) {
//   formData = JSON.parse(localStorage.getItem('formdata'));
// }

// const validateEmail = () => {
//   const lowercaseEmail = emailInput.value.toLowerCase();
//   if (lowercaseEmail !== emailInput.value) {
//     emailContainer.classList.add('showError');
//     emailInput.focus();
//     errorMessageContainer.textContent = emailErrorMessage;
//     return false;
//   }
//   emailContainer.classList.remove('showError');
//   return true;
// };

// contactForm.addEventListener('submit', (event) => {
//   if (!validateEmail()) {
//     event.preventDefault();
//   } else {
//     localStorage.removeItem('formdata');
//   }
// });

// // **************************************************************************************
// // <--------------------------LOCAL-STORAGE-------------------------->
// // **************************************************************************************

// formElement.forEach((formItem) => {
//   formItem.value = formData[formItem.name];
//   formItem.addEventListener('input', (e) => {
//     formData[e.target.name] = e.target.value;
//     localStorage.setItem('formdata', JSON.stringify(formData));
//   });
// });
