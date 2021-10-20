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
const emailLogin = document.querySelector("#emailLogin");
const emailCreate = document.querySelector("#emailCreate");
const passwordLogin = document.querySelector("#passwordLogin");
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

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
  let tabContentItem = "login-content";
  console.log(tabContentItem);

  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (tabContentItem === "login-content") {
      const userLogin = {
        email: emailLogin.value,
        password: passwordLogin.value,
      };
    } else {
      return null;
    }
  });
});

// Function to change between Login and Create Account

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("active");
  tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");

  function convertToObject(obj) {
    obj = {};
    for (var p in tabContentItem) {
      obj[p] = tabContentItem[p];
    }
    return obj;
  }

  result = Object.assign(convertToObject(tabContentItem), {
    get: `${this.id}-content`,
  });

  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const getUserData = localStorage.getItem("createUserData");
    const localUserData = JSON.parse(getUserData);

    console.log(localUserData);

    if (result.get === "login-content") {
      const userLogin = {
        email: emailLogin.value,
        password: passwordLogin.value,
      };

      if (emailLogin.value === "" || passwordLogin.value === "") {
        return notifyAlert("Invalid credentials.");
      } else {
        console.log(userLogin);
        notifyAlert("You are logged in. Wait 3 seconds.");
        setTimeout(() => {
          return (window.location = "/dashboard.html");
        }, 3000);
      }
    } else if (result.get === "signUp-content") {
      e.preventDefault();

      const createUser = {
        fullName: fullName.value,
        phone: phone.value,
        email: emailCreate.value,
        password: passwordCreate.value,
        confirmPassword: confirmPassword.value,
      };

      if (
        fullName.value === "" ||
        phone.value === "" ||
        passwordCreate.value === "" ||
        passwordCreate.value === "" ||
        confirmPassword.value === ""
      ) {
        return notifyAlert("All fields are required.");
      } else if (passwordCreate.value.length < 6) {
        return notifyAlert("Password must be at least 6 characters long.");
      } else if (passwordCreate.value !== confirmPassword.value) {
        return notifyAlert("Passwords do not match.");
      } else {
        console.log(createUser);
        const createUserJSON = JSON.stringify(createUser);
        localStorage.setItem("createUserData", createUserJSON);
        notifyAlert("You have successfully created an account!");

        setTimeout(() => {
          return (window.location = "/dashboard.html");
        }, 3000);
      }
    }
  });
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

closeAlert.addEventListener("click", () => {
  alert.classList.add("hideAlert");
  alert.classList.remove("showAlert");
  alert.classList.remove("showTheAlert");
});
