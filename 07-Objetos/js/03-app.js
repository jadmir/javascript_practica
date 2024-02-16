const producto  = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
}

//agregar nuevas propiedas
producto.imagen = "imagen.jpg"


//eliminar propiedades del objeto
delete producto.disponible

console.log(producto)