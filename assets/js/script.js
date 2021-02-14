// Les 3 variables
let énergie = 100;
const ene = document.getElementById("ene");
const eneo = document.getElementById("ene_");

let fun = 100;
const funq = document.getElementById("fun");
const funqo = document.getElementById("fun_");

let argent = 100;
const arg = document.getElementById("arg");
const argo = document.getElementById("arg_");

// Mise à jour des variables
function MAJ() {
    ene.style.width = énergie;

}

/* Actions */


// Les boutons
document.getElementById("dodo").addEventListener("click", dodo());
document.getElementById("miam").addEventListener("click", miam());
document.getElementById("lave").addEventListener("click", lave());
document.getElementById("joue").addEventListener("click", joue());
document.getElementById("trav").addEventListener("click", trav());
document.getElementById("ache").addEventListener("click", ache());
// Les scripts