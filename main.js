// Bloque de código de bienvenida y selección de opciones
const msjBienvenida = () => {
    alert("¡Bienvenido a Felicitas!");
};

class producto{
    constructor(id, nombre,precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
    }
}

class carrito{
    constructor(){
        this.agregadosCarrito = []
    }
}

class verProductos {
    constructor(){
        this.muestrarioProductos = []
    }
}

//Creo litado de productos
const p1 = new producto(1, "Conjunto Roma", 25300)
const p2 = new producto(2, "Sastrero Mia", 11400)
const p3 = new producto(3, "Sweater Victoria", 7600)
const p4 = new producto(4, "Anillo cobra", 5300)
const p5 = new producto(5, "Aros Renata", 4400)
const p6 = new producto(6, "Collar Estrellas", 3600)


// Función para mostrar opciones
const selectOption = () => {
    const opcionProductos = 1;
    const opcionAccesorios = 2;

    const eleccion = Number(prompt("Elige: 1 - Productos, 2 - Accesorios"));

    if (eleccion === opcionProductos) {
        mostrarOpciones(productos);
    } else if (eleccion === opcionAccesorios) {
        mostrarOpciones(accesorios);
    } else {
        alert("Eleccion inválida");
    }
};

// Función para mostrar opciones y obtener elección
const mostrarOpciones = (lista) => {
    let mensaje = "Elige una opción:\n";

    for (let posicion = 0; posicion < lista.length; posicion++) {
        mensaje += `${posicion + 1} - ${lista[posicion].nombre}\n`;
    }

    const eleccion = Number(prompt(mensaje)) - 1;

    if (eleccion >= 0 && eleccion < lista.length) {
        const itemElegido = lista[eleccion];
        alert(`Elegiste ${itemElegido.nombre}. El precio es $${itemElegido.precio}`);
    } 
    else {
    alert("Eleccion inválida");
    }
}

const mostrarCarrito = () => {
let carritoMensaje = "Productos en el carrito:\n";

carrito.items.forEach(item => {
carritoMensaje += `${item.nombre} - $${item.precio}\n`;
});

carritoMensaje += `Total: $${carrito.total}`;

alert(carritoMensaje);
};

// Llamar a las funciones de bienvenida y selección de opciones
msjBienvenida();
selectOption();
mostrarCarrito();