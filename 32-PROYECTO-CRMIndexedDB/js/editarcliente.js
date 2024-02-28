(function() {
  let DB;
  let idCLiente;

  const nombreInput = document.querySelector('#nombre')
  const emailInput = document.querySelector('#email')
  const telefonoInput = document.querySelector('#telefono')
  const empresaInput = document.querySelector('#empresa')

  const formulario = document.querySelector('#formulario')

  document.addEventListener('DOMContentLoaded', () => {
    conectarDB();

    //actualiza el registro 
    formulario.addEventListener('submit', actualizarCliente)

    //verificar el id de la url
    const parametrosURL = new URLSearchParams(window.location.search)
    idCliente = parametrosURL.get('id')
    console.log(idCliente)
    if(idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente)
      }, 1000);
      
    }
  })

  function actualizarCliente(e){
    e.preventDefault();
    
    if(nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput.value === '') {
      imprimirAlerta('Todos los campos son obligatorios', 'error')
      return
    }

    //actualizar Cliente
    const clienteActualizado = {
      nombre: nombreInput.value,
      email: emailInput.value,
      telefono: telefonoInput.value,
      empresa: empresaInput.value,
      id: idCLiente
    }

    const transaction = DB.transaction(['crm'], 'readwrite')
    const objectStore = transaction.objectStore('crm')

    objectStore.put(clienteActualizado)

    transaction.oncomplete = function() {
      console.log('editado correctamente')
    }

    transaction.onerror = function() {
      console.log('huboi un error')
    }
  }

  function llenarFormulario(datosCliente) {
    const { nombre, email, telefono, empresa } = datosCliente

    nombreInput.value = nombre
    emailInput.value = email
    telefonoInput.value = telefono
    empresaInput.value = empresa
    
  }

  function obtenerCliente(id){
    const transaction = DB.transaction(['crm'], 'readonly')
    const objectStore = transaction.objectStore('crm')

    const cliente = objectStore.openCursor()
    cliente.onsuccess = function(e) {
      const cursor = e.target.result

      if(cursor) {
        if(cursor.value.id === Number(id)) {
          llenarFormulario(cursor.value)
        } 
        cursor.continue()
      }
    }
  }

  function conectarDB() {
    const abrirConexion = window.indexedDB.open("crm", 1);

    abrirConexion.onerror = function () {
      console.log("hubo un error");
    };

    abrirConexion.onsuccess = function () {
      DB = abrirConexion.result;
    };
  }
})()