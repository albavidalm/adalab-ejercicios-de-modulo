"use strict";

const input = document.querySelector(".my-input");
const wrote = document.querySelector(".paragraph");

function handleTakeInfo(event) {
  //console.log(input);
  const letter = event.currentTarget.value;
  //console.log(letter);
  wrote.innerHTML = letter;
}

input.addEventListener("keyup", handleTakeInfo);
