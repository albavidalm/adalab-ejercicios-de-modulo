"use strict";

function getEl(selector) {
  console.log(selector);
  return document.querySelector(".js-number");
}

/*const numberElement = document.querySelector("js-number");
console.log(numberElement);*/

/*function getEl2(){
  return document.querySelector('js-text');
}*/
const numberElement = getEl("holi");
console.log(numberElement);
