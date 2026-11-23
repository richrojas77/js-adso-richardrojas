const nombre = "Ana";
let edad = 17;
let estatura = 1.68;
let esAprendiz = true;
let apodo;

console.log(typeof nombre, typeof edad, typeof estatura, typeof esAprendiz, typeof apodo);

console.log(7 / 2);        //3.5
console.log(7 % 2);        // 1
console.log(2 ** 3);       // 8
console.log(10 + 3 * 2);   // 16
console.log((10 + 3) * 2);  // 26
console.log(0.1 + 0.2);     // 0,3


console.log("5" + "5")  // 55
console.log("5"+ 5 + 5)     // 55
console.log(5+5)        //10
console.log(5+5 +"5" )      // 55


console.log(typeof("susana" * 5))   
console.log(typeof("5" + "5")) // 55
console.log(typeof("5"+ 5 + 5))  // 555
console.log(typeof(5+5))        //10
console.log(typeof(5+5 +"5" ))   // 105


// let nombre1 = prompt("Digite su nombre: ")
// let entrada = Number(prompt("Digite su edad"))
// let edad1 = 0
// let suma = 0
// if (Number.isNaN(entrada)){
//     console.log("Eso no es un número.")
// }else{
//     edad1 = entrada
//     suma = edad1 + 15
//     console.log("Y su edad incrementada es " + suma)
// }

// let nota1= 0
// entrada = Number(prompt("Digite su nota de JavaScript"))
// console.log(`Su nombre es: ${nombre1}`)
// if (Number.isNaN(entrada)){
//     console.log("Eso no es un número.")
// }else{
//     nota = entrada
//     console.log(`su Nota definitiva es ${nota}`)
// }

let nota1 = Number(prompt("ingrese su nota: "))
let nota2 = Number(prompt("ingrese su nota: "))
let nota3 = Number(prompt("ingrese su nota: "))

let promedio = (nota1 + nota2 + nota3)/3
console.log(`su nota definitiva es: ${promedio.toFixed(1)}`)



let pesos = 250000;
console.log(pesos.toLocaleString("es-CO", { style: "currency", currency: "COP" }));

