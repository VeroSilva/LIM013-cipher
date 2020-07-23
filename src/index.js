import cipher from './cipher.js';

console.log(cipher);

//Boton de validación de contraseña

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

//Mostrar y ocultar botones de direccionamiento 

//Mostrar el primer botón de ir hacia arriba
const letsShowButton = document.getElementById("cifrar-action");
letsShowButton.addEventListener("click", showButton);

function showButton() {
    document.getElementById("goup").classList.add("display");
    document.getElementById("goup").classList.remove("hide");
}

//Ocultarlo cuando vaya a la primera pantalla
const hideButtonGoup = document.getElementById("goup");
hideButtonGoup.addEventListener("click", hideButton1);

function hideButton1() {
    document.getElementById("goup").classList.add("hide");
    document.getElementById("goup").classList.remove("display");
}

//Mostrar el segundo botón de ir hacia arriba
const letsShowButton2 = document.getElementById("descifrar-action");
letsShowButton2.addEventListener("click", showButton2);

function showButton2() {
    document.getElementById("goup2").classList.add("display");
    document.getElementById("goup2").classList.remove("hide");
}

//Ocultarlo cuando vaya a la segunda pantalla
const hideButtonGoup2 = document.getElementById("goup2");
hideButtonGoup2.addEventListener("click", hideButton2);

function hideButton2() {
    document.getElementById("goup2").classList.add("hide");
    document.getElementById("goup2").classList.remove("display");
    document.getElementById("goup").classList.add("display");
    document.getElementById("goup").classList.remove("hide");
}