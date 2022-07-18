const body = document.body;

const passwordInput = body.querySelector('input[id="password"]');
const confirmPasswordInput = body.querySelector('input[id="confirm_password"]');
const passwordMsg = body.querySelector(".password-msg");

passwordInput.addEventListener("input", (e) => {
  if (!confirmPasswordInput.value) return;
  if (passwordInput.value != confirmPasswordInput.value) {
    passwordMsg.style.opacity = 1;
    passwordInput.classList.add("isInvalid");
    confirmPasswordInput.classList.add("isInvalid");
  } else {
    passwordMsg.style.opacity = 0;
    passwordInput.classList.remove("isInvalid");
    confirmPasswordInput.classList.remove("isInvalid");
  }
});

confirmPasswordInput.addEventListener("input", (e) => {
  if (passwordInput.value != confirmPasswordInput.value) {
    passwordMsg.style.opacity = 1;
    passwordInput.classList.add("isInvalid");
    confirmPasswordInput.classList.add("isInvalid");
  } else {
    passwordMsg.style.opacity = 0;
    passwordInput.classList.remove("isInvalid");
    confirmPasswordInput.classList.remove("isInvalid");
  }
});
