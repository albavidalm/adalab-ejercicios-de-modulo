"use strict";

/*const button = document.querySelector(".button");
button.addEventListener("click", function sayole() {
  console.log("ole tu");
  const holi = document.querySelector(".text");
  holi.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
});
*/

const button = document.querySelector(".button");
const holi = document.querySelector(".text");
button.addEventListener(
  "click",
  () => (holi.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!")
);
