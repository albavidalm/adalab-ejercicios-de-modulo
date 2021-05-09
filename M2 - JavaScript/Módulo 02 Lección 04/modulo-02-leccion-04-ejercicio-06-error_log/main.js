"use strict";

function getEl(selection) {
  const pickedHtml = document.querySelector(selection);
  //console.log(pickedHtml);
  if (pickedHtml === null) {
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${selection}`
    );
  } else {
    return selection;
  }
}
const returnedClass = getEl(".le");
//console.log(returnedClass);
//returnedClass.innerHTML = "Soy un nuevo título";
