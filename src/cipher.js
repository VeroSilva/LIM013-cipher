const cipher = {
    encode: function(offset, string) {
        let cutTxt = string.split("");
        let txtChar = [];

        cutTxt.forEach(function(caracter) {
            let operation;
            if (caracter.charCodeAt() >= 65 && caracter.charCodeAt() <= 90) {
                operation = (((caracter.charCodeAt()) - 65 + parseInt(offset)) % 26 + 65);
                if (operation < 65) {
                    operation += 26;
                }
            } else if (caracter.charCodeAt() >= 97 && caracter.charCodeAt() <= 122) {
                operation = (((caracter.charCodeAt()) - 97 + parseInt(offset)) % 26 + 97);
            }
            //if ((caracter.charCodeAt()) == 165) {
            //(caracter.charCodeAt()) == 78;
            //}
            if ((caracter.charCodeAt()) == 32) {
                operation = 32;
            }
            txtChar.push(String.fromCharCode(operation));
        });
        return txtChar.join("");
    },
    decode: function(offset, string) {
        let cutTxt = string.split("");
        let txtChar = [];

        cutTxt.forEach(function(caracter) {
            let operation;
            if (caracter.charCodeAt() >= 65 && caracter.charCodeAt() <= 90) {
                operation = (((caracter.charCodeAt()) - 65 - parseInt(offset)) % 26 + 65);
                if (operation < 65) {
                    operation += 26;
                }
            } else if (caracter.charCodeAt() >= 97 && caracter.charCodeAt() <= 122) {
                operation = (((caracter.charCodeAt()) - 97 - parseInt(offset)) % 26 + 97);
                if (operation < 97) {
                    operation += 26;
                }
            }
            if ((caracter.charCodeAt()) == 32) {
                operation = 32;
            }
            txtChar.push(String.fromCharCode(operation));
        });
        return txtChar.join("");
    },
};

export default cipher;

window.onload = function() {
    let buttonCipher = document.getElementById("cifrar-button");
    buttonCipher.addEventListener("click", cipherAction);
    buttonCipher.addEventListener("click", function(event) {
        event.preventDefault()
    });
    let buttonDcipher = document.getElementById("descifrar-button");
    buttonDcipher.addEventListener("click", dcipherAction);
    buttonDcipher.addEventListener("click", function(event) {
        event.preventDefault()
    });

};

//CIFRADO DEL MENSAJE 

function cipherAction() {
    let cipherTxtUser = document.getElementById("mensaje-acifrar").value;
    let offsetU = document.getElementById("offsetC").value;
    var text = cipher.encode(offsetU, cipherTxtUser);

    document.getElementById("mensaje-cifrado").classList.add("display");
    document.getElementById("mensaje-cifrado").classList.remove("hide");

    const txtCipherReady = document.getElementById("mensaje-cifrado");
    txtCipherReady.innerHTML = "<p>" + text + "</p>";

}

//DESCIFRADO DEL MENSAJE 

function dcipherAction() {
    let dcipherTxtUser = document.getElementById("mensaje-descifrar").value;
    let offsetU = document.getElementById("offsetD").value;
    var text = cipher.decode(offsetU, dcipherTxtUser);

    const txtCipherReady = document.getElementById("mensaje-descifrado");
    txtCipherReady.innerHTML = "<p>" + text + "</p>";

    document.getElementById("mensaje-descifrado").classList.add("display");
    document.getElementById("mensaje-descifrado").classList.remove("hide");
}