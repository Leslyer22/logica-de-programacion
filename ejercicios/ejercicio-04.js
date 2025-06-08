//Ejercicio 4: Tabla de multiplicar

/*Descripción:
Crear un programa que imprima la tabla de multiplicar de un número ingresado.*/


let numero = parseInt(prompt("Ingrese un número"));


for(let i = 1; i <= 10; i++){

     resultado = numero * i;

    console.log(`${numero} x ${i} = ${resultado}`);

}

