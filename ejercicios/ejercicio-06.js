//Ejercicio 6: Número positivo, negativo o cero

/*Descripción:
Crear un programa que reciba un número y diga si es positivo, negativo o cero.

Requisitos:

Pedir al usuario que ingrese un número.

Mostrar un mensaje que diga si el número es positivo, negativo o igual a cero. */

let num = parseInt(prompt("Ingrese un número"));

if(num > 0){

    console.log(`El número ${num} es positivo`);

} else if (num < 0) {

    console.log(`El número ${num} es negativo.`);

} else{

    console.log("El número es igual a 0")

}

