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
    this.calcularRestante()
  }

  calcularRestante() {
    const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
    this.restante = this.presupuesto - gastado
    console.log(this.restante)
  }

  eliminarGasto(id) {
    this.gastos = this.gastos.filter(gasto => gasto.id !== id)
    this.calcularRestante()
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

  mostrarGastos(gastos) {

    this.limpiarHTML() //elimina el HTML previo

    //iterar sobre los gastos
    gastos.forEach( gasto => {
      const { cantidad, nombre, id} = gasto

      //Crear un LI
      const nuevoGasto = document.createElement('li')
      nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center'
      nuevoGasto.dataset.id = id

      //Agregar el HTML del gasto
      nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad}</span>`


      //Boton para borrar el gasto
      const btnBorrar = document.createElement('button')
      btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto')
      btnBorrar.innerHTML = 'borrar &times'
      btnBorrar.onclick = () => {
        eliminarGasto(id)
      }
      nuevoGasto.appendChild(btnBorrar)

      //agregar al html
      gatoListado.appendChild(nuevoGasto)
    })
  }

  limpiarHTML() {
    while(gatoListado.firstChild) {
      gatoListado.removeChild(gatoListado.firstChild)
    }
  }

  actualizarRestante(restante) {
    document.querySelector('#restante').textContent = restante
  } 

  comprobarPresupuesto(presupuestoObj) {
    const {presupuesto, restante} = presupuestoObj

    const restanteDiv =  document.querySelector('.restante')

    //comprobar 25%
    if( (presupuesto / 4) > restante ) {
      restanteDiv.classList.remove('alert-success', 'alert-warning')
      restanteDiv.classList.add('alert-danger')
    } else if ((presupuesto / 2) > restante) {
      restanteDiv.classList.remove('alert-success')
      restanteDiv.classList.add('alert-warning')
    } else {
      restanteDiv.classList.remove('alert-danger', 'alert-warning')
      restanteDiv.classList.add('alert-success')
    }

    //si el total es menor a 0
    if(restante <=0 ) {
      ui.imprimirAlerta('El presupuesto se ha agotado', 'error')
      formulario.querySelector('button[type="submit"]').disabled = true
    }
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

  //Imprimir los gastos
  const { gastos, restante } = presupuesto
  ui.mostrarGastos(gastos)

  ui.actualizarRestante(restante)

  ui.comprobarPresupuesto(presupuesto)

  //resetear formulario
  formulario.reset()
}

function eliminarGasto(id) {
  //elimina del objeto
  presupuesto.eliminarGasto(id)
  //elimina los gastos del html
  const {gastos, restante} = presupuesto
  ui.mostrarGastos(gastos)
  ui.actualizarRestante(restante)
  ui.comprobarPresupuesto(presupuesto)
}