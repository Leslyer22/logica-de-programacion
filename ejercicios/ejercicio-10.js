//Ejercicio 9: Adivina el número

/*Descripción:
Crear un juego donde el programa tenga un número secreto (por ejemplo, 7), y el usuario debe adivinarlo.

Requisitos:

El número secreto está definido en el código.

El usuario debe ingresar un número.

Si acierta, mostrar "¡Correcto!".

Si no acierta, mostrar "Intenta otra vez".

*/

let numeroIngresado = parseInt(prompt("Adivine cuál es número secreto.Ingresa un número"));

let numeroSecreto = 7;

if(numeroIngresado === numeroSecreto){

    console.log("¡Correcto!");

}else{

    console.log("Intenta otra vez");
 
} 



