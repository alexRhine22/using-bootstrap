let mobileNavButton = document.getElementById("mobile-button");
let asideNav = document.getElementById("aside-nav");
let header = document.getElementById("js-header");

mobileNavButton.addEventListener("click", (e) => {
  mobileNavButton.classList.toggle("active");
  asideNav.classList.toggle("active");
});

let scrollPosY = window.scrollY;
window.addEventListener("scroll", (e) => {
  scrollPosY = window.scrollY;
  if (scrollPosY > 0) {
    header.classList.add("scrolled");
    asideNav.classList.remove("unscrolled");
  } else {
    header.classList.remove("scrolled");
    asideNav.classList.add("unscrolled");
  }
});
