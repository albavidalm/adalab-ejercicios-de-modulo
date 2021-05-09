"use strict";
// Ejercicio 01 -------------------

const adalaber1 = {};
adalaber1.name = "Susana";
adalaber1.age = 31;
adalaber1.job = "periodista";
console.log(
  `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`
);
const adalaber2 = {};
adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.job = "actriz";
console.log(
  `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`
);

// Ejercicio 02 Parte 01  -------------------

adalaber1.run = (message) => `${message}`;
console.log(adalaber1.run("Estoy corriendo."));

// Ejercicio 02 parte 02

adalaber1.runAMarathon = (distance) =>
  `Estoy corriendo una maratón de ${distance} kilometros.`;
console.log(adalaber1.runAMarathon(50));

// Ejercicio 03  Parte 01 -------------------

adalaber1.showBio = function () {
  return (
    "Mi nombre es " +
    this.name +
    ", tengo " +
    this.age +
    " años y soy " +
    this.job
  );
};
console.log(adalaber1.showBio());

// Ejercicio 03  Parte 02
adalaber2.showBio = function () {
  return (
    "Mi nombre es " +
    this.name +
    ", tengo " +
    this.age +
    " años y soy " +
    this.job
  );
};
console.log(adalaber2.showBio());
