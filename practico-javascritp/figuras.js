console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("los lados del cuadrados miden "+ ladoCuadrado + "cm.");

//perimetro del caudrado.

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del Cuadrado es: "+perimetroCuadrado+"cm.");

//Area del cuadrado
function areaCuadrado(lado){
    return lado * lado;
}

//console.log("El area del cuadrado es: "+areaCuadrado+"cm2");
console.groupEnd();

//Triangulo
console.group("Triangulo");
/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("los lados del triangulo son: "
+ladoTriangulo1+"cm, "
+ladoTriangulo2+"cm, "
+baseTriangulo+"cm."); 
*/

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es: "+alturaTriangulo+"cm.");

function perimetroTriangulo(lado1,lado2,base){
return lado1+lado2+base;
}


//console.log("El perimetro del Triangulo es: "+perimetroTriangulo+"cm.");

function areaTriangulo(base,altura){
    return (base*altura)/2
}
//console.log("el area del triangulo es: "+areaTriangulo+"cm2");


console.groupEnd();

//Circulo

console.group("Circulo.");

//const radioCirculo = 4;
//console.log("El radio del circulo es: "+radioCirculo+"cm.");

function diametroCirculo(radio){
    return radio*2;
}


//console.log("El Diametro del circulo es: "+diametroCirculo+"cm.");

const PI = Math.PI;
//console.log("el valor de PI es: "+PI);

function circunferenciaCirculo (radio){
    const diametro = diametroCirculo(radio);
    return  diametro * PI;
}

//console.log("La circunferencia del circulo es: "+circunferenciaCirculo);

function areaCirculo (radio){
    return (radio * radio)* PI;
}
//console.log("el Area del Triangulo es: "+areaCirculo);


console.groupEnd();

//interaccion con html

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}
//diametro del circulo 
function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularCircunferenciaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const circunferencia = circunferenciaCirculo(value);
    alert(circunferencia);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}
