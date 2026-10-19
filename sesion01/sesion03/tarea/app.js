/*Año bisiesto: pide un año y di si es bisiesto. Regla: divisible entre 4 y no entre 100, o divisible entre 400. Prueba con 2024 (sí), 1900 (no) y 2000 (sí).*/

let año = Number(prompt("ingrese un año"))
if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    console.log("El año es bisiesto");
} else {
    console.log("El año no es bisiesto");
}

/*Calculadora: pide dos números y una operación (+, -, *, /) y resuelve con un switch. Si dividen entre cero, avisa. Si la operación no existe, usa default.*/

let numero1 = Number(prompt("ingrese un numero"))
let numero2 = Number(prompt("ingrese un numero"))
let operacion = prompt("ingrese una operación matematicas: ")

switch(operacion){
    case "+":
    console.log(numero1 + numero2)
    break
    
    case "/":
        if(numero2 == 0){
            console.log("no se puede dividir por cero")
        }{
        console.log(numero1 / numero2)
        }
        break
    
    case "-":
        console.log(numero1 - numero2)
        break
    
    case "*":
        console.log(numero1 * numero2)
        break
    default:
        console.log("no es una operacion matematica")
}


/*IMC: pide peso (kg) y estatura (m), calcula peso / estatura ** 2 y clasifica: menos de 18.5 bajo peso, hasta 24.9 normal, hasta 29.9 sobrepeso, 30 o más obesidad.*/


let peso = parseFloat(prompt("Ingresa tu peso en kilogramos (kg):"));
let estatura = parseFloat(prompt("Ingresa tu estatura en metros (m):"));
let imc = peso / (estatura ** 2);

console.log("Tu IMC es: " + imc.toFixed(2));

// Clasificar el IMC
if (imc < 18.5) {
    console.log("Bajo peso");
} else if (imc <= 24.9) {
    console.log("Peso normal");
} else if (imc <= 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidad");
}







