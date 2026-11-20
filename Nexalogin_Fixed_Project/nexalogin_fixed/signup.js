// Front-end demonstration only. No data is stored or transmitted.
"use strict";
const form = document.getElementById("signupForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const messageEl = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  messageEl.className = "message";
  if (!nameField.value.trim() || !emailField.value.trim() || !passwordField.value) {
    messageEl.textContent = "Please complete all demo fields.";
    messageEl.classList.add("error");
    return;
  }
  if (!emailField.checkValidity()) {
    messageEl.textContent = "Please enter a valid demo email address.";
    messageEl.classList.add("error");
    return;
  }
  if (passwordField.value.length < 8) {
    messageEl.textContent = "Demo password must contain at least 8 characters.";
    messageEl.classList.add("error");
    return;
  }
  messageEl.textContent = "Form validation passed. No account was created and no information was sent or saved.";
  messageEl.classList.add("success");
  form.reset();
});
