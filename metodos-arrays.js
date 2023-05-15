const colors = ['rojo', 'verde', 'azul'];

// .join() Nos permite transformar un arreglo a un cadena de texto y separar cada elemnto.
console.log(colors.join(', '));

// .sort() Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetica.
console.log(colors.sort());

// .reverse() Nos permite ordenar un arreglo de cadenas de texto, de forma desendente.
console.log(colors.reverse());

// .concat() Nos permite juntar 2 arreglos
const letters = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];
console.log(letters.concat(numbers));

// .push() Nos permite agregar un elemento al final del arreglo
letters.push('z');
console.log(letters);

// .pop() Nos permite elimnar el últumo elemento del array
letters.pop();
console.log(letters);

// .shift() Nos permite eliminar el primer elemento del array
const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
days.shift();
console.log(days);

// .unshift Nos permite agregar un elemento al inicio del arreglo
days.unshift('pelotas');
console.log(days);

// .splice() Nos permite insertar elementos a un array donde le especifiquemos.
// - 1er parametro. Posicion donde lo insertaremos
// - 2do parametro. Si queremos eliminar elementos desde la posicion indicada
// Resto de parametros, los elementos a insertar

const names = ['Hugo', 'Paco', 'Luis'];
names.splice(1, 1, 'yo', 'mero', 'yaa');
console.log(names);

// .slice() Nos permite copiar una parte del arrelo a otro
// - 1er parametro. posicion desde donde comenzaremos a copiar.
// -2do parametro. hasta antes de que elemento copiar.

const fruits = ['guayaba', 'manzana', 'durazno', 'pera', 'fresa', 'platano'];
const favoriteFruits = fruits.slice(2, 5);
console.log(favoriteFruits);


// .indexOf() Nos permite ver el indice de alun elemento
// en caso de no encontrarlo devuelve -1

console.log(fruits.indexOf('durazno'));














