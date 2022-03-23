//Helpers
function esPar(numerito){
    return(numerito % 2 === 0);
}
//Mediana General
const salariosMex = mexico.map(
    function (personita){
        return personita.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function(salaryA, salaryB){
return salaryA - salaryB
    }
);



function calcularMediaAritmetica(lista) {

    
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0,nuevoElemento){

        return valorAcumulado + nuevoElemento;

        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
    
}




function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad];
        const personitaMitad2 = lista[mitad];

        media = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaGeneralMex = medianaSalarios(salariosMexSorted);

// Mediana del top 10%


const spliceStart = (salariosMexSorted.length * 90) / 100;
const spliceCount = salariosMexSorted.length - spliceStart;

const salarioMexTop10 = salariosMexSorted.splice(
    spliceStart,
    spliceCount,
    );

const medianatop10Mex = medianaSalarios(salarioMexTop10);



console.log(
    medianaGeneralMex,
    medianatop10Mex,
    );