"use strict";

const mouse = document.querySelector(".lorem-ipsum");

mouse.addEventListener("mouseover", function addLorem() {
  console.log(`Hola`);
  mouse.innerHTML += `<p>¿A quién no le gusta un Batisterio Romano del Siglo I?</p>`;
});
