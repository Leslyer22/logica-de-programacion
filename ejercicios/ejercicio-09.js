//Ejercicio 9: Contraseña correcta

/*Descripción:
Crear un programa que pida al usuario que escriba una contraseña y verifique si es correcta.

Requisitos:

Guardar una contraseña (como "secreta123").

Pedir al usuario que escriba una contraseña.

Si es igual a la correcta, mostrar "Acceso concedido".

Si no, mostrar "Contraseña incorrecta". */

let contraseñaGuardada = "secreta123";

let contraseñaIngresada = prompt("Ingresa tu contraseña");

if(contraseñaIngresada == "secreta123"){

    console.log("Acceso concedido");

}else{
    console.log("Contraseña incorrecta");
}

