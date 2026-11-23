const form = document.querySelector("#formInscripcion");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Siempre primero

  const nombre = document.querySelector("#nombre").value.trim();
  const programa = document.querySelector("#programa").value;
  const jornada = form.querySelector('input[name="jornada"]:checked');
  const acepta = document.querySelector("#terminos").checked;

  // Validaciones
  let valido = true;

  valido = marcar("nombre", validarNombre(nombre)) && valido;
  // Aquí puedes añadir más validaciones:
  // valido = marcar("programa", validarPrograma(programa)) && valido;
  // etc.

  console.log(nombre, programa, jornada ? jornada.value : "sin jornada", acepta);

  if (valido) {
    console.log("Formulario enviado sin recargar 🚀");
    // Aquí iría el código real de envío (fetch, etc.)
  } else {
    console.log("Hay errores en el formulario");
  }
});

function validarNombre(valor) {
  if (valor === "") return "El nombre es obligatorio.";
  if (valor.length < 3) return "Escribe al menos 3 letras.";
  return "";
}

function marcar(id, mensaje) {
  const errorElement = document.querySelector(`#error-${id}`);
  if (errorElement) errorElement.textContent = mensaje;

  const campo = document.querySelector(`#${id}`);
  if (campo) campo.classList.toggle("invalido", mensaje !== "");

  return mensaje === ""; // true si no hay error
}