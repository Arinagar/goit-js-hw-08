const formEl = document.querySelector('.feedback-form');
const vaultKey = 'feedback-form-state';
const userData = {};

function fillContactFormElements() {
  const savedData = localStorage.getItem(vaultKey);
  if (savedData) {
    const userDataFromLS = JSON.parse(savedData);
    Object.entries(userDataFromLS).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}

if (localStorage.length !== 0) {
  fillContactFormElements();
}

function onInputChange(event) {
  let savedData = localStorage.getItem(vaultKey);
  savedData = savedData ? JSON.parse(savedData) : {};
  const name = event.target.name;
  const value = event.target.value;

  savedData[name] = value;

  localStorage.setItem(vaultKey, JSON.stringify(savedData));
}

function onFormSubmit(event) {
  event.preventDefault();
  const submitedData = new FormData(formEl);
  submitedData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);
  localStorage.removeItem(vaultKey);
  event.target.reset();
}

formEl.addEventListener('input', _.throttle(onInputChange, 500));
formEl.addEventListener('submit', onFormSubmit);
