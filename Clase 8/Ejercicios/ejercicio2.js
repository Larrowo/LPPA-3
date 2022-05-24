// 2. Strings
console.log("")
console.log("Ejercicios 2")


// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

let string1 = "Estos son strings";
let string2 = string1.substring(0,5);

console.log("")
console.log("Ejercicio 2.1")
console.log(string2)


// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

let string4 = "numerosos strings son creados";
let string5 = string4.substring(0,1).toUpperCase() + string4.substring(1).toLowerCase();

console.log("")
console.log("Ejercicio 2.2")
console.log(string5)


// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).


let string6 = string4.indexOf(" ");

console.log("")
console.log("Ejercicio 2.3")
console.log(string6)
console.log("")
console.log("-------------------------------------------------------------")



