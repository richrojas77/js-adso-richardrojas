// El dueño de un restaurante quiere un reporte de los pedidos del día. Crea la carpeta Sesion08/Reto y pega estos datos:

const textoPeliculas = `[
  {"titulo": "Encanto", "anio": 2021, "genero": "Animación", "calificacion": 4.4},
  {"titulo": "El abrazo de la serpiente", "anio": 2015, "genero": "Drama", "calificacion": 4.6},
  {"titulo": "Coco", "anio": 2017, "genero": "Animación", "calificacion": 4.8},
  {"titulo": "Pájaros de verano", "anio": 2018, "genero": "Drama", "calificacion": 4.3},
  {"titulo": "Intensamente 2", "anio": 2024, "genero": "Animación", "calificacion": 4.2},
  {"titulo": "Interestelar", "anio": 2014, "genero": "Ciencia ficción", "calificacion": 4.7},
  {"titulo": "Dune", "anio": 2021, "genero": "Ciencia ficción", "calificacion": 4.1},
  {"titulo": "La estrategia del caracol", "anio": 1993, "genero": "Comedia", "calificacion": 4.5}
]`;


// 1 Conviértelo en arreglo con JSON.parse.
const texto = JSON.parse(textoPeliculas)
console.log(texto)

// 2 Con filter: las películas de animación y, aparte, las estrenadas desde 2018.

let pelicula_ano = texto.filter((x) => x.anio >= 2018)
console.log(pelicula_ano)

let pelicula_animacion = texto.filter((x) => x.genero == "Animación")
console.log(pelicula_animacion)

// 3 Con map: la lista de títulos en mayúscula.

var pelicula_mapa = texto.map((x) => x.titulo.toUpperCase())
console.log(pelicula_mapa)

// 4 Con reduce: la calificación promedio.


let pelicula_promedio = texto.reduce((acumulador, x) => acumulador + x.calificacion, 0);

console.log(pelicula_promedio);


const promedio = pelicula_promedio / texto.length;

console.log(`Promedio de la calificación: ${promedio.toFixed(2)}`);



let peliculas_ordenadas = texto.toSorted((a, b) => b.calificacion - a.calificacion);


let top_3 = peliculas_ordenadas.slice(0, 3);


let resultado = JSON.stringify(top_3, null, 2);

console.log(resultado);