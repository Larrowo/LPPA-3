// Arrays
console.log("")
console.log("Ejercicios 3")

// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.

let array1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let array2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


console.log("")
console.log("Ejercicio 3.1")
console.log(array1[4], array1[10]);

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).



console.log("")
console.log("Ejercicio 3.2")
console.log(array2.sort())

// Agregar un elemento al principio y al final del array (utilizar unshift y push).

array1.push("A");
array1.unshift("B");
console.log("")
console.log("Ejercicio 3.3")
console.log(array1)

// Quitar un elemento del principio y del final del array (utilizar shift y pop).

array1.shift();
array1.pop();
console.log("")
console.log("Ejercicio 3.4")
console.log(array1)

// Invertir el orden del array (utilizar reverse).

console.log("")
console.log("Ejercicio 3.5")
console.log(array1.reverse())

// Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).


console.log("")
console.log("Ejercicio 3.6")
stringNew = array1.join("-");
console.log(array1.join("-"))

// Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).


console.log("")
console.log("Ejercicio 3.7")
array1.reverse();
console.log(array1.slice(4,11))

console.log("")
console.log("-------------------------------------------------------------")
