// 5. For
console.log("")
console.log("Ejercicios 5 'FOR'")
// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un 
// bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.



console.log("")
console.log("Ejercicio 5.1")
let arrayPalabras = ["palabra1","palabra2","palabra3","palabra4","palabra5"];

for (let index = 0; index < arrayPalabras.length; index++) {
  console.log(arrayPalabras[index]);
}

// Al array anterior convertir la primera letra de cada palabra en mayúscula y
//  mostrar una alerta por cada palabra modificada.

console.log("")
console.log("Ejercicio 5.2")
for (let index = 0; index < arrayPalabras.length; index++) {
    
    let palabra = arrayPalabras[index];
    palabra = palabra.substring(0,1).toUpperCase() + palabra.substring(1);
    console.log(palabra) 
}


// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array 
// con el número de la repetición, es decir que al final de la ejecución del bucle 
// for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. 
// ostrar por la consola del navegador el array final (utilizar console.log).



console.log("")
console.log("Ejercicio 5.3")

let arrayVacio = []

for (let index = 0; index < 10; index++) {3
    arrayVacio.push(index)
}

console.log(arrayVacio);

console.log("")
console.log("-------------------------------------------------------------")
