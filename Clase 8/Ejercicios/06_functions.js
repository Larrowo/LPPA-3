
// 6. Funciones
console.log("")
console.log("Ejercicios 6 'FUNCIONES'")
// Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de 
// dicha variable en la consola del navegador.
console.log("")
console.log("Ejercicio 6.1 y 6.2")

let suma = (a, b) => {
    if (typeof (a) === "number" && typeof (b) === "number") {
        if (Number.isInteger(a, b)) {
            return a + b
        } else {
            return console.log("One of the inputs is not an interger")
        }
    }else{
        return console.log("One of the inputs is not a number")
    }
}
console.log(suma(1, 2))


// A la función suma anterior, agregarle una validación para controlar si alguno de 
// los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
//  tiene error y retornar el valor NaN como resultado.


console.log("")
console.log("Ejercicio 6.2")

console.log(suma("a", 2))


// A la función suma del ejercicio 6b) agregarle una llamada que valide que los números 
// sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el 
// número convertido a entero (redondeado).


console.log("")
console.log("Ejercicio 6.3")

console.log(suma(1.2, 2))


console.log("")
console.log("-------------------------------------------------------------")
