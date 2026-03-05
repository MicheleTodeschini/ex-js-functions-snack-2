console.log('funzia');


/* Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer. */

function contoAllaRovescia(num) {
    console.log(num);



    setTimeout(() => {
        let numero = setInterval(() => {
            num = num - 1
            console.log(num);
            if (num === 0) {
                clearInterval(numero)
                console.log('tempo scaduto');

            }

        }, 1000)


    })

}

contoAllaRovescia(5)

