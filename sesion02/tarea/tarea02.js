//Segundos a reloj: pide segundos y muestra horas, minutos y segundos (ejemplo: 3725 → 1 h 2 min 5 s). Usa Math.floor() y %.

let segundos = Number(prompt("Ingrese cantidad de segundos:"));

let horas = Math.floor(segundos / 3600);          
let minutos = Math.floor((segundos % 3600) / 60);
let segundosRestantes = segundos % 60;            

console.log(`${horas} h ${minutos} min ${segundosRestantes} s`);


//Temperatura: convierte °C a °F con F = C * 9 / 5 + 32, validando que sea un número.

/*let Temperatura_grados_celsios = Number(prompt("ingrese temperatura"))
let temperatura_grados_farenhihg = 0

if(Number.isNaN(Temperatura_grados_celsios)){
    console.log("no es un numero")
}else{
     temperatura_grados_farenhihg = Temperatura_grados_celsios * 9 / 5 + 32
}


console.log(temperatura_grados_farenhihg)


//3. Promedio: pide 3 notas y muestra el promedio con un decimal.

let nota1 = Number(prompt("ingrese su nota"))
let nota2 = Number(prompt("ingrese su nota"))
let nota3 = Number(prompt("ingrese su nota"))
let promedio = (nota1 + nota2 + nota3)/3

console.log(promedio.toFixed(1))*/