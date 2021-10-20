const username = document.querySelector(".username");
const greeting = document.querySelector(".your-name");
const getUserData = localStorage.getItem("createUserData");
const localUserData = JSON.parse(getUserData);
console.log(localUserData);

username.innerHTML = localUserData.fullName;
greeting.innerHTML = localUserData.fullName;
