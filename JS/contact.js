/* contact.js — form validation */

var form = document.getElementById("contact-form");
var successBanner = document.getElementById("success-banner");

form.onsubmit = function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var message = document.getElementById("message").value.trim();

  var isValid = true;

  // Name — must not be empty
  if (name === "") {
    document.getElementById("name").style.borderColor = "var(--secondary)";
    document.getElementById("name-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("name").style.borderColor = "";
    document.getElementById("name-error").style.display = "none";
  }

  // Email — must have text, then @, then text, then dot, then text
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  var emailOk = atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;

  if (!emailOk) {
    document.getElementById("email").style.borderColor = "var(--secondary)";
    document.getElementById("email-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("email").style.borderColor = "";
    document.getElementById("email-error").style.display = "none";
  }

  // Subject — must not be empty
  if (subject === "") {
    document.getElementById("subject").style.borderColor = "var(--secondary)";
    document.getElementById("subject-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("subject").style.borderColor = "";
    document.getElementById("subject-error").style.display = "none";
  }

  // Message — at least 20 characters
  if (message.length < 20) {
    document.getElementById("message").style.borderColor = "var(--secondary)";
    document.getElementById("message-error").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("message").style.borderColor = "";
    document.getElementById("message-error").style.display = "none";
  }

  // All good — show success banner and clear the form
  if (isValid) {
    successBanner.style.display = "block";
    form.reset();
  }
};
