console.log('funzia');


/* Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!". */

/* const tempo = prompt('Inserisci millisecondi')
console.log(tempo); */

function tempoScaduto() {
    console.log("tempo scaduto");
}


const fine = setTimeout(tempoScaduto, 5000)


