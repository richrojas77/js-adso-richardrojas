
let correos = [];
let nombreCompleto;

// Función para quitar tildes y convertir ñ en n
function limpiarTexto(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

// Pedir nombres hasta que el usuario deje vacío el prompt
while (true) {

    nombreCompleto = prompt("Ingrese el nombre completo (deje vacío para terminar):");

    // Si está vacío, termina el ciclo
    if (nombreCompleto === null || nombreCompleto.trim() === "") {
        break;
    }

    // Separar el nombre completo en palabras
    let partes = nombreCompleto.trim().split(/\s+/);

    // Obtener inicial del primer nombre
    let inicial = partes[0][0];

    // Obtener primer apellido
    let apellido;

    if (partes.length >= 3) {
        apellido = partes[2];
    } else if (partes.length === 2) {
        apellido = partes[1];
    } else {
        alert("Ingrese al menos un nombre y un apellido.");
        continue;
    }

    // Limpiar tildes y convertir a minúsculas
    inicial = limpiarTexto(inicial);
    apellido = limpiarTexto(apellido);

    // Crear correo institucional
    let correo = inicial + apellido + "@adso.ejemplo.co";

    // Guardar correo en el arreglo
    correos.push(correo);
}

// Mostrar lista de correos
console.log("LISTA DE CORREOS INSTITUCIONALES");

for (let i = 0; i < correos.length; i++) {
    console.log((i + 1) + ". " + correos[i]);
}

// Mostrar cantidad de correos
console.log("Total de correos generados: " + correos.length);
