//Ejercicio 3: Encontrar el mayor de tres números

/*Descripción:
Pide al usuario ingresar tres números y determina cuál es el mayor.*/

let num1 = parseInt(prompt(" Ingresa el primer número"));

let num2 = parseInt(prompt("Ingresa el según numero"));

let num3 = parseInt(prompt("Ingresa el tercer número"));

let mayor;

if(num1 >= num2 && num1 >= num3){

    mayor = num1;

} else if (num2 >= num1 && num2 >= num3){

    mayor = num2;
} else{
    mayor = num3;
}

console.log(`El número mayor es: ${mayor} `);
