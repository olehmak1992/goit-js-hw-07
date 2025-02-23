const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  console.log(`Email: ${email}, Password: ${password}`);
  form.reset();
}
