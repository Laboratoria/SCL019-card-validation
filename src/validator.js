const validator = {

  //ALGORITMO DE LUHM
  validarTarjeta: (numeroTarjeta) => {

    //CONVERTIMOS EN ARRAY Y REVERTIMOS
    let luhmIngresar = numeroTarjeta.split("").map(Number).reverse();

    let luhmTotal = 0;

    //capturando elementos en posición impar
    for (let i = 0; i < luhmIngresar.length; i++) {
      if (i % 2 !== 0) {
        luhmIngresar[i] = luhmIngresar[i] * 2;

        //los elementos que, multiplicados por 2, sean iguales o mayores a 10, se sumen sus dígitos.
        if (luhmIngresar[i] >= 10) {
          luhmIngresar[i] -= 9;
        }

      }

      //Sumar todos los digitos
      luhmTotal += luhmIngresar[i];


      //al resultado dividirlo por 10


    }
    return luhmTotal % 10 === 0;

  },

  maskify: (numeroTarjeta) => {
    let mask = " ";

    for (let i = 0; i < numeroTarjeta.length; i++) {

      if (i <= numeroTarjeta.length - 5) {
        mask += "🚀";

      } else {
        mask += numeroTarjeta[i];

      }
    }
    return mask;
  }
};


export default validator;