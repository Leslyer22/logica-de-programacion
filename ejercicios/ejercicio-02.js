//Ejercicio 2: Calcular el área de un rectángulo

/*Descripción:
Solicita al usuario la base y la altura de un rectángulo y calcula su área. Muestra el resultado.*/

let base = parseInt(prompt("Ingrese la base del rectángulo"));

let altura = parseInt(prompt("Ingrese la altura del rectángulo"));

const calcularArea = (base,altura) =>{
    return base * altura;
}

let area = calcularArea(base,altura);

console.log (`El área del rectángulo es igual : ${area}`);


