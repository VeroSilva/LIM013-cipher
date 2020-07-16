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
        let operation = (((caracter.charCodeAt()) - 65 + parseInt(offsetU)) % 26 + 65);
        if ((caracter.charCodeAt()) == 32) {
            operation = 32;
        }
        txtChar.push(String.fromCharCode(operation));
    });

    console.log(txtChar);
}