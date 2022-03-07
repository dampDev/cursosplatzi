console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("los lados del cuadrados miden "+ ladoCuadrado + "cm.");

//perimetro del caudrado.

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del Cuadrado es: "+perimetroCuadrado+"cm.");

//Area del cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: "+areaCuadrado+"cm2");
console.groupEnd();

//Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("los lados del triangulo son: "
+ladoTriangulo1+"cm, "
+ladoTriangulo2+"cm, "
+baseTriangulo+"cm.");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: "+alturaTriangulo+"cm.");

const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del Triangulo es: "+perimetroTriangulo+"cm.");

const areaTriangulo = (baseTriangulo+alturaTriangulo)/2;
console.log("el area del triangulo es: "+areaTriangulo+"cm2");


console.groupEnd();

//Circulo

console.group("Circulo.");

const radioCirculo = 4;
console.log("El radio del circulo es: "+radioCirculo+"cm.");

const diametroCirculo = radioCirculo*2;
console.log("El Diametro del circulo es: "+diametroCirculo+"cm.");

const PI = Math.PI;
console.log("el valor de PI es: "+PI);

const circunferenciaCirculo = diametroCirculo*PI;
console.log("La circunferencia del circulo es: "+circunferenciaCirculo);

const areaCirculo = (radioCirculo*radioCirculo)*PI;
console.log("el Area del Triangulo es: "+areaCirculo);


console.groupEnd();