const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.textDecoration = "underline";
  }
});

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};
function acceptCookies() {
  document.getElementById("cookie-banner").style.display = "none";
  localStorage.setItem("cookiesAccepted", "true");
}

window.onload = function () {
  if (localStorage.getItem("cookiesAccepted") !== "true") {
    document.getElementById("cookie-banner").style.display = "flex";
  } else {
    document.getElementById("cookie-banner").style.display = "none";
  }
};

