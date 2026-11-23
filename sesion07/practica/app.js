const aprendiz = {
    nombre:"edison",
    edad : "27",
    ficha: "3534466",
    jornada: "mixta",
    activo: "true",
    
      saludar() {
    return `hola, soy ${this.nombre} de la ficha ${this.ficha}`
    }

}

console.log(aprendiz)
console.table(aprendiz)

console.log(aprendiz.nombre)
console.log(aprendiz.nombre, aprendiz.edad)

aprendiz.jornada = "diurna"
console.table(aprendiz)
delete aprendiz.activo


console.log(aprendiz.saludar())


const productos = [
  { codigo: "P01", nombre: "Cuaderno", precio: 4500, stock: 20 },
  { codigo: "P02", nombre: "Lápiz", precio: 1200, stock: 0 },
  { codigo: "P03", nombre: "Borrador", precio: 800, stock: 35 }
];

console.table(productos);
console.log(productos[0].nombre);
console.log(productos[2].precio);

productos.push({ codigo: "P04", nombre: "Regla", precio: 2000, stock: 10 });
console.table(productos);

// buscar una ficha

let buscando = prompt("código del producto:") ?? ""
let encontrado = null
for (const p of productos) {
    if (productos.codigo === buscando.toUpperCase()){
        encontrado = p
        break
    }
}

if(encontrado){
    console.log(`${encontrado.nombre}: $${encongtrado.precio}`)
} else {
    console.log("no existe ese código")
}

let contador = 0
let suma = 0 

for (const p of productos){
    if(p.stock === 0){
        contador++

        suma = suma + (p.precio * p.stock)
    }
}
 console.log(`la cantidad de productos sin stock es: ${contador}`)
 console.log(`el total del inventario es: ${suma}`)
