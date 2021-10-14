const header = document.querySelector(".header");

window.onload = () => {
  let isScrolling = false;

  document.addEventListener("scroll", () => {
    if (window.pageYOffset === 0) {
      isScrolling;
      header.classList.remove("isScrolling");
    } else {
      isScrolling = true;
      header.classList.add("isScrolling");
    }
  });
};

// function navLinkCloseMenu() {
//   document.querySelector(".open").style.display = "block";
//   document.querySelector(".close").style.display = "none";
// }

// * function to open the dropdown menu on smaller screens
// function navLinkOpenMenu() {
//   document.querySelector(".open").style.display = "none";
//   document.querySelector(".close").style.display = "block";
// }
// const menu = document.querySelector(".burger-menu");
// menu.addEventListener("click", function () {
//   if (document.querySelector(".open").style.display === "none") {
//     navLinkCloseMenu();
//   } else {
//     navLinkOpenMenu();
//   }
// });

const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});