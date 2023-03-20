const user = {
  email: 'bartolomej.rozumbrada@gmail.com',
  password: 'vimzenicnevim',
  name: 'Bartoloměj'
}

const form = document.querySelector('form');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (emailInput.value === user.email && passwordInput.value === user.password) {
   
    errorMessage.classList.add('hidden');
    successMessage.textContent = `Logged in as: ${user.name}`;
    successMessage.classList.remove('hidden');
    emailInput.value = '';
    passwordInput.value = '';
  } else {
    errorMessage.classList.remove('hidden');
    successMessage.classList.add('hidden');
    passwordInput.value = '';
  }
});
