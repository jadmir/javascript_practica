let i = 1 // Inicializar el while

while(i < 100) { //condicional

    if(i % 15 === 0) {
        console.log(`${i} FIZZBUZZ`)
    } else if (i % 3 === 0) {
        console.log(`${i} fizz`)
    } else if (i % 5 === 0) {
        console.log(`${i} buuz`)
    }

    i++ //Incremento
}