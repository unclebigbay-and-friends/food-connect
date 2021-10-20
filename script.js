const header = document.querySelector(".header");
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");
const loginButton = document.querySelector("#loginButton");
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const loginForm = document.querySelector("#login-content");
const createForm = document.querySelector("#signUp-content");
const submitForm = document.querySelector("#submitForm");
const alert = document.querySelector(".alert");
const closeAlert = document.querySelector(".close-btn");
const showTheAlert = document.querySelector(".showTheAlert");
const alertMessage = document.querySelector(".message");
const searchButton = document.querySelector(".searchButton");

// INPUT FIELDS
const fullName = document.querySelector("#fullName");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const emailCreate = document.querySelector("#emailCreate");
const password = document.querySelector("#password");
const passwordCreate = document.querySelector("#passwordCreate");
const confirmPassword = document.querySelector("#confirmPassword");

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

const notifyAlert = (message) => {
  alert.classList.remove("hideAlert");
  alert.classList.add("showAlert");
  alert.classList.add("showTheAlert");
  alertMessage.innerHTML = message;

  setTimeout(() => {
    alert.classList.add("hideAlert");
    alert.classList.remove("showAlert");
    alert.classList.remove("showTheAlert");
  }, 3000);
};

// Function to change between Login and Create Account

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("active");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
  console.log(tabContentItem);
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

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (loginForm) {
    const userLogin = {
      email: email.value,
      password: password.value,
    };

    console.log(userLogin);

    console.log("Form Submitted");
    notifyAlert("Invalid Credentials. Please try again.");
  } else if (createForm) {
    const createUser = {
      fullName: fullName.value,
      phone: phone.value,
      email: emailCreate.value,
      password: passwordCreate.value,
      confirmPassword: confirmPassword.value,
    };

    console.log(createUser);
  }
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

// MAP FUNCTIONALITY
