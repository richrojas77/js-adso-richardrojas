// 1. Contar palabras (ignora espacios extra al inicio, final o entre palabras)
function contarPalabras(frase) {
  
  const palabras = frase.trim().split(/\s+/);
  
  
  return frase.trim() === "" ? 0 : palabras.length;
}

// 2. Formato título (primera letra de cada palabra en mayúscula, el resto en minúscula)
function formatoTitulo(frase) {
  return frase
    .toLowerCase()                     
    .trim()                            
    .split(/\s+/)                      
    .map(palabra => 
      palabra.charAt(0).toUpperCase() + palabra.slice(1)
    )
    .join(" ");                       
}

console.log(contarPalabras("   hola    mundo   "))
console.log(contarPalabras("uno  dos   tres    cuatro"))
console.log(contarPalabras("   "))                     
console.log(contarPalabras("palabra"))               

console.log(formatoTitulo("hOLA mUNDO"))         
console.log(formatoTitulo("  jeVaScRiPt   es   GeNiAl  "))
console.log(formatoTitulo("a"))                  