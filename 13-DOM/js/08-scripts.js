const navegacion = document.querySelector('.navegacion')
console.log(navegacion)
//console.log(navegacion.childNodes) //los espacios en blanco son considerados elementos
//console.log(navegacion.children) 

//console.log(navegacion.children[1].nodeName)
//console.log(navegacion.children[1].nodeType//)

const card = document.querySelector('.card')
//console.log(card.children[1].children[1].textContent)
//console.log(card.children[0])

//card.children[1].children[1].textContent = 'Musica electronica 2023'
//card.children[0].src = 'img/hacer2.jpg'

// traversing the hijo al padre
//console.log(card.parentNode)
//console.log(card.parentElement.parentElement)

//console.log(card.nextElementSibling)

const ultimoCard = document.querySelector('.card:nth-child(4)')
console.log(ultimoCard.previousElementSibling)