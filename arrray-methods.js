const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const shophing = [
    { nombre: 'Monitor 27 Puladas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

months.forEach(month => {
    if (month == "Enero") {
        console.log("Verdadero");
    }
});

months.forEach((month, i) => {
    if (month === "Abril") console.log(`${i}`);
});

// Array Methods Include  -   esta incluido
//-----------------------------------------

const result = months.includes("Enero");
console.log(result);

// Array Methods some -> Para arrelo de objetosa  - Some al menos uno se cumple
//-----------------------------------------

const exist = shophing.some(item => item.nombre === 'Teclado');
console.log(exist);

const existMonth = months.some(month => month === "Diciembre");
console.log(existMonth);

// Array methods findIndex  -  el index encontrado o -1

const indexMonth = months.findIndex(month => month === "Abril");
console.log(indexMonth);

const indexShop = shophing.findIndex(shop => shop.nombre === "Pepita");
console.log(indexShop);

// Array methods reduce  -  opera con el resultado

// con un ciclo sumamos
let total = 0;
shophing.forEach(shop => total += shop.precio);
console.log(total);

// Con reduce
const res = shophing.reduce((total, shop) => total + shop.precio, 0);
console.log(res);

const a = months.reduce

// Array methods filter  -  un filtro aplicado a los datos
const filtrados = shophing.filter(shop => shop.precio < 400);
console.log(filtrados);

// Array method find  -  busca la primera coincidencia
const buscado = shophing.find(shop => shop.precio === 100);
console.log(buscado);

// Array methods every   -  todos los datos deven cumplir condicion
const todos = shophing.every(shop => shop.precio === 10101);
console.log(todos);



