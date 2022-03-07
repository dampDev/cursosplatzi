var articulos = [
    { nombre:   "Bici",     costo:  3000},
    { nombre:   "Tv",       Costo:  2500},
    { nombre:   "libro",    costo:  320},
    { nombre:   "Celular",  costo:  5000},
    { nombre:   "Laptop",    costo:  12320},
    { nombre:   "Audifonos", costo:  350},
    { nombre:   "Teclado",    costo: 500},
]
var articulosfiltrados = articulos.filter(function(artuculo){
return artuculo.costo <=500
});

articulosfiltrados

var nombreArticulos = articulos.map(function (articulo) {
   return articulo.nombre 
});

var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

 var articulosBaratos = articulos.some(function(artitulo){
    return artitulo.costo <=700;
 });
