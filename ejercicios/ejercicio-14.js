//Número del 1 al 7 – Día de la semana

/*Si el número es del 1 al 7, muestra el día correspondiente (1 = lunes, 7 = domingo). Si no, muestra “Número inválido”. */

let numeroIngresado = parseInt(prompt("Ingresa un número"));

switch(numeroIngresado){

    case 1:
        console.log("Lunes");
        break

    case 2:
        console.log("Martes");
        break

    case 3:
        console.log("Miércoles");
        break

    case 4:
        console.log("Jueves");
        break

    case 5:
        console.log("Viernes");
        break

    case 6:
        console.log("Sábado");
        break

    case 7:
        console.log("Domingo");
        break

    default: console.log("Número inválido");
}

