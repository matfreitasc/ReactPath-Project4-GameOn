function editNav() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground');
const modalSubmitted = document.querySelector('.bground_submitted');
const modalBtn = document.querySelectorAll('.modal-btn');
const formData = document.querySelectorAll('.formData');
const form = document.querySelector('form');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = 'block';
}
// Close Modal
function closeModal() {
  modalbg.style.display = 'none';
  modalSubmitted.style.display = 'none';
}
const close = document.querySelector('.close-x');
close.addEventListener('click', closeModal);
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);

// Form Validation

// First Name
function firstName() {
  let firstName = document.forms['reserve']['first'];
  if (
    firstName.value == '' ||
    firstName.value == null ||
    firstName.value.length < 2
  ) {
    formData[0].setAttribute('data-error-visible', 'true');
    return false;
  } else {
    formData[0].setAttribute('data-error-visible', 'false');

    return true;
  }
}
document.forms['reserve']['first'].addEventListener('blur', firstName);
document.forms['reserve']['first'].addEventListener('keyup', firstName);

// Last Name
function lastName() {
  let lastName = document.forms['reserve']['last'];
  if (
    lastName.value == '' ||
    lastName.value == null ||
    lastName.value.length < 2
  ) {
    formData[1].setAttribute('data-error-visible', 'true');
    return false;
  } else {
    formData[1].setAttribute('data-error-visible', 'false');
    return true;
  }
}
document.forms['reserve']['last'].addEventListener('blur', lastName);
document.forms['reserve']['last'].addEventListener('keyup', lastName);

// Email Address using regex

function validateEmail() {
  let email = document.forms['reserve']['email'];
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailRegex.test(email.value)) {
    formData[2].setAttribute('data-error-visible', 'false');
    return true;
  } else {
    formData[2].setAttribute('data-error-visible', 'true');
    return false;
  }
}
document.forms['reserve']['email'].addEventListener('blur', validateEmail);
document.forms['reserve']['email'].addEventListener('keyup', validateEmail);

// Birthday validation using regex
function validateBithday() {
  let birthday = document.forms['reserve']['birthdate'];
  let birthdayRegex =
    /^(19[0-9]{2}|2[0-9]{3})-(0[1-9]|1[012])-([123]0|[012][1-9]|31)$/;
  if (birthday.value.match(birthdayRegex)) {
    formData[3].removeAttribute('data-error-visible');
    return true;
  } else {
    formData[3].setAttribute('data-error-visible', 'true');
    return false;
  }
}

// Validate Tournament Selection
function validateTournament() {
  let tournament = document.forms['reserve']['quantity'];
  if (tournament.value == '' || tournament.value == null) {
    formData[4].setAttribute('data-error-visible', 'true');
    return false;
  } else {
    formData[4].setAttribute('data-error-visible', 'false');
    return true;
  }
}
document.forms['reserve']['quantity'].addEventListener(
  'blur',
  validateTournament
);
document.forms['reserve']['quantity'].addEventListener(
  'keyup',
  validateTournament
);

// Validate Location Selection
function validateLocation() {
  let location = document.forms['reserve']['location'];
  if (
    location[0].checked == false &&
    location[1].checked == false &&
    location[2].checked == false &&
    location[3].checked == false &&
    location[4].checked == false
  ) {
    formData[5].setAttribute('data-error-visible', 'true');
    return false;
  } else {
    formData[5].setAttribute('data-error-visible', 'false');
    return true;
  }
}

// Validate Terms
function validateTerms() {
  let terms = document.forms['reserve']['checkbox1'];
  if (terms.checked == false) {
    formData[6].setAttribute('data-error-visible', 'true');
    return false;
  } else {
    formData[6].setAttribute('data-error-visible', 'false');
    return true;
  }
}

// Validate Form
let criteriaCheck = false;

function validate() {
  if (
    firstName() &&
    lastName() &&
    validateEmail() &&
    validateBithday() &&
    validateTournament() &&
    validateLocation() &&
    validateTerms()
  ) {
    criteriaCheck = true;
    return true;
  } else {
    return false;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validate();
  if (criteriaCheck == true) {
    modalbg.style.display = 'none';
    modalSubmitted.style.display = 'block';
  }
});
