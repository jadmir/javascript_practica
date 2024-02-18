let i = 1

do {

    if(i % 15 === 0) {
        console.log(`${i} FIZZBUZZ`)
    } else if (i % 3 === 0) {
        console.log(`${i} fizz`)
    } else if (i % 5 === 0) {
        console.log(`${i} buuz`)
    }
    i++
} while (i < 100); //condicion