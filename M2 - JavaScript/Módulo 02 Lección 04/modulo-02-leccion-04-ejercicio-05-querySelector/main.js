"use strict";

function getEl(selection) {
  //console.log(selection);
  return document.querySelector(selection);
}
const returnedClass = getEl(".title");
//console.log(returnedClass);
returnedClass.innerHTML = "Soy un nuevo título";
