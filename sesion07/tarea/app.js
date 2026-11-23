
// 1. Crear arreglo de contactos
let agenda = [
    { nombre: "Ana", telefono: "3001234567", correo: "ana@gmail.com" },
    { nombre: "Juan", telefono: "3104567890", correo: "juan@gmail.com" },
    { nombre: "Daniela", telefono: "3209876543", correo: "daniela@gmail.com" }
];

// 2. Funcion para agregar contactos
function agregarContacto() {

    let nombre = prompt("Ingrese el nombre:");
    let telefono = prompt("Ingrese el telefono:");
    let correo = prompt("Ingrese el correo:");

    let contacto = {
        nombre: nombre,
        telefono: telefono,
        correo: correo
    };

    agenda.push(contacto);

    alert("Contacto agregado correctamente");
}

// 3. Funcion para mostrar agenda
function verAgenda() {

    console.table(agenda);

}

// 4. Funcion para buscar contactos
function buscarContacto() {

    let busqueda = prompt("Ingrese parte del nombre que desea buscar:");

    let encontrados = agenda.filter(contacto =>
        contacto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    if (encontrados.length > 0) {

        console.table(encontrados);

    } else {

        alert("No se encontraron contactos");

    }
}

// 5. Crear menu
let opcion = "";

while (opcion !== "4") {

    opcion = prompt(
        "AGENDA DE CONTACTOS\n\n" +
        "1. Agregar contacto\n" +
        "2. Ver agenda\n" +
        "3. Buscar contacto\n" +
        "4. Salir\n\n" +
        "Seleccione una opcion:"
    );

    if (opcion === "1") {

        agregarContacto();

    } else if (opcion === "2") {

        verAgenda();

    } else if (opcion === "3") {

        buscarContacto();

    } else if (opcion === "4") {

        alert("Saliendo de la agenda...");

    } else {

        alert("Opcion incorrecta");

    }

}
