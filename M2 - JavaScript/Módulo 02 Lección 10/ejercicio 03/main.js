"use strict";

const url = "https://api.github.com/users/";
const button = document.querySelector(".js-search");

function searchUsers() {
  const username = document.querySelector(".js-input").value;
  fetch(url + username)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-input").innerHTML = data.login;
    });
}
//searchUsers();

button.addEventListener("click", searchUsers);
