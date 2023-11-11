class Comprar {
    constructor(carrito) {
        this.carrito = carrito;
    }

    obtenerSubtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acumulador, descartable) => acumulador + descartable.precio, 0);
        } else {
            return 0;
        }
    }
}


const carrito = [];

const descartables = [
    { tipo: 'Ginecologico', stock: 15, precio: 1300 },
    { tipo: 'Odontologico', stock: 65, precio: 1900 },
    { tipo: 'Oftalmologico', stock: 30, precio: 1000 },];

function buscarProducto(tipo) {
    let productoSeleccionado = descartables.find((descartable) => descartable.tipo === tipo)
    return productoSeleccionado;
}

function comprar() {
    let tipodescartables = prompt("Ingresa el tipo de descartable que deseas comprar").toLowerCase();
    let productoElegido = buscarProducto(tipodescartables);

    if (productoElegido !== undefined) {
        carrito.push(productoElegido);
        // console.table(carrito)
        let respuesta = confirm("¿Deseas elegir otro descartable❔");
        if (respuesta === true) {
            comprar();
        } else {
            const carritoCompra = new Comprar(carrito);
            let subtotal = carritoCompra.obtenerSubtotal();
            console.table(carrito);
            console.log("✅ El costo total de tu compra es de $ " + subtotal + ".\nMuchas gracias por tu compra.🥰");
        }
    } else {
        alert("⛔️ Error en el tipo de descartable ingresado. Refresca para comenzar de nuevo.");
    }
}    