// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     acumulador.push(valor * 2)
//     return acumulador
// }, []);

// console.log(total);





//Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Bryan', idade: 21 },
    { nome: 'Nayara', idade: 18 },
    { nome: 'Gilberto', idade: 40 },
    { nome: 'Manuela', idade: 9 },
    { nome: 'Manuel', idade: 52 },
    { nome: 'Bud', idade: 2 },
    { nome: 'Maria', idade: 92 },
];


const maisVelha = pessoas.reduce(function (acumulador, valor) {

    if (acumulador.idade > valor.idade) {

        return acumulador;
    };


    return valor;
});



console.log(maisVelha);
console.log(pessoas);