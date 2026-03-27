/* nav.js — hamburger menu toggle, used on all pages */

var hamburger = document.getElementById("hamburger");
var navLinks  = document.getElementById("nav-links");

hamburger.onclick = function() {
  if (navLinks.classList.contains("open")) {
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
  } else {
    navLinks.classList.add("open");
    hamburger.classList.add("open");
  }
};
