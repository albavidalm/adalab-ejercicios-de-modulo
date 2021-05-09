"use strict";
/*
const move = document.querySelector(".text");

window.addEventListener("scroll", function changecolor() {
  console.log(`Hola`);
  if (window.scrollY >= 250) {
    move.classList.add("pink");
    move.classList.remove("teal");
  } else {
    move.classList.remove("pink");
    move.classList.add("teal");
  }
});
*/

const move = document.querySelector(".text");

function changecolor() {
  console.log(`Hola`);
  if (window.scrollY >= 250) {
    move.classList.add("pink");
    move.classList.remove("teal");
  } else {
    move.classList.remove("pink");
    move.classList.add("teal");
  }
}

move.addEventListener("scroll", changeColor);
