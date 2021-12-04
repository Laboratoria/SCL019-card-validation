
//import validator from './validator.js';

//console.log(validator);
let cardNumber;
let arrayNumeros= new Array();

 /*function getData(cardNumber){
    cardNumber = document.getElementById("cardNumber").value;
    alert("Hola" + cardNumber);
   //console.log(cardNumber);
   return cardNumber;
}
console.log(cardNumber);
document.getElementById ("pagar").onclick = getData;
*/
function getData() {

    let cardNumber = document.getElementById("cardNumber").value;
    // let cardName = document.getElementById("carddHolderName").value;
    //let date = document.getElementById("expiryDate").value;
    //let security = document.getElementById("securityNumber").value;
  // for (let i=0; i < cardNumber.length; i++)
 //Se crea el arreglo donde se ingresan los números invertidos de la tarjeta 
  let x=0; 
  for (let i=cardNumber.length - 1 ; i >= 0; i--){
        arrayNumeros[x] = cardNumber[i];  
        x=x+1;   
    }

    // Se hace un orden inverso del array
    //arrayNumeros.reverse();
    multiplyForTwo();
}

document.getElementById ("pagar").onclick = getData;
console.log(arrayNumeros);

function multiplyForTwo (){
    
    for (let i=0; i<arrayNumeros.length; i=i+2){
        arrayNumeros[i] = arrayNumeros[i]*2;
        console.log(arrayNumeros[3]);
    }
    
}



