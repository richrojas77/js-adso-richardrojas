
/*arreglo tren */
let tren = ["ana","sofia","ricardo","rosalva","edison"]

console.log(tren)

/*saber la cantidad de elementos*/
console.log(tren.length)

/* ver pocision dos en el arreglo*/
console.log(tren[2]) 

/* ver ultima pocision del arreglo*/
console.log(tren[tren.length-1]) 

/* agregar nombre al arreglo*/
tren.push("susana")
console.log(tren)

tren.unshift("pedro")
console.log(tren)

tren.pop()
console.log(tren)

/*pregunta si sofia esta en el arreglo*/
console.log(tren.includes("sofia"))

console.log(tren.indexOf("ricardpo"))

//console.log(tren.splice(3,-1))

for(let i = tren.length-1;i >= 3; i--){
    console.log([i])
    console.log(tren[i])
}

let nombre = "estefania"
let nombrearreglo = [] // arreglo vacia
for(let x of nombre){
    console.log(x)
    nombrearreglo.push(x) //agrega a la lista vacia
}


for(let x in nombre){
    console.log(x)
}

console.log(tren.join("-")) 
console.log(nombrearreglo.join("-")) 

for( let x = 0; x < tren.length; x++){
    console.log(`${x+1}. ${tren[x]}`)
}

for(let pasajero of tren){
    console.log(pasajero)
}

console.table(tren)



const compras = []
let compra

do{
    compra = prompt("ingrese un producto para agregar \n deje vacio para terminar")
    compras.push(compra.trim())
}while(compra != "")
compras.pop()
console.table(compras)


for( let x = 0; x < compras.length; x++){
    console.log(`${x+1}. ${compras[x]}`)
}

let quitar_producto = prompt("ingrese el producto que dese remover")
let pocision = -1
pocision = compras.indexOf(quitar_producto)
console.log(compras.indexOf(quitar_producto))
compras.splice(pocision,1)
console.table(compras)
if (pocision == -1)
    console.log("no se elimino ningun producto")
else console.log(`producto ${quitar_producto} se elimino correctamente`)