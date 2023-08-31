// Bloque de código de bienvenida y selección de opciones
const msjBienvenida = () => {
    alert("¡Bienvenido a Felicitas!");
};

class producto{
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
    }

    inventario(){
        return " id: "+this.id+ " nombre: "+this.nombre+ " precio: $"+this.precio+"\n"
    }
}

class carrito{
    constructor(){
        this.agregadosCarrito = []
    }
}

class verProductos{
    constructor(){
        this.muestrarioProductos = []
    }

    aniadir(producto){
        this.muestrarioProductos.push(producto)
    }

    mostrar(){
        let detalleLP = "En la próxima pantalla, deberá ingresar el número de ID correspondiente al producto que desea\n\n\n "
        this.muestrarioProductos.forEach( producto => {
            detalleLP = detalleLP + producto.inventario()
        })
        return detalleLP
    }

    explorar(id){
        return this.muestrarioProductos.find(producto => producto.id == id)
    }
}

//Creo litado de productos
const p1 = new producto(1, "Conjunto Roma", 25300)
const p2 = new producto(2, "Sastrero Mia", 11400)
const p3 = new producto(3, "Sweater Victoria", 7600)
const p4 = new producto(4, "Anillo cobra", 5300)
const p5 = new producto(5, "Aros Renata", 4400)
const p6 = new producto(6, "Collar Estrellas", 3600)


const reguladorP = new verProductos()
reguladorP.aniadir(p1)
reguladorP.aniadir(p2)
reguladorP.aniadir(p3)
reguladorP.aniadir(p4)
reguladorP.aniadir(p5)
reguladorP.aniadir(p6)

// Muestro al usuario el listado de mis productos
alert( reguladorP.mostrar() )

// Pedimos al usuario registrar el ID del producto deseado 
let id = Numbre(prompt("Ingrese el número de ID correspondiente al producto que desea"))

const producto = reguladorP.explorar(id)

//Obtener stock de dichos productos
let productosDeseados = Numbre(prompt ("Ingrese la cantidad que desea obtener del mismo"))

producto.cantidad = productosDeseados

// Llamar a las funciones de bienvenida y selección de opciones
msjBienvenida();
