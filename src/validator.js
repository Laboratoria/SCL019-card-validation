
const validator = {
//esta función sustitute los primeros números por # 
  

  maskify: function (cardNumber){
    let hiddenNumber= new Array;
       let x=0;
    for (let i=0 ; i < cardNumber.length ; i++){
      if (i < cardNumber.length-4){
        hiddenNumber[x] = '#'; 
        x=x+1;
      }else{
        hiddenNumber[x] = cardNumber[i]; 
        x=x+1;
      }
    }
    console.log(hiddenNumber.toString().replaceAll(",",""));
    //document.getElementById('resultado').innerHTML = hiddenNumber.toString().replaceAll(",","");
  return hiddenNumber.toString().replaceAll(",","");
  },
 


     isValid: function (cardNumber) {
    //Se agrega el numero de la tarjeta en un array
      let x = 0;
      let suma = 0;
      let total = 0;
      let arrayNumber = new Array();

      for (let i = cardNumber.length - 1; i >= 0; i--) {
          arrayNumber[x] = cardNumber[i];
          x = x + 1;
      }
      /*Permite ver el nro de tdc en orden inverso */ console.log(arrayNumber);
      // En las posiciones pares del array los números se multiplican por 2    
      for (let i = 1; i < arrayNumber.length; i = i + 2) {
        arrayNumber[i] = arrayNumber[i] * 2;
      //Con este condicional se va a sumar los digitos de numeros mayores a 9 
          if (arrayNumber[i] > 9) {
            let pos = 0;
            let newNumber = String(arrayNumber[i]);
            arrayNumber[i] = parseInt(newNumber[pos]) + parseInt(newNumber[pos + 1]);
          }
      }
        /*arreglo con nuevos valores*/ console.log(arrayNumber);
      // Se van a sumar todo los numeros que están dentro del array
      for (let i = 0; i < arrayNumber.length; i++) {
        suma = suma + parseInt(arrayNumber[i]);
      }
      total = suma % 10;
      /*imprime el total de la sumatoria*/ console.log("sumatoria digitos: ", suma);
      console.log(total);
      //En esta sección se determina la tarjeta es valida o no  
      if (total === 0) {
          //console.log("la tarjeta es valida ");
        return true;
      }
          //console.log("la tarjeta es invalida ");   
      return false;
    
  },
  
 
};



export default validator;

