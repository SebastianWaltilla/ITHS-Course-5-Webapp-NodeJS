// dessa grejer blir globala och kan då användas på fler ställen i vår html sida
const elFrom = document.getElementById("formReg");
const elNumberBananas = document.getElementById("numberOfBananas");
const elOutput = document.getElementById("output");
const elOutput2 = document.getElementById("output2");

console.log("innan funktion")

var totalSum = 0;
var totalTax = 0;

function printPriceForBananas(event){

    let antal = elNumberBananas.value;
    let sum = 15 * antal;
    let tax = 5 * antal;

    totalSum = totalSum + sum;
    totalTax = totalTax + tax;

    elOutput.textContent = "Priset för alla dina bananer är    " + totalSum;
    elOutput2.textContent = "Du betalar " + totalTax + " i skatt";

    event.preventDefault();

}

elFrom.addEventListener("submit", printPriceForBananas, false);
