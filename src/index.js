import cipher from './cipher.js';

console.log(cipher);

//Boton de validación

const letsValidate = document.getElementById("validationPassButton");
letsValidate.addEventListener("click", validatePass);

function validatePass() {
    const correctPassword = "123";
    let userAnswer = document.getElementById("password").value;

    if (userAnswer == correctPassword) {
        document.getElementById("screen_1").classList.add("hide");
        document.getElementById("screen_1").classList.remove("display");
        document.getElementById("screen_2").classList.add("display");
        document.getElementById("screen_2").classList.remove("hide");

        document.getElementById("mensaje-acifrar").value = "";
        document.getElementById("offsetC").value = "";

        document.getElementById("mensaje-descifrar").value = "";
        document.getElementById("offsetD").value = "";
    } else {
        alert("Contraseña incorrecta");
    }
}