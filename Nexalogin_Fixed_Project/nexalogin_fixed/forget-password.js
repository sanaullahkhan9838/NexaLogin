// Front-end demonstration only. No reset email is sent.
"use strict";
const resetForm = document.getElementById("resetForm");
const resetEmail = document.getElementById("email");
const resetMessage = document.getElementById("message");

resetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  resetMessage.className = "message";
  if (!resetEmail.value.trim() || !resetEmail.checkValidity()) {
    resetMessage.textContent = "Please enter a valid demo email address.";
    resetMessage.classList.add("error");
    return;
  }
  resetMessage.textContent = "This is a visual demo. No password reset email was sent.";
  resetMessage.classList.add("success");
  resetForm.reset();
});
