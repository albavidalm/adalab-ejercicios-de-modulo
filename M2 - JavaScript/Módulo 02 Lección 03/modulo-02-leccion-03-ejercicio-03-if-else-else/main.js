"use strict";

let mindNumber = 60;

if (mindNumber === 0) {
  console.log("El número es 0");
} else if (mindNumber < 0) {
  console.log("El número es negativo");
} else if (mindNumber + 2 > 13 && mindNumber <= 20) {
  console.log("El número más 2 es mayor que 13 pero menor o igual que 20");
} else if (mindNumber > 20 && mindNumber < 50) {
  console.log("El número es mayor que 20 pero menor que 50");
} else {
  console.log("el número no es 123123125");
}
