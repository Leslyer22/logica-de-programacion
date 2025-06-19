// Ejercicio 17: ¿Cuántos números mayores que 10?

/*Descripción:
Pedir al usuario que ingrese 5 números. Al final, decir cuántos de esos números son mayores que 10.

Requisitos:

Usar un bucle for para pedir 5 números.

Usar una variable para contar cuántos son mayores que 10.

Mostrar el total al final. */

let cantador = 0;

for(let i = 0; i <= 4; i++){
    let entrada = parseInt(prompt("Ingresa un número"));

    if(entrada > 10){
        cantador++
}
}

console.log("Cantidad de números mayores que 10:", contador);