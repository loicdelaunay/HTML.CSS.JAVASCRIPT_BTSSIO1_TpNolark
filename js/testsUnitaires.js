function assert(message,test) {
    var p = document.createElement('p');
    if (test) {
        message += ' : OK';
        p.style.color = 'green';
    } else {
        message += ' : ERREUR !!!!';
        p.style.color = 'red';
    }
    p.innerHTML = message;
    document.body.appendChild(p);
}

/* *************************************
 * Mes tests !
 * 
 */
/* Rémunération Nolark */

/* Livr'Express */
assert('recupPrimeDist : Avec 0 = 0€', recupPrimeDist(0) === 0);
assert('recupPrimeDist : Avec 1 = 0.01€', recupPrimeDist(1) === 0.01);
assert('recupPrimeDist : Avec 89999 = 899.99€', recupPrimeDist(89999) === 899.99);
assert('recupPrimeDist : Avec 90000 = 900€', recupPrimeDist(90000) === 900);
assert('recupPrimeDist : Avec 90001 = 900€', recupPrimeDist(90001) === 900);
assert('recupPrimeAncien : Avec 0 = 0€', recupPrimeAncien(0) === 0);
assert('recupPrimeAncien : Avec 1 = 0€', recupPrimeAncien(1) === 0);
assert('recupPrimeAncien : Avec 4 = 300€', recupPrimeAncien(4) === 300);
assert('recupPrimeAncien : Avec 5 = 330€', recupPrimeAncien(5) === 330);
assert('recupPrimeAncien : Avec 6 = 360€', recupPrimeAncien(6) === 360);
assert('recupPrimeAnnuelle : Avec 0€ = 0', recupPrimeAnnuelle(0,0,0) === 0);
assert('recupPrimeAnnuelle : Avec 0 accident = addition', recupPrimeAnnuelle(1,1,0) === 2);
assert('recupPrimeAnnuelle : Avec 1 accident = /2', recupPrimeAnnuelle(1,1,1) === 1);
assert('recupPrimeAnnuelle : Avec 2 accidents = /3', recupPrimeAnnuelle(1,1,2) === 0.67);
assert('recupPrimeAnnuelle : Avec 3 accidents = /4', recupPrimeAnnuelle(1,1,3) === 0.5);
assert('recupPrimeAnnuelle : Avec 4 accidents = 0', recupPrimeAnnuelle(1,1,4) === 0);
