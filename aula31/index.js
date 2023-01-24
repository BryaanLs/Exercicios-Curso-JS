const numeros = []

for (let i = 0; i < 1000; i++) {
    numeros.push(i)
}

for (let num of numeros) {
    if (num % 2 === 0
    ) {
        console.log(' - ');
        continue;
    }

    if (num === 999) {
        console.log('encontrei', num);
        break
    }
    console.log(num);
}