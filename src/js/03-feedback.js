import throttle from 'lodash.throttle';

import storageManage from './storage';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

formProlongation();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  storageManage.save(STORAGE_KEY, formData);
}

function onFormSubmit(event) {
  event.preventDefault();

  if (!form.elements.email.value || !form.elements.message.value) {
    alert('Необхідно заповнити всі поля');
    return;
  }

  console.log(formData);

  storageManage.remove(STORAGE_KEY);

  event.target.reset();
}

function formProlongation() {
  const storagelValue = storageManage.load(STORAGE_KEY);

  if (storagelValue) {
    form.elements.email.value = storagelValue['email'];
    form.elements.message.value = storagelValue['message'];
  }
}
