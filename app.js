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
    console.log("Ingrese el número del plato que desea (0 para salir).");
    console.log("10% OF SI SUPERA LOS $400.");
};
mostrarMenu();


while (ordenar) {
    let opcion = parseInt(prompt("Ingrese el número del plato (0 para salir): "));

    if (opcion === 0) {
        ordenar = false;
        alert("Gracias por su pedido! ");
    } else if (opcion >= 1 && opcion <= menu.length) {
        let platoSeleccionado = menu[opcion - 1]; 
        total += platoSeleccionado.precio; 
        console.log("Seleccion: " + platoSeleccionado.nombre + ". Subtotal: $" + total);
    } else {
        alert("Opción errónea, por favor intente de nuevo.");
    };
};

const promocion = (total) => {
    let descuento=0;
    if (total>400){
        descuento=total*0.1;
        total-=descuento;
    }

    console.log("Descuento: $",descuento);

    return total;
};

total=promocion(total);
console.log("El total es: $",total);

