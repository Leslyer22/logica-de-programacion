//Ejercicio 15: Calculadora simple

/* descripción:
Crear un programa que pida dos números y una operación (+, -, *, /), y realice esa operación.

Requisitos:

Pedir dos números y el símbolo de la operación.

Usar if...else para verificar qué operación se pidió.

Mostrar el resultado.

Pista:
Necesitarás convertir los números a Number() si los obtienes con prompt(). */

let num1 = parseInt(prompt("Ingresa un número"));

let num2 = parseInt(prompt("Ingresa otro número"));

let simbolo = prompt("Elegir uno de estos símbolos : +, -, * , / ");

if(simbolo === "+"){

    let resultado = num1 + num2;

    console.log(`${num1} + ${num2} = ${resultado}`);

} else if ( simbolo === "-"){

    
    let resultado = num1 - num2;

    console.log(`${num1} - ${num2} = ${resultado}`);

} else if (simbolo === "*"){

    let resultado = num1 * num2;

    console.log(`${num1} * ${num2} = ${resultado}`);

} else if (simbolo === "/") {

    let resultado = num1 / num2;

    console.log(`${num1} / ${num2} = ${resultado}`);

} else{

    console.log("Operación no válida. Usa uno de estos símbolos: +, -, *, /")
}

