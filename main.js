'use strict';

const prezzoKm = 0.21;
let eta = prompt("Qual'è la tua età?");
let km = prompt("Quanti kilometri hai percorso?");

let prezzo = km * prezzoKm;

if (eta < 18) {
    prezzo *= 0.8;
} else if (eta >= 65) {
    prezzo *= 0.6;
}

prezzo = prezzo.toFixed(2);

console.log(prezzo);
document.write(prezzo);