// *************************************************************************************************
// <--------------------------FORM-VALIDATION-------------------------->
// *************************************************************************************************

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#msg");
const errorMsgContainer = document.querySelector("#errorMsg");
const errorMsg = "* The content of the email field has to be in lower case.";
const regex =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/;

function isValidEmail(emailValue) {
  return regex.test(emailValue);
}

function showError() {
  errorMsgContainer.classList.add("showError");
  errorMsgContainer.textContent = errorMsg;
}
