"use strict";

const button = document.querySelector(".js-button");
function showEvent(event) {
  console.log(event);
}
button.addEventListener("click", showEvent);

/* El evento es el cambio que sufrirá el elemento, en este caso el botón.
Type será la propiedad que tendrá el evento, aquí será que el evento que escuchamos
sobre el botón será con la propiedad 'click'.
*/
