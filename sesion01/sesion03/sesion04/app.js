/*Tabla a pedido: pide un número y muestra su tabla de multiplicar del 1 al 10.*/

let numero = parseInt(prompt("Ingresa un número:"));

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}

/***Estadísticas del grupo:** pregunta cuántas notas vas a ingresar, pídelas una por una en un ciclo (rechazando las inválidas con&#x20;
do...while
) y muestra el **promedio**, la **nota mayor** y la **nota menor**.*/


let cantidad;

do {
    cantidad = Number(prompt("¿Cuántas notas vas a ingresar?"));
} while (!Number.isInteger(cantidad) || cantidad <= 0);

let suma = 0;
let mayor = -Infinity;
let menor = Infinity;

for (let i = 1; i <= cantidad; i++) {
    let entrada;
    let nota;

    do {
        entrada = prompt("Ingresa la nota " + i + " (de 0 a 5):");
        nota = Number(entrada);
    } while (
        entrada === null ||
        entrada.trim() === "" ||
        !Number.isFinite(nota) ||
        nota < 0 ||
        nota > 5
    );

    suma += nota;

    if (nota > mayor) {
        mayor = nota;
    }

    if (nota < menor) {
        menor = nota;
    }
}

let promedio = suma / cantidad;

console.log("Promedio: " + promedio.toFixed(2));
console.log("Nota mayor: " + mayor)
console.log("Nota menor: " + menor)


