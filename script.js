const header = document.querySelector(".header");
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
const loginButton = document.querySelector("#loginButton");
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const submitForm = document.querySelector("#submitForm");
const alert = document.querySelector(".alert");
const closeAlert = document.querySelector(".close-btn");
const showTheAlert = document.querySelector(".showTheAlert");
const searchButton = document.querySelector(".searchButton");

window.onload = () => {
  document.querySelector(".preloader").style.display = "none";
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

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Form Submitted");

  alert.classList.remove("hideAlert");
  alert.classList.add("showAlert");
  alert.classList.add("showTheAlert");

  setTimeout(() => {
    alert.classList.add("hideAlert");
    alert.classList.remove("showAlert");
    alert.classList.remove("showTheAlert");
  }, 3000);
});

closeAlert.addEventListener("click", () => {
  alert.classList.add("hideAlert");
  alert.classList.remove("showAlert");
  alert.classList.remove("showTheAlert");
});

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

// Function to change between Login and Create Account

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("active");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove("active");
  });
}

function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });
}

tabItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

// MAP FUNCTIONALITY
