const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');

const localStorageValue = localStorage.getItem('feedback-form-state') ?? '';

if (localStorageValue === '') {
  form.elements.email.value = localStorageValue;
  form.elements.message.value = localStorageValue;
  formData.email = localStorageValue;
  formData.message = localStorageValue;
} else {
  const localStorageParse = JSON.parse(localStorageValue);
  form.elements.email.value = localStorageParse.email;
  form.elements.message.value = localStorageParse.message;
  formData.email = localStorageParse.email;
  formData.message = localStorageParse.message;
}

const handleInput = event => {
  const targetName = event.target.name;

  if (
    targetName ===
    Object.keys(formData)[Object.keys(formData).indexOf(targetName)]
  ) {
    formData[targetName] = event.target.value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

form.addEventListener('input', handleInput);

const handleSubmit = event => {
  event.preventDefault();
  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  } else {
    alert('Fill please all fields');
  }
};

form.addEventListener('submit', handleSubmit);
