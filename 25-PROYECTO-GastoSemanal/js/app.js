//variables y selectores
const formulario = document.querySelector('#agregar-gasto')
const gatoListado = document.querySelector('#gastos ul')


//eventos
eventListeners()
function eventListeners() {
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto)
  formulario.addEventListener('submit', agregarGastos)
}


//clases
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto)
    this.restante = Number(presupuesto)
    this.gastos = []
  }

  nuevoGasto(gasto){
    this.gastos = [...this.gastos, gasto]
    console.log(this.gastos)
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    //Extrayendo el valores
    const {presupuesto, restante} = cantidad
    //Agregando el HTML
    document.querySelector('#total').textContent = presupuesto
    document.querySelector('#restante').textContent = restante
  }

  imprimirAlerta(mensaje, tipo) {
    //crear el div
    const divMensaje = document.createElement('DIV')
    divMensaje.classList.add('text-center', 'alert', 'rounded')

    if(tipo === 'error') {
      divMensaje.classList.add('alert-danger')
    } else {
      divMensaje.classList.add('alert-success')
    }

    //mensaje de error
    divMensaje.textContent = mensaje

    //insertar en el html
    document.querySelector('.primario').insertBefore(divMensaje, formulario)

    //quitar el HTML
    setTimeout(() => {
      divMensaje.remove()
    }, 3000);
  } 
}

//instanciar
const ui = new UI()

let presupuesto;

//funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt('¿Cual es tu presupuesto?')
  console.log(presupuestoUsuario)
  if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
    window.location.reload()
  }

  //Presupuesto valido
  presupuesto = new Presupuesto(presupuestoUsuario)
  console.log(presupuesto)

  ui.insertarPresupuesto(presupuesto)
}

function agregarGastos(e) {
  e.preventDefault();
  
  //leer los datos del formulario
  const nombre = document.querySelector('#gasto').value
  const cantidad = Number(document.querySelector('#cantidad').value)

  //validar
  if(nombre === '' || cantidad === ''){
    ui.imprimirAlerta('Ambos campos son obligatorios', 'error')
    return
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta('Cantidad no valida', 'error')
    return
  }

  // Generar un objeto con el gasto
  const gasto = {nombre, cantidad, id: Date.now()}

  //añade un nuevo gasto
  presupuesto.nuevoGasto(gasto)

  //mensaje de todo bien
  ui.imprimirAlerta('Gasto agregado correctamente')

  //resetear formulario
  formulario.reset()
}