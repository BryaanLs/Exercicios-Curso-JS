const numeros = [[1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000], ['a', 'b', 'c']]
const [primeiroArray, segundoArray] = numeros;

const [letraUm, , letraTres] = segundoArray;
const [primeiroNumero, ...resto] = primeiroArray;


// console.log(primeiroArray, segundoArray);

console.log(letraUm, letraTres);
console.log(primeiroNumero, resto);