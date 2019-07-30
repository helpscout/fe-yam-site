const webinarRegisterButtons = document.getElementsByClassName('webinar-register-button');
const webinarRegisterModal = document.getElementById('webinar-register-modal');
const webinarRegisterModalDateTime = document.getElementById('webinar-register-modal-date-time');
const webinarRegisterModalKeyInput = document.getElementById('webinar-register-modal-key-input');

function closeWebinarRegisterForm() {
  // This could also use an `ontransitionend` handler, but that is risky without a polyfill
  setTimeout(function() {
    webinarRegisterModal.style.display = 'none';
  }, 500);

  webinarRegisterModal.classList.remove('animate-in');  
}

function openWebinarRegisterForm(dateTime, webinarKey) {
  webinarRegisterModalDateTime.innerText = dateTime;
  webinarRegisterModalKeyInput.value = webinarKey;

  webinarRegisterModal.style.display = 'flex';
  webinarRegisterModal.classList.add('animate-in');
}

function buttonClickHandler(e) {
  const dateTime = e.target.dataset.dateTime;
  const webinarKey = e.target.dataset.webinarKey;

  e.preventDefault();

  openWebinarRegisterForm(dateTime, webinarKey);
}

function modalClickHandler(e) {
  if (e.target === webinarRegisterModal) {
    closeWebinarRegisterForm();
  }
}

for (var i = 0; i < webinarRegisterButtons.length; i++) {
  webinarRegisterButtons[i].addEventListener('click', buttonClickHandler);
}

webinarRegisterModal.addEventListener('click', modalClickHandler);
