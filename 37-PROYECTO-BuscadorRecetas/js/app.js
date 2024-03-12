function iniciarApp() {

  const selectCateogiras = document.querySelector('#categorias')
  selectCateogiras.addEventListener('change', seleccionarCategoria)

  const resultado = document.querySelector('#resultado')
  const modal = new bootstrap.Modal('#modal', {})

  obtenerCategorias()

  function obtenerCategorias(){
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    fetch(url)
      .then(respuesta => {
        return respuesta.json()
      })
      .then(resultado => {
        mostrarCategorias(resultado.categories)
      })
  }

  function mostrarCategorias(categorias = []) {
    categorias.forEach(categoria => {
      const {strCategory} = categoria
      const option = document.createElement('OPTION')
      option.value = strCategory
      option.textContent = strCategory
      selectCateogiras.appendChild(option)
    })
  }

  function seleccionarCategoria(e) {
    const categoria = e.target.value
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => {
        mostrarRecetas(resultado.meals)
      })
  }

  function mostrarRecetas(recetas = []) {

    limpiarHTML(resultado) //limpiar HTML

    const heading = document.createElement('H2')
    heading.classList.add('text-center', 'text-blanck', 'my-5')
    heading.textContent = recetas.length ? 'Resultados': 'No hay Resultados'
    resultado.appendChild(heading)

    //iterar en los resultados
    recetas.forEach(receta => {
      const { idMeal, strMeal, strMealThumb } = receta
      const recetaContenedor = document.createElement('DIV')
      recetaContenedor.classList.add('col-md-4')

      const recetaCard = document.createElement('DIV')
      recetaCard.classList.add('card', 'mb-4')

      const recetaImagen = document.createElement('IMG')
      recetaImagen.classList.add('card-img-top')
      recetaImagen.alt = `Imagen de la receta ${strMeal}`
      recetaImagen.src = strMealThumb

      const recetaCardBody = document.createElement('DIV')
      recetaCardBody.classList.add('card-body')

      const recetaHeading = document.createElement('H3')
      recetaHeading.classList.add('card-title', 'mb-3')
      recetaHeading.textContent = strMeal

      const recetaButton = document.createElement('BUTTON')
      recetaButton.classList.add('btn', 'btn-danger', 'w-100')
      recetaButton.textContent = 'Ver Receta'
      //recetaButton.dataset.bsTarget = "#modal"
      //recetaButton.dataset.bsToggle = "modal"
      recetaButton.onclick = function() {
        seleccionarReceta(idMeal)
      }


      //inyectar en el html
      recetaCardBody.appendChild(recetaHeading)
      recetaCardBody.appendChild(recetaButton)

      recetaCard.appendChild(recetaImagen)
      recetaCard.appendChild(recetaCardBody)

      recetaContenedor.appendChild(recetaCard)

      resultado.appendChild(recetaContenedor)
    });
  }

  function seleccionarReceta(id) {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => mostrarRecetaModal(resultado.meals[0]))
  }

  function mostrarRecetaModal(receta){
    const {idMeal, strInstructions, strMeal, strMealThumb } = receta

    //añadir contenido al modal
    const modalTitle = document.querySelector('.modal .modal-title')
    const modalBody = document.querySelector('.modal .modal-body')

    modalTitle.textContent = strMeal
    modalBody.innerHTML = `
      <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}" />
      <h3 class="my-3">Instrucciones</h3>
      <p>${strInstructions}</p>
      <h3 class="my-3">Ingredientes y Cantidades</h3>
    `

    const listGroup = document.createElement('UL')
    listGroup.classList.add('list-group')
    //mostrar cantidades e ingredientes
    for(let i = 1; i <= 20; i++){
      if(receta[`strIngredient${i}`]){
        const ingrediente = receta[`strIngredient${i}`]
        const cantidad = receta[`strMeasure${i}`]

        const ingredientesLi = document.createElement('LI')
        ingredientesLi.classList.add('list-group-item')
        ingredientesLi.textContent = `${ingrediente} - ${cantidad}`

        listGroup.appendChild(ingredientesLi)
      }
    }

    modalBody.appendChild(listGroup)

    //muestra el modal
    modal.show()
  }

  function limpiarHTML(selector) {
    while(selector.firstChild) {
      selector.removeChild(selector.firstChild)
    }
  }

}

document.addEventListener('DOMContentLoaded', iniciarApp)