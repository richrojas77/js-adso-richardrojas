/*let numero = Number(prompt("digite un numero para crearle su tabla; "))
for(let i = 0; i<=10; i++){
    console.log(`${numero} * ${i} = ${numero = i}`)
}*/


// let numero1 = Number(prompt("digite un numero para crearle su tabla; "))
// for(let i = 10; i<=0; i++){
//     console.log(`${numero1} * ${i} = ${numero1 = i}`)
// }


// let numero2 = Number(prompt("digite un numero para crearle su tabla; "))
// let i = 0
// while(i<=10){
//     console.log(`${numero2} * ${i} = ${numero + i}`)
//     i++
// }

// let ahorro = 0
// let semana = 0

// while (ahorro < 100.000){
//     ahorro += 15.000
//     semana += 1 
//     console.log(`llevas ahorrado ${ahorro} en ${semana} semanas`)
// }

// let ahorros = Number(prompt(""))
// let semana = 0

// while (ahorro < 100.000){
//     ahorro += 15.000
//     semana += 1 
//     console.log(`llevas ahorrado ${ahorro} en ${semana} semanas`)
// }


// let n = Number(prompt("ingrese un numero: "))
// let suma = 0
// let contpares = 0
// for(let i = 1; i<= n; i++){
//     suma+= i
//     if(i % 2 == 0)
//         contpares += 1
// }
// alert(`la suma de los numeros entre 1 y ${n} es ${suma}`)
// alert(`la cantidad de los pares 1 y ${n} es ${contpares}`)

let nota
do{
    nota = Number(prompt("digite la nota"))
} while (Number.isNaN(nota) || nota < 0 || nota > 5)    // ||= esto significa o ejemplo esta en la casa o en la escuela
console.log(`Nota valida ${nota}`)

let respuesta
do{
    respuesta = prompt("esta todo claro: ").toLowerCase()
} while (respuesta !="si")
    console.log()



