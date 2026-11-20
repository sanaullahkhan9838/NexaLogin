// Front-end demonstration only. No credentials are stored or transmitted.
"use strict";

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");
const googleDemo = document.getElementById("googleDemo");

if (togglePassword && passwordInput) {
  togglePassword.addEventListener("click", () => {
    const showing = passwordInput.type === "password";
    passwordInput.type = showing ? "text" : "password";
    togglePassword.textContent = showing ? "Hide" : "Show";
    togglePassword.setAttribute("aria-label", showing ? "Hide demo password" : "Show demo password");
    togglePassword.setAttribute("aria-pressed", String(showing));
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    message.className = "message";

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
      message.textContent = "Please fill in both demo fields.";
      message.classList.add("error");
      return;
    }

    if (!emailInput.checkValidity()) {
      message.textContent = "Please enter a valid demo email address.";
      message.classList.add("error");
      return;
    }

    if (password.length < 8) {
      message.textContent = "Demo password must contain at least 8 characters.";
      message.classList.add("error");
      return;
    }

    message.textContent = "Front-end validation passed. No account was accessed and no information was sent or saved.";
    message.classList.add("success");
    passwordInput.value = "";
  });
}

if (googleDemo) {
  googleDemo.addEventListener("click", () => {
    message.className = "message";
    message.textContent = "Google sign-in is not connected in this educational demo.";
  });
}
