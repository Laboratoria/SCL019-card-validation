import validator from './validator.js';


function validarFormulario() {
    let noEspacios = false;
    let cardNumber = document.getElementById('creditCardNumber').value;
    let username = document.getElementById('cardHolder').value;
    let security = document.getElementById('securityNumber').value;
    let date = document.getElementById('expiryDate').value;
    


    //------------------Validamos que ningun campo este vacio-----------------------------------------------
    //Campo número de tarjeta
    if (cardNumber.length == "") {
        alert('No has escrito el número de la tarjeta');
    }
    //Campo del nombre 
    if (username.length == "") {
        alert('No haz escrito el nombre del títular de la tarjeta');
    }
    //Campo de la fecha de vencimiento de la tarjeta 
    if (date.length == "") {
        alert('No haz escrito la fecha de vencimiento de la tarjeta');

    }
    //Campo de código de seguridad de la tarjeta y que tenga 3 dígitos
    if (security.length == "") {
        alert('No haz escrito el código de seguridad de la tarjeta');
    }
    //------------------Validar si la información ingresada esta correcta--------------------------  
    if (security.length > 3 || security.length < 3) {
        alert('Solo deben ser 3 digitos ');
    }
    // Valida que no se ingresen un campo vacío.   
    for (let i = 0; i < cardNumber.length; i++) {
        if (cardNumber[i] === " ") {
            noEspacios = true;
            break;
        }
    }
    if (noEspacios === false) {
        //Se muestra en pantalla si la función es válida o no.
        let hiddenNumber = validator.maskify(cardNumber);
        let result = validator.isValid(cardNumber);
        if (result == true) {
            document.getElementById('titulo').innerHTML = "Su tarjeta " + hiddenNumber + " es VÁLIDA";
        } else {
            document.getElementById('titulo').innerHTML = "Su tarjeta " + hiddenNumber + " es INVÁLIDA";
        }
    } else {
        alert("Se debe ingresar el número de la tarjera sin espacios en blanco");
    }
    return;
}
document.getElementById("pagar").onclick = validarFormulario;
