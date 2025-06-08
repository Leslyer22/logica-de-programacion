//Ejercicio 5: Edad para votar

/*Descripción:
Crear un programa que pida la edad del usuario y diga si puede votar o no

Requisitos:

Pedir al usuario su edad.

Si la edad es mayor o igual a 16, mostrar "Podés votar"
.
Si es menor, mostrar "No podés votar".*/

let edad = parseInt(prompt("Escribe tu edad"));

if(edad >= 16){
    console.log("Podés votar");
}else{
    console.log("No podés votar");
}



