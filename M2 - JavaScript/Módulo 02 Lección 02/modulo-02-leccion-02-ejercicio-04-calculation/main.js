"use strict";

const totalCuenta = 128;
const totalPersonas = 9;
const diferenciaAna = 2;
const precioPersona = (totalCuenta - diferenciaAna) / totalPersonas;
console.log("Precio por persona: " + precioPersona + "€");
console.log("Ana tiene que pagar: " + (precioPersona + diferenciaAna) + "€");
