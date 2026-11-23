
const password = document.getElementById("password");
const confirmar = document.getElementById("confirmar");
const guardar = document.getElementById("guardar");

const nivel = document.getElementById("nivel");
const mensaje = document.getElementById("mensaje");

// Función para validar la contraseña
function validarPassword() {

    let texto = password.value;

    // Comprobar los requisitos
    let requisitos = [
        texto.length >= 8,
        /[A-Z]/.test(texto),
        /[a-z]/.test(texto),
        /[0-9]/.test(texto),
        /[^A-Za-z0-9]/.test(texto)
    ];

    // Mostrar los resultados
    document.getElementById("caracteres").textContent =
        (requisitos[0] ? "✅" : "❌") + " Al menos 8 caracteres";

    document.getElementById("mayuscula").textContent =
        (requisitos[1] ? "✅" : "❌") + " Una letra mayúscula";

    document.getElementById("minuscula").textContent =
        (requisitos[2] ? "✅" : "❌") + " Una letra minúscula";

    document.getElementById("numero").textContent =
        (requisitos[3] ? "✅" : "❌") + " Un número";

    document.getElementById("simbolo").textContent =
        (requisitos[4] ? "✅" : "❌") + " Un símbolo";

    // Contar requisitos cumplidos
    let puntos = requisitos.filter(Boolean).length;

    // Mostrar nivel de seguridad
    if (puntos <= 2) {
        nivel.textContent = "Débil";
    } else if (puntos <= 4) {
        nivel.textContent = "Media";
    } else {
        nivel.textContent = "Fuerte";
    }

    // Comprobar si las contraseñas coinciden
    if (confirmar.value === texto && confirmar.value !== "") {
        mensaje.textContent = "✅ Las contraseñas coinciden";
    } else {
        mensaje.textContent = "❌ Las contraseñas no coinciden";
    }

    // Habilitar o deshabilitar el botón
    guardar.disabled = !(puntos === 5 && confirmar.value === texto && texto !== "");
}

// Evento input para ambos campos
password.addEventListener("input", validarPassword);
confirmar.addEventListener("input", validarPassword);

// Acción del botón
guardar.addEventListener("click", function() {
    alert("¡Contraseña guardada correctamente!");
});
