console.log('funzia');

/* Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop. */

function eseguiEferma(messaggio, tempoAvvio, tempoStop) {


    setTimeout(() => {

        const intervallo = setInterval(() => {
            console.log(messaggio);
        }, 1000);


        setTimeout(() => {
            clearInterval(intervallo);
            console.log("Timer fermato");
        }, tempoStop);

    }, tempoAvvio);
}

eseguiEferma("Ciao a tutti", 2000, 5000);

function eseguiEferma(messaggio, tempoAvvio, tempoStop) {
    setTimeout(() => {
        const intervallo = setInterval(() => {
            console.log(messaggio);

        }, 1000)
        setTimeout(() => {
            clearInterval(intervallo)
            console.log('finito');

        }, tempoStop)
    }, tempoAvvio)
}

eseguiEferma("gasing", 1000, 6000)