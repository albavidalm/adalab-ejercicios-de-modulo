"use strict";

const button = document.querySelector(".js-button");

/*button.addEventListener("click", function changeColorButton() {
  if (button.click) {
    button.classList.add("palette1");
    button.classList.remove("palette2");
  } else {
    button.classList.add("palette2");
    button.classList.remove("palette1");
  }
});*/

button.addEventListener("click", function changeColorButton() {
  button.classList.toggle("palette1");
});
