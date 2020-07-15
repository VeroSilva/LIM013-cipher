const cipher = {
    // ...
};

export default cipher;

let offsetUser = document.getElementById("offsetC");

// Cortar el string

let buttonCipher = document.getElementById("cifrar-button");
buttonCipher.addEventListener("click", cipherAction);

function cipherAction() {
    let cipherTxtUser = document.getElementById("mensaje-acifrar").value;
    let cutTxt = cipherTxtUser.split("");
    let offsetU = document.getElementById("offsetC").value;
    let txtChar = [];

    cutTxt.forEach(function(caracter) {
        let operation = ((((caracter.charCodeAt()) - 65 + offsetU) % 26) + (caracter.charCodeAt()));
        console.log(operation);
        txtChar.push(String.fromCharCode(operation));
    });

    console.log(txtChar);
}