"use strict";

let dogAge = 10;

let firstYear = 15;
let secondYear = firstYear + 9;
let thirdMore = dogAge * 5 + secondYear;

if (dogAge <= 1) {
  console.log(`Tiene: ${dogAge} año que son ${firstYear} años humanos.`);
} else if (dogAge === 2) {
  console.log(`Tiene: ${dogAge} años que son ${secondYear} años humanos.`);
} else {
  console.log(`Tiene: ${dogAge} años que son ${thirdMore} años humanos.`);
}
