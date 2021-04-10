const hamburgerMenu = document.getElementById("hamburger");
const navBar = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("show");
});
