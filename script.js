// script.js

// Highlight actieve link in navigatie
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.textDecoration = "underline";
  }
});

// Scroll naar boven bij herladen (optioneel)
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
