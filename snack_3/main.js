console.log('funzia');


/* Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri. */

const somma = (num1, num2) => num1 + num2

const eseguiOperazione = (num1, num2, operazione) => {
    return operazione(num1, num2)
}

console.log(eseguiOperazione(5, 7, somma));
