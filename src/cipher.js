const cipher = {
    // ...
};

export default cipher;

//CIFRADO DEL MENSAJE 

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

    const txtCipherReady = document.getElementById("mensaje-cifrado");
    let txtNew = document.createElement("p");
    txtNew.textContent = txtChar.join("");
    txtCipherReady.appendChild(txtNew);
}

//DESCIFRADO DEL MENSAJE 

let buttonDcipher = document.getElementById("descifrar-button");
buttonDcipher.addEventListener("click", dcipherAction);

function dcipherAction() {
    let dcipherTxtUser = document.getElementById("mensaje-descifrar").value;
    let cutTxt = dcipherTxtUser.split("");
    let offsetU = document.getElementById("offsetD").value;
    let txtChar = [];

    cutTxt.forEach(function(caracter) {
        let operation = (((caracter.charCodeAt()) - 65 - parseInt(offsetU)) % 26 + 65);
        if ((caracter.charCodeAt()) == 32) {
            operation = 32;
        }
        txtChar.push(String.fromCharCode(operation));
    });

    console.log(txtChar);

    const txtCipherReady = document.getElementById("mensaje-descifrado");
    let txtNew = document.createElement("p");
    txtNew.textContent = txtChar.join("");
    txtCipherReady.appendChild(txtNew);
}