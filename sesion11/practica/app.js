const form = document.querySelector("#formInscripcion");

form.addEventListener("submit", (e) => {
    
const nombre = document.querySelector("#nombre").value.trim();
const programa = document.querySelector("#programa").value;
const jornada = form.querySelector('input[name="jornada"]:checked');
const acepta = document.querySelector("#terminos").checked;
const numero_documento = querySelector("#documento").value.trim()
marcar("nombre", validarNombre(document.querySelector("#nombre").value));    
marcar("programa", validarNombre(document.querySelector("#programa").value));    
marcar("jornada", validarNombre(document.querySelector("#jornada").value));    
marcar("acepta", validarNombre(document.querySelector("#acepta").value));    
marcar("numero_documento", validarNombre(document.querySelector("#documento").value));    



console.log(nombre, numero_documento, programa, jornada ? jornada.value : "sin jornada", acepta);

  e.preventDefault();
  console.log("Formulario enviado sin recargar 🎉");
});


function validarNombre(valor) {
  if (valor.trim() === "") return "El nombre es obligatorio.";
  if (valor.trim().length < 3) return "Escribe al menos 3 letras.";
  return "";
}


function marcar(id, mensaje) {
  document.querySelector(`#error-${id}`).textContent = mensaje;
  const campo = document.querySelector(`#${id}`);
  if (campo) campo.classList.toggle("invalido", mensaje !== "");
  return mensaje === "";
}

