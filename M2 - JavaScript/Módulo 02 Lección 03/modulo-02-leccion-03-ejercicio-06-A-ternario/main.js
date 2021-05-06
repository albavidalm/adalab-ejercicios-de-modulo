"use strict";

/* //TERNARIO HALLOWEN
const theme = 'hallowen';
const fontColor = theme === 'hallowen' ? '#ff5722' : '#000';
*/

/* //HALLOWEN IF ELSE
const theme = "hallowen";
let fontColor;
if (theme === "hallowen") {
  fontColor = "#ff5722";
} else {
  theme = "#000";
}
*/

/* // AVOCADOS IF ELSE
let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}
console.log(avocados);
*/

// TERNARIO AVOCADOS
const avocadoPrice = 1.5;
const money = 33;
const avocados = money >= avocadoPrice ? money / avocadoPrice : 0;

console.log(avocados);
