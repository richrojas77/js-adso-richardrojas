
// 1. Crear el catálogo de productos
let catalogo = [
    { codigo: 1, nombre: "Mouse", categoria: "Tecnologia", precio: 35000, stock: 10 },
    { codigo: 2, nombre: "Teclado", categoria: "Tecnologia", precio: 60000, stock: 5 },
    { codigo: 3, nombre: "Monitor", categoria: "Pantallas", precio: 450000, stock: 0 },
    { codigo: 4, nombre: "Audifonos", categoria: "Audio", precio: 80000, stock: 8 },
    { codigo: 5, nombre: "Parlante", categoria: "Audio", precio: 120000, stock: 0 }
];

// 2. Buscar producto por codigo
function buscarPorCodigo(codigo) {
    let producto = catalogo.find(p => p.codigo === codigo);

    if (producto) {
        return producto;
    } else {
        return null;
    }
}

// 3. Contar productos agotados
function contarAgotados() {
    let contador = 0;

    for (let producto of catalogo) {
        if (producto.stock === 0) {
            contador++;
        }
    }

    return contador;
}

// 4. Calcular el valor total del inventario
function valorInventario() {
    let total = 0;

    for (let producto of catalogo) {
        total += producto.precio * producto.stock;
    }

    return total;
}

// 5. Crear el menu
let opcion;

while (opcion !== "4") {

    opcion = prompt(
        "MENU DE INVENTARIO\n" +
        "1. Buscar producto por codigo\n" +
        "2. Contar productos agotados\n" +
        "3. Valor total del inventario\n" +
        "4. Salir\n\n" +
        "Seleccione una opcion:"
    );

    if (opcion === "1") {

        let codigo = Number(prompt("Ingrese el codigo del producto:"));

        let resultado = buscarPorCodigo(codigo);

        if (resultado !== null) {
            alert(
                "Producto encontrado:\n" +
                "Nombre: " + resultado.nombre + "\n" +
                "Categoria: " + resultado.categoria + "\n" +
                "Precio: $" + resultado.precio + "\n" +
                "Stock: " + resultado.stock
            );
        } else {
            alert("El producto no existe");
        }

    } else if (opcion === "2") {

        alert("Productos agotados: " + contarAgotados());

    } else if (opcion === "3") {

        alert("Valor total del inventario: $" + valorInventario());

    } else if (opcion === "4") {

        alert("Saliendo del programa...");

    } else {

        alert("Opcion no valida. Intente nuevamente.");

    }
}
