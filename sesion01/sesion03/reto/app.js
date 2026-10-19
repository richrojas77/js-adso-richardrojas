/*let opcion = prompt("elije: 1-empanada, 2-arepa, 3-jugo")
switch (opcion){
    case "1":
        console.console.log("empanada a $ 2.500");
        break;
    case "2":
        console.log("arepa a $3.000")
        break;
    case "3":
        console.log("jugo a $4.000")
        break
    default:
        console.log("opcion no valida")
        break

        
}*/

/*let num1 = Number(prompt("Digite un numero entero: "))
let num2 = Number(prompt("Digite otro numero entero: "))
let operacion = prompt("Seleccione su operación: + , - , * , / ")

switch (operacion){
    case "+":
        console.log(`la suma de ${num1} + ${num2} es ${num1+num2}`)
        break
    case "-":
        let resta = num1 - num2
        console.log(`la resta de ${num1} - ${num2} es ${resta}`)
        break
    case "*":
        console.log(`la multiplicación de ${num1} * ${num2} es ${num1*num2}`)
        break
    case "/":
        if (num2 != 0){
            console.log(`la divisón de ${num1} / ${num2} es ${num1/num2}`)        
        }else{
            console.log("No se puede hacer una división entre cero(0)")
        }
        break
    default:
        console.log("Elección No Valida")
        break
}*/

/*Crea la carpeta `Sesion03/Reto`. El programa pide el **nombre** del aprendiz y una **nota** de 0.0 a 5.0 y:

1. Si la nota no es un número, avisa con un `alert`.
2. Si está fuera del rango 0.0 a 5.0, avisa con otro mensaje.
3. Si es válida, la clasifica así:*/


let nombre = prompt("ingrese su nombre: ")
let nota = Number(prompt("ingrese su nota de 0.0 a 5.0: "))


if(isNaN(nota)){
    alert("no es un nunmero")
}

else if(nota >= 4.6 && nota <= 5.0){
 console.log(`${nombre} 🏆Exelente`)
}
   

else if(nota >= 4.0 && nota <= 4.5)
    console.log(`${nombre}⭐sobresaliente`)

else if(nota >= 3.0 && nota <= 3.9)
    console.log(`${nombre}✅ Aprobado`)

else if (nota >= 0.0 && nota <= 2.9){
    console.log(`${nombre}❌No aprobado`)
}









