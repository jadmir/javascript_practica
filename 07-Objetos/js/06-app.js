const producto  = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas :{
            peso: '1kg',
            medidas: '1m'
        },
        fabricacion: {
            pais: "china"
        }
    },

}


const {nombre, informacion: {fabricacion: {pais}}} = producto
console.log(nombre)
console.log(pais)
