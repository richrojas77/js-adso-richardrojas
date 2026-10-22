/*esBisiesto(anio): devuelve true o false. Úsala dentro de un if para mostrar un mensaje.*/


function esBisiesto(anio) {
    if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

let anio = Number(prompt("Ingresa un año:"));

if (esBisiesto(anio)) {
    console.log("El año " + anio + " es bisiesto.");
} else {
    console.log("El año " + anio + " no es bisiesto.");
}




/*Aquí tienes el código en JavaScript usando una función mayorDeTres(a, b, c) que devuelve el número mayor de tres números. También vamos a probarlo con números iguales.*/

function mayorDeTres(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

let mayor = mayorDeTres(num1, num2, num3);

console.log("El número mayor es: " + mayor);



/*precioFinal(precio, descuento = 0): como función flecha, devuelve el precio con el descuento (en porcentaje) aplicado. Si no se pasa descuento, devuelve el mismo precio.*/


const precioFinal = (precio, descuento = 0) => {
    return precio - (precio * descuento / 100);
};

let precio = Number(prompt("Ingresa el precio del producto:"));
let descuento = Number(prompt("Ingresa el descuento en porcentaje:"));

let resultado = precioFinal(precio, descuento);

console.log("El precio final es: $" + resultado);

// Pruebas
console.log(precioFinal(100000, 20)); // 80000
console.log(precioFinal(50000, 10));  // 45000
console.log(precioFinal(30000));      // 30000
