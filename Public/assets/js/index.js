const slideNav = document.querySelector("#slide-nav");
const hamburgerMenu = document.querySelector("#hmg-menu");

hamburgerMenu.addEventListener("click", () => {
  slideNav.style.left = "0";
})

document.addEventListener("click", (e) => {
  if (!slideNav.contains(e.target) && e.target !== hamburgerMenu) {
    slideNav.style.left = "-300px"
  }
})