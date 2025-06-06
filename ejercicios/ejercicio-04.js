//Ejercicio 4: Tabla de multiplicar

/*Descripción:
Crear un programa que imprima la tabla de multiplicar de un número ingresado.Pedir al usuario un número y mostrar en pantalla la tabla de multiplicar
de ese número desde 1 hasta 10*/


let numero = parseInt(prompt("Ingrese un número"));


for(let i = 1; i <= 10; i++){

     resultado = numero * i;

    console.log(`${numero} x ${i} = ${resultado}`);

}

