
const validator = {
//Esta funcion perm
  maskify: function (creditCardNumber){
    let hiddenNumber= new Array;
    let x=0;
    for (let i=0 ; i < creditCardNumber.length ; i++){
      if (i < creditCardNumber.length-4){
        hiddenNumber[x] = '#'; 
        x=x+1;
      }else{
        hiddenNumber[x] = creditCardNumber[i]; 
        x=x+1;
      }
       
    }
  console.log(hiddenNumber);
  },

     isValid: function (creditCardNumber) {
    //Se agrega el numero de la tarjeta en un array
      let x = 0;
      let suma = 0;
      let total = 0;
      let arrayNumber = new Array();
      for (let i = creditCardNumber.length - 1; i >= 0; i--) {
        arrayNumber[x] = creditCardNumber[i];
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
      console.log("la tarjeta es valida ");
      return true;
      } else {
      console.log("la tarjeta es invalida ");
      return false;
      }
      

  }
    /*  get isValid() {
      return this._isValid;
      },
      set isValid(value) {
      this._isValid = value;
    },
  //alert("resultado de la funcion es valid: ", isValid());*/
};



export default validator;

