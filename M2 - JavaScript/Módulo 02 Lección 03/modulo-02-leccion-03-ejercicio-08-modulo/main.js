"use strict";

const year = 3;
const yearNumber = parseInt(year.innerhtml);

if (year % 4 == 0) {
  console.log(`El año ${year} SÍ es un año bisiesto.`);
} else {
  console.log(
    `El año ${year} NO es un año bisiesto. El próximo año bisiesto será XXX`
  );
}
console.log(year % 4);
