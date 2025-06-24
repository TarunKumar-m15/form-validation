const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Error display areas
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Event listener on form submit
form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent default form submission
  validateForm();
});

// Main validation function
function validateForm() {
  let isValid = true;

  // Clear previous errors
  clearErrors();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // Name Validation
  if (name.length < 5) {
    nameError.textContent = 'Name must be at least 5 characters long';
    isValid = false;
  }

  // Email Validation
  if (!email.includes('@')) {
    emailError.textContent = 'Enter a valid email address';
    isValid = false;
  }

  // Phone Validation
  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone) || phone === '1234567890') {
    phoneError.textContent = 'Enter a valid 10-digit phone number';
    isValid = false;
  }

  // Password Validation
  if (
    password.length < 8 ||
    password.toLowerCase() === 'password' ||
    password.toLowerCase() === name.toLowerCase()
  ) {
    passwordError.textContent = 'Password is not strong enough';
    isValid = false;
  }

  // Confirm Password Validation
  if (confirmPassword !== password) {
    confirmPasswordError.textContent = 'Passwords do not match';
    isValid = false;
  }

  // Final check
  if (isValid) {
    alert('Form Submitted Successfully!');
    form.reset();
  }
}

// Clear all error messages
function clearErrors() {
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  passwordError.textContent = '';
  confirmPasswordError.textContent = '';
}