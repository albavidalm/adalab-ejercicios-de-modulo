"use strict";

/*function price(a) {
  const iva = a * 0.21;
  const withoutIva = a;
  return iva;
}
const priceiva = price(10);

console.log(`IVA: ${priceiva}`);*/

function tax(price) {
  const iva = price * 0.21;
  const total = price + iva;
  const message = `Precio sin IVA: ${price}€, IVA: ${iva} y Total: ${total}€ `;
  return message;
}

console.log(tax(10));
