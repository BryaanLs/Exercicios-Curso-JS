// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const maiorQueDez = numeros.filter(valor => valor > 10);
// console.log(maiorQueDez);




//Retorne as pessoas cujo o nome tem 5 letras ou mais
//Retorne as pessoas cujo a idade seja maior que 50 anos
//Retorne as pessoas cujo o nome termina com a letra a

const pessoas = [
    { nome: 'Bryan', idade: 21 },
    { nome: 'Nayara', idade: 18 },
    { nome: 'Gilberto', idade: 40 },
    { nome: 'Manuela', idade: 9 },
    { nome: 'Bud', idade: 2 },
    { nome: 'Maria', idade: 92 },
];

const maisQueCincoLetras = pessoas.filter(obj => obj.nome.length > 5);
const maisQue50Anos = pessoas.filter(obj => obj.idade > 50);
const nomeTerminaEmA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(maisQueCincoLetras);
console.log(maisQue50Anos);
console.log(nomeTerminaEmA);