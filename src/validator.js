const validator = {

  isValid:(numeroTarjeta) => {

   //Convertir input en array e invertir el orden de los digitos.
    let luhmIngresar= numeroTarjeta.split("").map(Number).reverse();

    let luhmTotal = 0;
  
  //Multiplicar por 2, los digitos en posición par.
    for(let i= 0; i< luhmIngresar.length; i++) {
      if (i % 2 !==0){
      luhmIngresar[i] = luhmIngresar[i] * 2;

  //Al resultado de los números multiplicados que sean mayores a 10, restar 9.
      if (luhmIngresar[i] >=10){
        luhmIngresar[i] -= 9;
      }
    }
     

  //Sumar todos los digitos.
      luhmTotal += luhmIngresar[i];
      
      
    }

    return luhmTotal % 10 ===0;
   },

   maskify: (numeroTarjeta) => {
    let mask = "";

    for (let i = 0; i < numeroTarjeta.length; i++) {

      if (i <= numeroTarjeta.length - 5) {
        mask += "🚀";

      } else {
        mask += numeroTarjeta[i];

      }
    }
    return mask;
  }

    
   }
   
export default validator; 
