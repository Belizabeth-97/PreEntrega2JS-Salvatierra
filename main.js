// Bloque de código de bienvenida y selección de opciones
const msjBienvenida = () => {
    alert("¡Bienvenido a Felicitas!");
};

// Llamar a las funciones de bienvenida 
msjBienvenida();

class producto{
    constructor(id, nombre, precio){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 10
    }

    agregarUnidades (stockSolicitado){
        this.Unidades = this.Unidades + stockSolicitado
    }

    inventario(){
        return " "+this.id+ " "+this.nombre+ " $"+this.precio+"\n"
    }

    descripcionCarrito (){
        return " "+this.id+ " "+this.nombre+ " $"+this.precio+ " cantidad: "+this.cantidad+"\n"
    }

    validarStock(cantidadSolicitada) {
        return cantidadSolicitada <= this.cantidad 
    }
}

class carrito{
    constructor(){
        this.agregadosCarrito = []
    }
    // Verificar si el producto ya existe en el carrito.
    agregar(productoN, cantidadSolicitada){
       let Existe = this.agregadosCarrito.some(producto => producto.id == productoN.id)
    // Si no existe, agregarlo al carrito.
    if (!Existe){ 
        let productoYCantidad = { producto: productoN, cantidadSolicitada }
        this.agregadosCarrito.push(productoYCantidad);  
        console.log(' producto " ${productoN.nombre} "agregado al carrito.')
    }
}
    mostrar(){
        let detalleListaProductos = "Tu pedido:\n\n"
        this.agregadosCarrito.forEach( productoYCantidad => {
            let mensaje =  productoYCantidad.cantidadSolicitada + " " + productoYCantidad.producto.nombre  + " " + "$"+productoYCantidad.producto.precio + "c/u. \n"
            detalleListaProductos = detalleListaProductos + mensaje
         })
        return detalleListaProductos
    }

    valorTotal(){
        return this.agregadosCarrito.reduce( (total,producto) => total + producto.precio * producto.cantidad )
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
        let detalleLP = "En la próxima pantalla, deberá ingresar el número correspondiente al producto que desea\n\n"
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

const tienda = new carrito()

const reguladorP = new verProductos()
reguladorP.aniadir(p1)
reguladorP.aniadir(p2)
reguladorP.aniadir(p3)
reguladorP.aniadir(p4)
reguladorP.aniadir(p5)
reguladorP.aniadir(p6)

let finalizarCompra = "finalizar"

do{
alert( reguladorP.mostrar() )

    let id = Number(prompt("Ingrese el número de ID correspondiente al producto que desea"))
        
    const productoSeleccionado = reguladorP.explorar(id)

    let cantidadSolicitada = Number(prompt ("Ingrese la cantidad que desea obtener del mismo"))
    
    productoSeleccionado.validarStock(cantidadSolicitada)
    
    tienda.agregar(productoSeleccionado, cantidadSolicitada)

alert (tienda.mostrar())
 
finalizarCompra = prompt ("Si usted desea finalizar la compra, ingrese la palabra finalizar").toLowerCase()
} while ((finalizarCompra != "finalizar"))
