"use strict";

const kiloKiwi = document.querySelector(".kilos-kiwi");
const euroKiwi = document.querySelector(".price-kiwi");
const totalKiwi = kiloKiwi.innerHTML * euroKiwi.innerHTML;

const kiloPera = document.querySelector(".kilos-peras");
const euroPera = document.querySelector(".price-peras");
const totalPera = kiloPera.innerHTML * euroPera.innerHTML;

const kiloUva = document.querySelector(".kilos-uvas");
const euroUva = document.querySelector(".price-uvas");
const totalUva = kiloUva.innerHTML * euroUva.innerHTML;

const totalTicket = totalKiwi + totalPera + totalUva;
console.log("Total Ticket " + totalTicket + "€");
