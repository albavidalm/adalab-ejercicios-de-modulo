"use strict";

const button = document.querySelector(".button");

const input = document.querySelector(".my-input");
//const inputValue = parseInt(input.value);
//console.log(input.value);

button.addEventListener("click", function sayHi() {
  console.log(`Hola ${input.value}`);
});
