
// 1. Seleccionar elementos HTML
const titulo = document.getElementById("titulo");
const nuevaTarea = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");
const btnTema = document.getElementById("btnTema");

// 2. Colocar el título
titulo.textContent = "📝 Tareas de Ana";

// 3. Crear arreglo de objetos
let tareas = [];

// 4. Función para mostrar las tareas
function render() {

    lista.innerHTML = "";

    // Recorrer el arreglo
    for (let tarea of tareas) {

        let li = document.createElement("li");

        // Crear texto de la tarea
        let span = document.createElement("span");
        span.textContent = tarea.texto;

        // Marcar o desmarcar tarea
        span.addEventListener("click", function() {
            tarea.hecha = !tarea.hecha;
            render();
        });

        // Si está hecha, agregar clase
        if (tarea.hecha) {
            li.classList.add("hecha");
        }

        // Crear botón eliminar
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";

        botonEliminar.addEventListener("click", function() {
            tareas = tareas.filter(t => t.id !== tarea.id);
            render();
        });

        // Agregar elementos al li
        li.appendChild(span);
        li.appendChild(botonEliminar);

        // Agregar li a la lista
        lista.appendChild(li);
    }

    // 5. Contar tareas pendientes
    let pendientes = tareas.filter(t => !t.hecha).length;

    contador.textContent = `${pendientes} pendientes de ${tareas.length}`;
}

// 6. Función para agregar tareas
function agregarTarea() {

    let texto = nuevaTarea.value.trim();

    // Comprobar si está vacío
    if (texto === "") {
        nuevaTarea.classList.add("error");
        return;
    }

    nuevaTarea.classList.remove("error");

    // Crear objeto
    let tarea = {
        id: Date.now(),
        texto: texto,
        hecha: false
    };

    // Guardar en el arreglo
    tareas.push(tarea);

    // Limpiar el input
    nuevaTarea.value = "";

    // Actualizar pantalla
    render();
}

// 7. Agregar con el botón
btnAgregar.addEventListener("click", agregarTarea);

// 8. Agregar presionando Enter
nuevaTarea.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        agregarTarea();
    }

});

// Quitar error mientras escribe
nuevaTarea.addEventListener("input", function() {
    if (nuevaTarea.value.trim() !== "") {
        nuevaTarea.classList.remove("error");
    }
});

// 9. Cambiar tema oscuro y claro
btnTema.addEventListener("click", function() {

    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        btnTema.textContent = "☀️ Modo claro";
    } else {
        btnTema.textContent = "🌙 Modo oscuro";
    }

});

// Mostrar lista inicial
render();
