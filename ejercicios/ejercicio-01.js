//Ejercicio 1: Número par o impar

/*Descripción:Pide al usuario que ingrese un número y determina si es par o impar. Muestra el resultado en la consola.*/

let entrada = parseInt(prompt("Ingrese un número"));

if ( entrada % 2 == 0 ){

    console.log(`El número ${entrada} es par`);

} else{

    console.log( `El número ${entrada} es impar `);

}