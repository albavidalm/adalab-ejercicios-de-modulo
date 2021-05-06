"use strict";

const messageContent = document.querySelector(".js-content");
const titleAdvice = document.querySelector(".js-title");
const messageAdvice = document.querySelector(".js-message");

if (messageContent.classList.contains("warning")) {
  titleAdvice.innerHTML = "AVISO";
  messageAdvice.innerHTML = "Tenga cuidado";
} else if (messageContent.classList.contains("error")) {
  titleAdvice.innerHTML = "ERROR";
  messageAdvice.innerHTML = "Ha surgido un error";
} else if (messageContent.classList.contains("success")) {
  titleAdvice.innerHTML = "CORRECTO";
  messageAdvice.innerHTML = "Los datos son correctos";
}

if (messageContent.classList.contains("success")) {
  messageContent.classList.remove("warning");
} else {
  messageContent.classList.add("warning");
}
