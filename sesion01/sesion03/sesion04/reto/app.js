/*Genera un número secreto entre 1 y 100 con Math.floor(Math.random() * 100) + 1.*/


let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0
let maxIntentos = 7
let ganado = false

while (intentos < maxIntentos && ganado === false) {
    let numero = parseInt(prompt("Adivina el número entre 1 y 100. Intento " + (intentos + 1) + " de " + maxIntentos));

    intentos++;

    console.log("Intento número: " + intentos);

    if (numero === numeroSecreto) {
        console.log("¡Ganaste! 🎉");
        console.log("Adivinaste en " + intentos + " intentos.");
        ganado = true;
    } else if (numero < numeroSecreto) {
        console.log("📈 Más alto");
    } else {
        console.log("📉 Más bajo");
    }
}

if (ganado === false) {
    console.log("Perdiste");
    console.log("El número secreto era: " + numeroSecreto);
}
