
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