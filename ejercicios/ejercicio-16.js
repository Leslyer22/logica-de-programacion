//🧠 Ejercicio 16: Lista de compras

/*Descripción:
Crear un programa que permita al usuario ingresar nombres de productos para una lista de compras. Al final, mostrar todos los productos ingresados.

Requisitos:

Usar un array para guardar los productos.

Usar un bucle (while o for) para permitir ingresar varios productos.

El usuario debe escribir "fin" cuando ya no quiera agregar más.

Al final, mostrar todos los productos ingresados. */

let lista = [];

while(true){

    let item= prompt("Agrega un ítem a la lista, uno por uno.(o 'fin' para salir)");

        if(item ===  "fin"){
        break;
    }

    lista.push(item);

}

console.log(lista);

