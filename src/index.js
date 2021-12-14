import validator from './validator.js';
//console.log(validator); 


//document.addEventListener("DOMContentLoaded", function() {
  //  document.getElementById("form").addEventListener('submit', validarFormulario); 
  //});
  document.getElementById("pagar").onclick= validarFormulario;

  function validarFormulario(evento) {
    //evento.preventDefault();
    

    let cardNumber = document.getElementById('creditCardNumber').value;
    //Indenticamos si el string tiene espacios.
    for (let i=0; i<cardNumber.length;i++){
        console.log(cardNumber[i]);
        if (cardNumber[i]===" "){
            alert(cardNumber+" ERROR");
            break;
            //evento.stopImmediatePropagation();
        }
    }   
    
    //Validamos que el usuario escriba en el formulario
    if(cardNumber.length == 0) {
      alert('No has escrito el número de la tarjeta');
      return;
    }
    // Validamos que el usuario escriba el nombre del títular de la tarjeta
    let username = document.getElementById('cardHolder').value;
    if(username.length == 0) {
    alert('No haz escrito el nombre del títular de la tarjeta');
    return;
    }
    //Validamos la fecha de vencimiento de la tarjeta 
    let date = document.getElementById('expiryDate').value;
    if(date.length == 0) {
    alert('No haz escrito la fecha de vencimiento de la tarjeta');
    return;
    }
    //Validamos el código de seguridad de la tarjeta y que tenga 3 dígitos
    let security = document.getElementById('securityNumber').value;
    if(security.length == 0) {
    alert('No haz escrito el código de seguridad de la tarjeta');
    return;
    }
    if(security.length > 3 || security.length < 3) {
        alert('Solo deben ser 3 digitos ');
        return;
    }
    //Se muestra en pantalla si la función es válida o no.
    let hiddenNumber=validator.maskify(cardNumber);
    //alert(hiddenNumber);
    let result=validator.isValid(cardNumber);
    if (result == true){
        
        document.getElementById('titulo').innerHTML = "Su tarjeta "+hiddenNumber+" es VÁLIDA";
    }else{
        
        document.getElementById('titulo').innerHTML = "Su tarjeta "+hiddenNumber+" es INVALIDA";
       // alert("INVALIDA");
    }   

    
return ;
  }