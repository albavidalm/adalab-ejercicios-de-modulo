"use strict";

const ageJS = document.querySelector(".age");
const ageToNumber = parseInt(ageJS.innerHTML);
const daysYear = 365;
const hoursDay = 24;

const totalHours = ageToNumber * daysYear * hoursDay;
console.log("Total horas: " + totalHours);
