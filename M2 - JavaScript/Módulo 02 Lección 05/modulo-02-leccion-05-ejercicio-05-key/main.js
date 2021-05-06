"use strict";

const bodyClass = document.querySelector(".bg");
function handleKey(event) {
  //console.log("Hola");
  if (event.key === "r") {
    //console.log("R");
    bodyClass.classList.add("red");
    bodyClass.classList.remove("purple");
  } else if (event.key === "w") {
    //console.log("W");
    bodyClass.classList.add("purple");
    bodyClass.classList.remove("red");
  }
}

document.addEventListener("keypress", handleKey);
