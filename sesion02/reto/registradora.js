let producto = prompt("ingrese un producto: ")
let valor_del_producto = Number(prompt("ingrese valor del producto"))
let cantidad_del_producto = Number(prompt("ingrese cantidad del producto"))
let subtotal = valor_del_producto * cantidad_del_producto
const iva = 0.19 * subtotal
let descuento = 0.10 * subtotal
let total = (subtotal + iva) - descuento

console.log(subtotal)
console.log(descuento)
console.log(iva)
console.log(total)

if (Number.isNaN(valor_del_producto)){
console.log("no es un numero")
}

if (Number.isNaN (cantidad_del_producto)){
    console.log("no es un numero")
}

alert(`
    subtotsl: ${subtotal.toLocaleString("es-CO", { style: "currency", currency: "COP" })}
    descuento: ${descuento.toLocaleString("es-CO", { style: "currency", currency: "COP" })}
    iva: ${iva.toLocaleString("es-CO", { style: "currency", currency: "COP" })}
    totasl: ${total.toLocaleString("es-CO", { style: "currency", currency: "COP" })}`)




