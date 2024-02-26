//campos del formuario
const mascotaInput = document.querySelector('#mascota')
const propietarioInput = document.querySelector('#propietario')
const telefonoInput = document.querySelector('#telefono')
const fechaInput = document.querySelector('#fecha')
const horaInput = document.querySelector('#hora')
const sintomasInput = document.querySelector('#sintomas')

//UI
const formulario = document.querySelector('#nueva-cita')
const contenedorCitas = document.querySelector('#citas')

let editando

class Citas {
  constructor() {
    this.citas = []
  }
  agregarCita(cita) {
    this.citas = [...this.citas, cita]
  }
  eliminarCita(id){
    this.citas = this.citas.filter(cita => cita.id !== id)
  }
  editarCita(citaActualiza) {
    this.citas = this.citas.map(cita => cita.id === citaActualiza.id ? citaActualiza : cita)
  }
}

class UI {

  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement('div')
    divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12', 'rounded')

    //Agregar Clase en base del tipo error
    if(tipo === 'error') {
      divMensaje.classList.add('alert-danger')
    } else {
      divMensaje.classList.add('alert-success')
    }

    //mensaje de error
    divMensaje.textContent = mensaje

    //Agregar al DOM 
    document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'))

    //quitar la alerta despues de 5 segundo
    setTimeout(() => {
      divMensaje.remove()
    }, 5000);
  }

  imprimirCitas({citas}) {

    this.limpiarHTML()

    citas.forEach( cita => {
      const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita

      const divCita = document.createElement('div')
      divCita.classList.add('cita', 'p-3')
      divCita.dataset.id = id

      //Scripting de los elementos de la cita
      const mascotaParrafo = document.createElement('h2')
      mascotaParrafo.classList.add('card-title', 'font-weight-border')
      mascotaParrafo.textContent = mascota

      const propietarioParrafo = document.createElement('p')
      propietarioParrafo.innerHTML = `
        <pan class="font-weight-bolder">Propietario:</pan> ${propietario}
      `

      const telefonoParrafo = document.createElement('p')
      telefonoParrafo.innerHTML = `
        <pan class="font-weight-bolder">Telefono:</pan> ${telefono}
      `

      const fechaParrafo = document.createElement('p')
      fechaParrafo.innerHTML = `
        <pan class="font-weight-bolder">Fecha:</pan> ${fecha}
      `

      const horaParrafo = document.createElement('p')
      horaParrafo.innerHTML = `
        <pan class="font-weight-bolder">Hora:</pan> ${hora}
      `

      const sintomasParrafo = document.createElement('p')
      sintomasParrafo.innerHTML = `
        <pan class="font-weight-bolder">Sintomas:</pan> ${sintomas}
      `

      //boton para elminar citas
      const btmEliminar = document.createElement('button')
      btmEliminar.classList.add('btn', 'btn-danger', 'mr-2')
      btmEliminar.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>'

      btmEliminar.onclick = () => eliminarCita(id)

      //añade un boton para editar
      const btnEditar = document.createElement('button')
      btnEditar.classList.add('btn', 'btn-info')
      btnEditar.innerHTML = 'Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" /></svg>'

      btnEditar.onclick = () => cargarEdicion(cita)

      //Agregar los parrafos al divCita
      divCita.appendChild(mascotaParrafo)
      divCita.appendChild(propietarioParrafo)
      divCita.appendChild(telefonoParrafo)
      divCita.appendChild(fechaParrafo)
      divCita.appendChild(horaParrafo)
      divCita.appendChild(sintomasParrafo)
      divCita.appendChild(btmEliminar)
      divCita.appendChild(btnEditar)

      //agregar las citas al html
      contenedorCitas.appendChild(divCita)

    })
  }

  limpiarHTML() {
    while(contenedorCitas.firstChild){
      contenedorCitas.removeChild(contenedorCitas.firstChild)
    }
  }
}

const ui = new UI()
const administrarCitas = new Citas()

//registar eventos
eventListeners()
function eventListeners() {
  mascotaInput.addEventListener('change', datosCita)
  propietarioInput.addEventListener('change', datosCita)
  telefonoInput.addEventListener('change', datosCita)
  fechaInput.addEventListener('change', datosCita)
  horaInput.addEventListener('change', datosCita)
  sintomasInput.addEventListener('change', datosCita)

  formulario.addEventListener('submit', nuevaCita)
}

// Onjeto con la informacion de la cita
const citaObj = {
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: ''
}

//Agrega datos al objeto de citas
function datosCita(e) {
  citaObj[e.target.name] = e.target.value

}

//valida y agrega una cita a la clase de citas
function nuevaCita(e) {
  e.preventDefault();
  
  //Extraer la informacion del objeto de citas
  const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj

  //validar
  if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
    ui.imprimirAlerta('Todos los campos son obligatorios', 'error')
    return
  }

  if(editando){
    ui.imprimirAlerta('Editado correctamente')
    //pasar el objeto de la cita  a edicion
    administrarCitas.editarCita({...citaObj})

    //regredar el texto del boton asu estado original
    formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita'

    //qutiar modo edicion
    editando = false
    
  } else {
    //generar un id unico
    citaObj.id = Date.now()

    //creando una nueva cita
    administrarCitas.agregarCita({...citaObj})

    //mendaje de agregado correctamente
    ui.imprimirAlerta('Se agrego correctamente')
  }

  

  //reiniciar objeto para la validacion
  reiniciarObjeto()

  //reinicia el formulario
  formulario.reset()

  //mostrar el HTML de las citas
  ui.imprimirCitas(administrarCitas)
}

function reiniciarObjeto() {
  citaObj.mascota= ''
  citaObj.propietario= ''
  citaObj.telefono= ''
  citaObj.fecha= ''
  citaObj.hora= ''
  citaObj.sintomas= ''
}

function eliminarCita(id){
  //eliminar la cita
  administrarCitas.eliminarCita(id)

  //muestre un mensaje
  ui.imprimirAlerta('La cita se elimino correctamente')

  //refrescar las citas
  ui.imprimirCitas(administrarCitas)
}

//carga los datos y el modo edicion
function cargarEdicion(cita){
  const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita

  //llenar los inputs
  mascotaInput.value = mascota
  propietarioInput.value = propietario
  telefonoInput.value = telefono
  fechaInput.value = fecha
  horaInput.value = hora
  sintomasInput.value = sintomas

  //llenar el objeto
  citaObj.mascota = mascota
  citaObj.propietario = propietario
  citaObj.telefono = telefono
  citaObj.fecha = fecha
  citaObj.hora = hora
  citaObj.sintomas = sintomas
  citaObj.id = id

  //cambiar el texto del boton
  formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios'
  editando = true
}