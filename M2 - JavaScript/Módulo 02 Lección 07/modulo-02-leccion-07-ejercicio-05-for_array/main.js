"use strict";

let numbers = [1, 13, 5, 7, 3];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i];
}
let media = acc / numbers.length;
console.log("La puntuación final es " + media);
