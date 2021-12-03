
//import validator from './validator.js';

//console.log(validator);
let cardNumber;
let arrayNumeros= new Array(16);

 



function getData() {

    let cardNumber = document.getElementById("cardNumber").value;
    // let cardName = document.getElementById("carddHolderName").value;
    //let date = document.getElementById("expiryDate").value;
    //let security = document.getElementById("securityNumber").value;
    //alert("Hola"+ cardNumber);
   //Se crea el arreglo 
  // for (let i=0; i < cardNumber.length; i++)
  let x=0; 
  for (let i=cardNumber.length - 1 ; i >= 0; i--){
        arrayNumeros[x] = cardNumber[i];  
        x=x+1;
    }
    console.log(arrayNumeros);
    // Se hace un orden inverso del array
    //arrayNumeros.reverse();*/
}   
document.getElementById ("pagar").onclick = getData;
