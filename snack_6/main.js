console.log('funzia');


/* Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo. */

setInterval(creaContatoreAutomatico, 1000)

let counter = 0

function creaContatoreAutomatico() {
    console.log(counter++);


}