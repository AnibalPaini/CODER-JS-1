//ANIBAL PAINI

const menu = [
    {id: 1, nombre: 'Milanesa Napolitana', precio: 150},
    {id: 2, nombre: 'Tallarines con salsa', precio: 100},
    {id: 3, nombre: 'Carne al horno', precio: 200},
    {id: 4, nombre: 'Pollo al disco', precio: 130},
    {id: 5, nombre: 'Pizza Especial', precio: 80},
    {id: 6, nombre: 'Hamburguesa', precio: 80}
];

let total = 0;
let ordenar = true;

function mostrarMenu() {
    console.log("Menú:");
    for (let i = 0; i < menu.length; i++) {
        console.log(menu[i].id + " - " + menu[i].nombre + " $" + menu[i].precio);
    }
    console.log("\nIngrese el número del plato que desea (0 para salir).");
}
mostrarMenu();


while (ordenar) {
    let opcion = parseInt(prompt("\nIngrese el número del plato (0 para salir): "));

    if (opcion === 0) {
        ordenar = false;
        alert("Gracias por su pedido. Total a pagar: $" + total);
    } else if (opcion >= 1 && opcion <= menu.length) {
        let platoSeleccionado = menu[opcion - 1]; 
        total += platoSeleccionado.precio; 
        console.log("Has seleccionado: " + platoSeleccionado.nombre + ". Subtotal: $" + total);
    } else {
        alert("Opción errónea, por favor intente de nuevo.");
    };
};

console.log("El total es: $",total);


