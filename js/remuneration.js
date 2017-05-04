const fixe = 1100;
const prix_s20 = 140;
const prix_multitec = 180;
const  prix_xspirit = 350;
var montantfinal = 0;

window.addEventListener("load", function () {
    window.document.querySelector("#btn_envoyer").addEventListener("click", function () {

        if (parseInt(window.document.querySelector("#anciennete").value) === 0)
        {
            montantfinal = 1100;
        }
        ;
        if (parseInt(window.document.querySelector("#anciennete").value) > 0 && parseInt(window.document.querySelector("#anciennete").value) <= 5)
        {
            montantfinal = 1100 + (1100 / 100) * 3;
        }
        ;
        if (parseInt(window.document.querySelector("#anciennete").value) > 5)
        {
            montantfinal = 1100 + (1100 / 100) * 6;
        }
        ;

        montantfinal += (prix_s20 / 100) * 3 * parseInt(window.document.querySelector("#s20").value);

        if (parseInt(window.document.querySelector("#xspirit").value) > 50)
        {
            montantfinal += (prix_xspirit / 100) * 6 * (parseInt(window.document.querySelector("#xspirit").value) - 50);
        }

        if (parseInt(window.document.querySelector("#multitec").value) < 20)
        {
        var nbrcasque = parseInt(window.document.querySelector("#multitec").value);
        montantfinal += (prix_multitec / 100) * 4 * (parseInt(window.document.querySelector("#multitec").value));
        {
        montantfinal = 1100 + (1100 / 100) * 3;
        }
        if (parseInt(window.document.querySelector("#multitec").value) > 20 && parseInt(window.document.querySelector("#multitec").value) <= 50)
        {
        montantfinal = 1100 + (1100 / 100) * 3;
        }
        if (parseInt(window.document.querySelector("#multitec").value) > 50)
        {
            montantfinal = 1100 + (1100 / 100) * 3;

        window.document.querySelector("#remuneration").innerHTML = "Vous serez payé : " + montantfinal + " €";
    }, false);
}, false);
    