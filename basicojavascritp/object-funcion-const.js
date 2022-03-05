function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}
var total= 10;
for (var i = 0; i < total; i++) {

    var newAuto = new auto("Tesla", "Model "+i,+" "+ 2000+i);    
    console.log(newAuto);
}

var newAuto = new auto("Tesla", "Model 3", 2020);