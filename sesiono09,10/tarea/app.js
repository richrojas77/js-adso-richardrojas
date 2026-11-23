
// 1. Crear arreglo de productos
const productos = [
    { id: 1, nombre: "Laptop", precio: 2500000 },
    { id: 2, nombre: "Mouse", precio: 45000 },
    { id: 3, nombre: "Teclado", precio: 80000 },
    { id: 4, nombre: "Monitor", precio: 750000 }
];

// 2. Crear arreglo del carrito
let carrito = [];

// 3. Seleccionar elementos HTML
const listaProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("carrito");
const total = document.getElementById("total");

// 4. Mostrar productos disponibles
function mostrarProductos() {

    listaProductos.innerHTML = "";

    for (let producto of productos) {

        let div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
            <span>${producto.nombre} - $${producto.precio.toLocaleString("es-CO")}</span>
            <button>Agregar</button>
        `;

        let boton = div.querySelector("button");

        boton.addEventListener("click", function() {
            agregarCarrito(producto);
        });

        listaProductos.appendChild(div);
    }
}

// 5. Agregar producto al carrito
function agregarCarrito(producto) {

    carrito.push(producto);

    render();
}

// 6. Función para pintar el carrito
function render() {

    listaCarrito.innerHTML = "";

    for (let producto of carrito) {

        let li = document.createElement("li");

        li.innerHTML = `
            <span>${producto.nombre} - $${producto.precio.toLocaleString("es-CO")}</span>
            <button class="eliminar">❌</button>
        `;

        let botonEliminar = li.querySelector("button");

        botonEliminar.addEventListener("click", function() {

            quitarProducto(producto.id);

        });

        listaCarrito.appendChild(li);
    }

    // 7. Calcular total con reduce
    let suma = carrito.reduce(function(acumulador, producto) {
        return acumulador + producto.precio;
    }, 0);

    total.textContent = `Total: $${suma.toLocaleString("es-CO")}`;
}

// 8. Quitar productos del carrito
function quitarProducto(id) {

    let indice = carrito.findIndex(producto => producto.id === id);

    if (indice !== -1) {
        carrito.splice(indice, 1);
    }

    render();
}

// 9. Mostrar productos al iniciar
mostrarProductos();
render();
