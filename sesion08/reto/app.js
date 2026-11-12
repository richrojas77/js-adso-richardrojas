const pedidos = [
  { id: 1, cliente: "Ana", plato: "Bandeja paisa", cantidad: 2, precioUnitario: 32000, estado: "entregado", domicilio: true },
  { id: 2, cliente: "Luis", plato: "Ajiaco", cantidad: 1, precioUnitario: 28000, estado: "pendiente", domicilio: false },
  { id: 3, cliente: "Sofía", plato: "Arepa de choclo", cantidad: 4, precioUnitario: 8000, estado: "entregado", domicilio: true },
  { id: 4, cliente: "Juan", plato: "Sancocho", cantidad: 3, precioUnitario: 26000, estado: "pendiente", domicilio: true },
  { id: 5, cliente: "María", plato: "Empanadas x6", cantidad: 2, precioUnitario: 12000, estado: "entregado", domicilio: false },
  { id: 6, cliente: "Pedro", plato: "Bandeja paisa", cantidad: 1, precioUnitario: 32000, estado: "entregado", domicilio: true },
  { id: 7, cliente: "Camila", plato: "Mondongo", cantidad: 2, precioUnitario: 25000, estado: "pendiente", domicilio: false },
  { id: 8, cliente: "Andrés", plato: "Arroz con pollo", cantidad: 3, precioUnitario: 22000, estado: "entregado", domicilio: true },
  { id: 9, cliente: "Valentina", plato: "Ajiaco", cantidad: 2, precioUnitario: 28000, estado: "entregado", domicilio: false },
  { id: 10, cliente: "Daniel", plato: "Chicharrón", cantidad: 5, precioUnitario: 15000, estado: "pendiente", domicilio: true }
];


// 1 Con map, un arreglo nuevo donde cada pedido tenga su total (cantidad × precio). Muéstralo con console.table.

const pedidos_mapa = pedidos.map((x) => x.cantidad * x.precioUnitario)
console.table(pedidos_mapa)

// 2 Con filter, cuántos pedidos están pendientes.

const pedido_pendiente = pedidos.filter((x)=> x.estado == "pendiente")
console.log(pedido_pendiente)

// 3 Con filter y reduce, el total vendido de los pedidos entregados, en pesos colombianos.


let pedidos_entregados = pedidos.filter((x) => x.estado === "entregado");

console.log(pedidos_entregados);


let total_vendido = pedidos_entregados.reduce((acumulador, x) => {
    return acumulador + (x.cantidad * x.precioUnitario);
}, 0);


console.log(
    `Total vendido: ${total_vendido.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP"
    })}`
);


// Con toSorted (o sort sobre una copia) y slice, los 3 pedidos más grandes.
let pedidos_ordenados = pedidos.toSorted((a, b) =>
    (b.cantidad * b.precioUnitario) - (a.cantidad * a.precioUnitario)
);

let top_3 = pedidos_ordenados.slice(0, 3);

console.log("Los 3 pedidos más grandes:");
console.log(top_3);



// find , promt
let numero = Number(prompt("Ingrese el número del pedido:"));


let pedido_buscado = pedidos.find((x) => x.id === numero);

if (pedido_buscado) {
    console.log("Pedido encontrado:");
    console.log(pedido_buscado);
} else {
    console.log("El pedido no existe.");
}


//4. Con some, di si todavía hay domicilios pendientes por despachar.
let domicilios_pendientes = pedidos.some((x) =>
    x.domicilio === true && x.estado === "pendiente"
);

if (domicilios_pendientes) {
    console.log("Hay domicilios pendientes por despachar.");
} else {
    console.log("No hay domicilios pendientes por despachar.");
}