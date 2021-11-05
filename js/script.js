// alert("prova")

// Creo la variabile per la distanza da percorrere
let distanza = parseFloat(prompt("Inserisci distanza da percorrere in Km"));
document.getElementById("totale_distanza").innerHTML = distanza + " Km";

// Creo la variabile per inserire l'età
let età = parseInt(prompt("Inserisci la tua età"));
document.getElementById("totale_eta").innerHTML = età + " anni";

// Creo la costante del prezzo/km
const prezzoKm = 0.21;

// Creo la variabile del prezzo totale del biglietto
let prezzoBiglietto = parseFloat(distanza * prezzoKm);
console.log("Importo totale del biglietto: " + prezzoBiglietto + "€");

// Creo lo sconto in base all'età
if (età < 18) {
    prezzoBigliettoSconto = ((prezzoBiglietto) - (prezzoBiglietto / 100 * 20))
} else if (età > 65) {
    prezzoBigliettoSconto = ((prezzoBiglietto) - (prezzoBiglietto / 100 * 40))
} else {
    prezzoBigliettoSconto = prezzoBiglietto
}
document.getElementById("prezzo_totale").innerHTML = prezzoBigliettoSconto.toFixed(2) + "€";

console.log("Importo con sconto: " + prezzoBigliettoSconto + "€");