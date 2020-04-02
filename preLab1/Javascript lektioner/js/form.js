
// dessa grejer blir globala och kan då användas på fler ställen i vår html sida
const elFrom = document.getElementById("formReg");
const elName = document.getElementById("txtName");
const elOutput = document.getElementById("output");


console.log("innan funktion")
function showName(event){
    // elName är värdet från textfältet, alltså input
    let name = elName.value;
    // let name = elName.value;
    console.log("textfält i funktion" + name);
    elOutput.textContent = "hej    " + name;

    // om man klickar på knappen, stannar man på sidan, formuläret skickas inte vidare
    event.preventDefault();







}

elFrom.addEventListener("submit", showName, false);
