//Función Flecha

//1. ----------------------------------------------------------------------------//


function mifuncion (a,b) {
    return a+b;
}

console.log (mifuncion(2,3));

//Estructura de Función flecha

//2. ----------------------------------------------------------------------------//

let salu2 = () => {};

//3. ---------------------------------------------------------------------------//
let saludo = (nombre) => {
    return 'Saludos' + nombre;
}

console.log(saludo('Luis'));

//4. ----------------------------------------------------------------------------//

let saludar = nombre => 'Saludos' + nombre;

console.log(saludar('Ramirez'));

//5. ----------------------------------------------------------------------------//
// pasar multiples parametros

let suma=(a,b) => a+b;
console.log(suma(5,8));

//6. ----------------------------------------------------------------------------//
// crear objeto en funcion flecha

let obj = () => ({nombre:'Roberto', edad:20})
 
// llamamos al objeto y accedemos a la propiedad
//let persona = obj().nombre;

console.log(obj(). nombre);

//7. ----------------------------------------------------------------------------//
//arreglos
let arrFunc = () => [1,2,3,4,5];
console.log(arrFunc());
//accedimiento al arreglo
console.log(arrFunc()[4]);

//----------Ejercicio----------------//


