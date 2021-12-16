import validator from './validator.js';

const submitCardNumber= document.getElementById("numSubmit");

submitCardNumber.addEventListener("click", () => {
  const numeroTarjeta= document.getElementById("cardNumber").value;

  let maskNumber = validator.maskify(numeroTarjeta);

  
  if (numeroTarjeta.length <= 12 || numeroTarjeta.length >= 19){
    alert("Debe ingresar un número que tenga entre 13 y 18 dígitos");
  } else { 
    if (validator.validarTarjeta(numeroTarjeta) ) {
      alert("Tu tarjeta " + maskNumber + " es válida. ¡Estamos listos para el despegue!");
    } else {
      alert("¡Houston, tenemos un problema! Tu tarjeta " + maskNumber + " es inválida");
   }

  }

  

});

console.log(validator); 



