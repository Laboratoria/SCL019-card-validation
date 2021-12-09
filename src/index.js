
import validator from './validator.js';
//console.log(validator); 



function getData () {

    const creditCardNumber = document.getElementById("creditCardNumber").value;
    // let cardName = document.getElementById("carddHolderName").value;
    //let date = document.getElementById("expiryDate").value;
    //let security = document.getElementById("securityNumber").value;
  // for (let i=0; i < cardNumber.length; i++)
 //Se crea el arreglo donde se ingresan los números en orden invertidos de la tarjeta 
  /*let x=0; 
  for (let i=creditCardNumber.length - 1 ; i >= 0; i--){
        arrayNumeros[x] = cardNumber[i];  
        x=x+1;   
    }
    multiplyForTwo();*/
    
    validator.maskify (creditCardNumber);
    validator.isValid (creditCardNumber); 
}

document.getElementById("pagar").onclick = getData;














/*let cardNumber;
let arrayNumeros= new Array();
let suma=0;
let total;

/*function getData() {

    cardNumber = document.getElementById("cardNumber").value;
    // let cardName = document.getElementById("carddHolderName").value;
    //let date = document.getElementById("expiryDate").value;
    //let security = document.getElementById("securityNumber").value;
  // for (let i=0; i < cardNumber.length; i++)
 //Se crea el arreglo donde se ingresan los números en orden invertidos de la tarjeta 
  let x=0; 
  for (let i=cardNumber.length - 1 ; i >= 0; i--){
        arrayNumeros[x] = cardNumber[i];  
        x=x+1;   
    }
    multiplyForTwo();
}

document.getElementById ("pagar").onclick = getData;
//console.log(arrayNumeros);

function multiplyForTwo (){
// En las posiciones pares del array los números se multiplican por 2    
    for (let i=1; i<arrayNumeros.length; i=i+2){
        arrayNumeros[i] = arrayNumeros[i]*2;
//Con este condicional se va a crear un nuevo número 
        if (arrayNumeros[i] > 9) {
            let newNumber;
            let pos=0;
            newNumber= String(arrayNumeros[i]);
            arrayNumeros[i]=parseInt(newNumber[pos])+parseInt(newNumber[pos+1]);
        }
        console.log(arrayNumeros);
    }
    sumaNumbers();
}
// Se van a sumar todo los numeros que están dentro del array
function sumaNumbers (){
    for (let i=0; i<arrayNumeros.length;i++){
        suma=suma+parseInt(arrayNumeros[i]); 
    }
    total = suma%10;
    /*imprime el total de la sumatoria console.log(suma);
//}*/