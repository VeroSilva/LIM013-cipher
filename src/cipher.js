const cipher = {
    // ...
};

export default cipher;

//CIFRADO DEL MENSAJE 

let buttonCipher = document.getElementById("cifrar-button");
buttonCipher.addEventListener("click", cipherAction);
buttonCipher.addEventListener("click", function(event) {
    event.preventDefault()
});


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

    document.getElementById("mensaje-cifrado").classList.add("display");
    document.getElementById("mensaje-cifrado").classList.remove("hide");

    const txtCipherReady = document.getElementById("mensaje-cifrado");
    txtCipherReady.innerHTML = "<p>" + txtChar.join("") + "</p>";

}

//DESCIFRADO DEL MENSAJE 

let buttonDcipher = document.getElementById("descifrar-button");
buttonDcipher.addEventListener("click", dcipherAction);
buttonDcipher.addEventListener("click", function(event) {
    event.preventDefault()
});


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
        if (operation < 65 && operation != 32) {
            operation += 26;
        }
        txtChar.push(String.fromCharCode(operation));
    });

    document.getElementById("mensaje-descifrado").classList.add("display");
    document.getElementById("mensaje-descifrado").classList.remove("hide");

    const txtCipherReady = document.getElementById("mensaje-descifrado");
    txtCipherReady.innerHTML = "<p>" + txtChar.join("") + "</p>";

}