'use strict';

//Set price per km
const prezzoKm = 0.21;



//Prompts to receive the two variables eta and km 
let eta = prompt("Qual'è la tua età?");
let km = prompt("Quanti kilometri hai percorso?");

let prezzo = km * prezzoKm; //Calculate price from total km and price/km

if (eta < 18) {
    prezzo *= 0.8;  
} //Apply discount for people under 18



else if (eta >= 65) {
    prezzo *= 0.6;
} //Apply discount for people over 65


prezzo = prezzo.toFixed(2); //Limit to two decimals

console.log(prezzo);
document.write(prezzo);