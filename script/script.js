
const btnRandomNum = document.getElementById("btn-action");
const vincitore = document.getElementById("vincitore");
const enemyNumberEl = document.getElementById("numero-avversario");
const btnResult = document.getElementById("btn-result");


function numRandom() {

    const numeroRandom = Math.floor(Math.random() * 5)+1;

    return numeroRandom;
}

btnRandomNum.addEventListener("click", function () {

    enemyNumberEl.innerHTML= "";
    
    enemyNumberEl.innerHTML= numRandom();

}

)

function sommaNumeri() {
    const numPlayer = document.getElementById("player-input").value;

    const somma = (parseInt(numPlayer) + parseInt(enemyNumberEl.innerHTML));

    return somma;
}

btnResult.addEventListener("click", function () {

    vincitore.innerHTML = "";

    vincitore.innerHTML = sommaNumeri();

    const selectMenu = document.getElementById("select-menu").value;

    if (selectMenu === "Pari" && sommaNumeri() % 2 === 0) {
        vincitore.append(" hai vinto");
    } else if (selectMenu === "Dispari" && sommaNumeri() % 2 === 1) {
        vincitore.append(" hai vinto");
    } else {
        vincitore.append(" hai perso");
    }
}
)



// ESERCIZIO 2

const btnVerifica = document.getElementById("btn-verifica");
const parola = document.getElementById("parola");
const parolafinale = document.getElementById("parolafinale");


btnVerifica.addEventListener("click", function() {
    verificatoreParolaPalindroma();
})


function verificatoreParolaPalindroma() {
    // prendo il valore della parola
    parolaValue = (parola.value);
    // divido il valore con split 
    const parolaDivisa = parolaValue.split("");
    // inverto le lettere ottenute con reverse
    const parolaInvertita = parolaDivisa.reverse();
    // unisco le parole con join("")
    const parolaUnita = parolaInvertita.join("");
    // confronto parola iniziale con ultima
    if (parolaValue === parolaUnita) {
        parolafinale.innerHTML = (parolaValue + " è una parola palindroma.")
    } else {
        parolafinale.innerHTML = (parolaValue + " non è una parola palindroma.")
    }


}