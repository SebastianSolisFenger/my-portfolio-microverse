// *************************************************************************************************
// <--------------------------FORM-SECTION-VAR-------------------------->
// *************************************************************************************************

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#msg-text");
const errorMsgContainer = document.querySelector("#errorMsg");
const errorMsg =
  "* Hi there! Please, write the content of the email field in lower case, thanks.*";
const regexPattern =
  /^[a-z0-9.!#$%&'+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)$/;
// *************************************************************************************************
// <--------------------------FUNCTIONS-------------------------->
// *************************************************************************************************
function isValidEmail(emailValue) {
  return regexPattern.test(emailValue);
}

function displayError() {
  errorMsgContainer.classList.add("showError");
  errorMsgContainer.textContent = errorMsg;
}

function deleteErrorMsg() {
  errorMsgContainer.classList.remove("showError");
  errorMsgContainer.innerHTML = "";
}

form.addEventListener("submit", (event) => {
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
  localStorage.setItem("formData", JSON.stringify(formData));
};
nameInput.addEventListener("change", saveDataLocal);
emailInput.addEventListener("change", saveDataLocal);
messageInput.addEventListener("change", saveDataLocal);
window.addEventListener("load", () => {
  const formData = JSON.parse(localStorage.getItem("formData"));
  nameInput.value = formData.name;
  emailInput.value = formData.email;
  messageInput.value = formData.msg;
});
