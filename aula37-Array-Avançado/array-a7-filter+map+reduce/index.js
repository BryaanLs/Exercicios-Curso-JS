
//Retorne a pessoa mais velha
// const pessoas = [
//     { nome: 'Bryan', idade: 21 },
//     { nome: 'Nayara', idade: 18 },
//     { nome: 'Gilberto', idade: 40 },
//     { nome: 'Manuela', idade: 9 },
//     { nome: 'Manuel', idade: 52 },
//     { nome: 'Bud', idade: 2 },
//     { nome: 'Maria', idade: 92 },
// ];

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Filtrando pares transformando em dobro e retornando o maior
// const resultado = numeros
//     .filter(valor => valor % 2 === 0) //Filtra apenas os numeros pares
//     .map(valor => valor * 2) // retorna o dobro dos valores
//     .reduce((acumulador, valor) => acumulador > valor ? acumulador : valor); //Reduz e retorna o maior valor



// -------------------------------------------------------------------------------------------------------------
// Filtrando pares transformando em dobro e retornando a soma de todos

const resultado = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador += valor)

console.log(resultado);
console.log(numeros);