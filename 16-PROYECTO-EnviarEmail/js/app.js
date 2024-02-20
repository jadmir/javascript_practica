document.addEventListener('DOMContentLoaded' , function() {
  // seleccionar los elementos del interfaz
  const imputEmail = document.querySelector('#email')
  const imputAsunto = document.querySelector('#asunto')
  const imputMensaje = document.querySelector('#mensaje')
  const formulario = document.querySelector('#formulario')

  // Asignar eventos
  imputEmail.addEventListener('blur', validar)
  imputAsunto.addEventListener('blur', validar)
  imputMensaje.addEventListener('blur', validar)
   
  function validar(e) {
    console.log(e.target.parentElement.nextElementSibling)
    if(e.target.value.trim() === '') {
      MostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
    } else {
      console.log('si ghay algo')
    }
  }

  function MostrarAlerta(mensaje, referencia) {
    //generar una alerta de html
    const error = document.createElement('P')
    error.textContent = mensaje
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center', 'rounded-lg')
    
    //Inyectar el error al forumlario
    referencia.appendChild(error)
  }

})