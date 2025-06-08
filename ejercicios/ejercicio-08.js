//Ejercicio 8: Contador de números pares

/*Descripción:
Crear un programa que muestre todos los números pares entre 1 y 20.

Requisitos:

Verificar si un número es par.

Mostrarlo en consola si lo es.

Mostrar los números que no son pares

*/

for(let i = 1; i <= 20; i++){

    if(i % 2 == 0){
        console.log(`El número ${i} es par`);
    }else{
        console.log(`El número ${i} no es par`);
    }
}