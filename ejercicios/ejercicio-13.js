//Ejercicio 13: Contar hasta el número indicado

/*Descripción:
Pedir al usuario un número y mostrar todos los números desde 1 hasta ese número.

Requisitos:

Pedir un número.

Usar un bucle for para mostrar todos los números del 1 al ingresado.

Ejemplo:
Si el usuario ingresa 5, mostrar:
1, 2, 3, 4, 5 */


let numeroIngresado = parseInt(prompt("Ingresa un número"));

for(let i = 1; i <= numeroIngresado; i++){

    console.log(i);
}