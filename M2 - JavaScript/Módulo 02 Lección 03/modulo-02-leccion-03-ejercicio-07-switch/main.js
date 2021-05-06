"use strict";

let ingredient = "Merluza";

switch (ingredient) {
  case "Pollo":
    console.log(
      "Tu ingrediente es pollo, puedes hacerte un filete con patatas"
    );
    break;
  case "Merluza":
    console.log(
      "Tu ingrediente es merluza, puedes prepararte una merluzita en salsa verde"
    );
    break;
  case "Espinacas":
    console.log(
      "Tu ingrediente son las espinacas, puedes cocinar espinacas rehogadas"
    );
    break;
  default:
    console.log("Nada en la nevera");
}
