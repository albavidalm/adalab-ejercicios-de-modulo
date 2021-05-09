"use strict";

const pearsBasket = {
  max: 13,
  min: 1,
  now: 5,
  initial: 3,
};

// Añadir 1 pera
pearsBasket.addingOnePear = function () {
  pearsBasket.now += 1;
  return `Has añadido 1, ahora tienes ${pearsBasket.now} peras.`;
};
console.log(pearsBasket.addingOnePear());

// Quitar 1 pera
pearsBasket.removingOnePear = function () {
  pearsBasket.now -= 1;
  return `Has quitado 1, ahora tienes ${pearsBasket.now} peras.`;
};
console.log(pearsBasket.removingOnePear());

//Restablecer el valor
pearsBasket.resetPear = function () {
  pearsBasket.now = pearsBasket.initial;
  return `Has reseteado, tienes ${pearsBasket.now} peras.`;
};
console.log(pearsBasket.resetPear());
