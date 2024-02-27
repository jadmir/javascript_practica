(function() {
  let DB;

  const nombreInput = document.querySelector('#nombre')
  const emailInput = document.querySelector('#email')
  const telefonoInput = document.querySelector('#telefono')
  const empresaInput = document.querySelector('#empresa')

  document.addEventListener('DOMContentLoaded', () => {
    conectarDB();

    //verificar el id de la url
    const parametrosURL = new URLSearchParams(window.location.search)
    const idCliente = parametrosURL.get('id')
    console.log(idCliente)
    if(idCliente) {
      setTimeout(() => {
        obtenerCliente(idCliente)
      }, 1000);
      
    }
  })

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