


const aprendices = [
  { nombre: "Ana", nota: 4.5, jornada: "Mañana" },
  { nombre: "Luis", nota: 2.8, jornada: "Tarde" },
  { nombre: "Sofía", nota: 3.9, jornada: "Mañana" },
  { nombre: "Juan", nota: 4.8, jornada: "Noche" },
  { nombre: "María", nota: 2.5, jornada: "Tarde" },
  { nombre: "Pedro", nota: 3.4, jornada: "Noche" }
];    

//filter

const aprobados = aprendices.filter((a) => a.nota >= 3)
console.table(aprobados)

const noche = aprendices.filter((n) => n.jornada == "Noche")
console.table(noche)

const manana = aprendices.filter((n) => n.jornada == "Mañana")
console.log(`la jornada de la mañana tiene ${manana.length} personas`)

// map 

const nombre = aprendices.map((a) => a.nombre)
console.log(nombre)

const conEstado = aprendices.map((a) => ({
    ...a,
    estado: a.nota >= 3 ? "aprobado" : "no aprobado"
}));

console.table(conEstado)

// find

const juan = aprendices.find((a) => a.nombre === "Juan");
console.log(juan)

// some 

console.log(aprendices.some((a) => a.nota >= 4.6))
console.log(aprendices.some((a) => a.nombre === "maria"))

// every

console.log(aprendices.every((a) => a.nota>= 3))
console.log(aprendices.every((a) => a.nota >= 2))

const jornota = aprendices
    .filter((a) => a.jornada === "Mañana" && a.nota >= 3)
    .map((a) => a.nombre.toUpperCase())
    console.table(jornota)


// reduce

const suma = aprendices.reduce((total, a)=> total + a.nota , 0)
console.log(suma)

const promedio = suma / aprendices.length
console.log(`promedio del grupo: ${promedio.toFixed(1)} `)

// sort

console.log([10,9,1,100].sort())
console.log([10,9,1,100].sort((a, b) => a - b))

const ranking = aprendices.toSorted((a,b) => b.nota - a.nota)  // tosorte crea un nuevo arreglo
console.table(ranking)
console.table(ranking.reverse())

const alfabetico = [...aprendices].sort((a,b) => a.nombre.localeCompare(b.nombre))
console.table(alfabetico)
console.table(alfabetico.reverse())


// json

const texto = JSON.stringify(ranking, null, 2) // empaquetando el json
console.log( texto)
console.log(typeof texto)

const desempaquetar = JSON.parse(texto)
console.log(desempaquetar[0].nombre)