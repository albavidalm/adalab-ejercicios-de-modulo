"use strict";

const year = 4;
const yearNumber = parseInt(year.innerhtml);

const module = year % 4;
const remainingYear = 4 - module;
const nextYear = year + 4 - module;
console.log(nextYear);

/*if (year % 4 == 0) {
  console.log(`El año ${year} SÍ es un año bisiesto.`);
} else {
  console.log(
    `El año ${year} NO es un año bisiesto. El próximo año bisiesto será XXX`
  );
}
console.log(year % 4);*/
