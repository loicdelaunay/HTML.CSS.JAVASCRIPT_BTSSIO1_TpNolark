




document.querySelector("#myrange").addEventListener('change', function () {
    document.querySelector("#myoutput").value = document.querySelector("#myrange").value;
});

document.querySelector("#myButton").addEventListener('click',function (){
    var distance = parseInt(document.querySelector("#distance").value);
    var anciennete = parseInt(document.querySelector("#anciennete").value);
    var accident = parseInt(document.querySelector("#myrange").value);
    document.querySelector("#estimation").innerHTML = "Estimation de votre prime : "+recupPrimeAnnuelle(recupPrimeAncien(anciennete),recupPrimeDist(distance),accident);
});

/**
 *
 * @param distance
 * @returns {number}
 */
function recupPrimeDist(distance) {
    const gainKilometre = 0.01;
    const plafond = 900;
    if (distance < 0) {
        return 0;
    }
    if (gainKilometre * distance > plafond) {
        return plafond;
    }
    return gainKilometre * distance;
}

/**
 * 
 * @param {type} anciennete
 * @returns {Number}
 */
function recupPrimeAncien(anciennete) {
    const ancienneteMinimum = 4;
    if (anciennete < ancienneteMinimum) {
        return 0;
    }
    return 300 + (anciennete - ancienneteMinimum) * 30;
}

/**
 * 
 * @param {Number} prime
 * @param {Number} prime2
 * @param {Number} nombreAccident
 * @returns {Number}
 */
function recupPrimeAnnuelle(prime, prime2, nombreAccident) {
    switch (nombreAccident) {
        case 0:
            return prime + prime2;
            break;
        case 1:
            return Math.round((prime + prime2) / 2*100)/100;
            break;
        case 2:
            return Math.round((prime + prime2) / 3*100)/100;
            break;
        case 3:
            return Math.round((prime + prime2) / 4*100)/100;
            break;
        case 4:
            return 0;
            break
        default:
            return 0;
            break;
    }
}