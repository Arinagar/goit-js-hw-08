const formEl = document.querySelector('.feedback-form');
const vaultKey = 'feedback-form-state';
const userData = {};

function fillContactFormElements() {
  const userDataFromLS = JSON.parse(localStorage.getItem(vaultKey));

  for (let prop in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(prop)) {
      formEl.elements[prop].value = userDataFromLS[prop];
    }
  }
}

if (localStorage.length !== 0) {
  fillContactFormElements();
}

function onInputChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  userData[name] = value;

  localStorage.setItem(vaultKey, JSON.stringify(userData));
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  console.log(userData);
  localStorage.removeItem(vaultKey);
}

formEl.addEventListener('input', _.throttle(onInputChange, 500));
formEl.addEventListener('submit', onFormSubmit);
