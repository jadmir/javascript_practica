//variables

const marca = document. querySelector('#marca')
const year = document. querySelector('#year')
const minimo = document. querySelector('#minimo')
const maximo = document. querySelector('#maximo')
const puertas = document. querySelector('#puertas')
const transmision = document. querySelector('#transmision')
const color = document. querySelector('#color')
const resultado = document.querySelector('#resultado')

//contenedor para los resultados
const max = new Date().getFullYear()
const min = max - 14

// generar un objeto de busqueda
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
}

//Eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos() // muestra los autos al cargar


  // llena las opciones de año
  llenarSelect()
})

//Event listener para los select de busqueda
marca.addEventListener('change', e => {
  datosBusqueda.marca = e.target.value
})

year.addEventListener('change', e => {
  datosBusqueda.year = e.target.value
})

minimo.addEventListener('change', e => {
  datosBusqueda.minimo = e.target.value
})

maximo.addEventListener('change', e => {
  datosBusqueda.maximo = e.target.value
})

puertas.addEventListener('change', e => {
  datosBusqueda.puertas = e.target.value
})

transmision.addEventListener('change', e => {
  datosBusqueda.transmision = e.target.value
})

color.addEventListener('change', e => {
  datosBusqueda.color = e.target.value
  console.log(datosBusqueda)
})


//funciones
function mostrarAutos() {
  autos.forEach( auto => {
    const {marca, modelo, year, precio, puertas, color, transmision} = auto
    const autoHTML = document.createElement('P')

    autoHTML.textContent = `
      ${marca} ${modelo} - Año: ${year} - Precio: ${precio} - ${puertas} puertas - Color: ${color} - Transmision: ${transmision}
    `

    // insertar en el HTML
    resultado.appendChild(autoHTML)
  })
}

//genera los años del select
function llenarSelect() {
  for( let i = max; i >= min; i--) {
    const opcion = document.createElement('option')
    opcion.value = i
    opcion.textContent = i
    year.appendChild(opcion) // agrega las opciones de año al seleec
  }
}