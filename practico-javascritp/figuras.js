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
return (lado1+lado2+base)   ;
}


//console.log("El perimetro del Triangulo es: "+perimetroTriangulo+"cm.");

function areaTriangulo(base,altura){
    return (base*altura)/2
}
//console.log("el area del triangulo es: "+areaTriangulo+"cm2");


// altura de triangulo isosceles

function alturaTriangulo(lado1,lado2,base){
    if (lado1 == lado2) {
        
        lado1=Math.pow(lado1,2);
        base=base/2;
        base=Math.pow(base,2);
        lado1=lado1-base;
        h=Math.sqrt(lado1);

        console.log(h);
        return h;
        }
    else{
        alert("No es un triangulo isosceles");
    }
    
}

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
    alert(typeof(value));

    const area = areaCirculo(value);
    alert(area);
}

// calculo triangulo.

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1").value;
    const input2 = document.getElementById("inputTriangulo2").value;
    const input3 = document.getElementById("inputTriangulo3").value;

    var value1 = parseInt (input1);
    var value2 = parseInt (input2);
    var value3 = parseInt (input3);
        

    const perimetroTri = perimetroTriangulo(value1,value2,value3);
    alert(perimetroTri);

}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("inputTriangulo3").value;
    
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputTriangulo1").value;
    const input2 = document.getElementById("inputTriangulo2").value;
    const input3 = document.getElementById("inputTriangulo3").value;

    var value1 = parseInt (input1);
    var value2 = parseInt (input2);
    var value3 = parseInt (input3);
    
    const altura = alturaTriangulo(value1,value2,value3);

    if (altura==undefined) {
        console.log("no es isosceles");
    }
    else {
        alert("La Altura del Triangulo isosceles es: "+altura);
    }
    

}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputTriangulo1").value;
    const input2 = document.getElementById("inputTriangulo2").value;
    const input3 = document.getElementById("inputTriangulo3").value;

    var value1 = parseInt (input1);
    var value2 = parseInt (input2);
    var value3 = parseInt (input3);

    value1=Math.pow(value1,2);
        base=value3/2;
        base=Math.pow(base,2);
        value1=value1-base;
        altura=Math.sqrt(value1);
        

    const area = areaTriangulo(value3,altura);
    alert("El area del Triangulo es: "+area);




}