// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numEmDobro = numeros.map(valor => valor * 2);

// console.log(numEmDobro);


//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adiciona uma chave id em cada objeto
const pessoas = [
    { nome: 'Bryan', idade: 21 },
    { nome: 'Nayara', idade: 18 },
    { nome: 'Gilberto', idade: 40 },
    { nome: 'Manuela', idade: 9 },
    { nome: 'Bud', idade: 2 },
    { nome: 'Maria', idade: 92 },
];

const nomePessoas = pessoas.map(obj => obj.nome);
const idade = pessoas.map(obj => ({ idade: obj.idade }));

// const idPessoaObjOriginal = pessoas.map((obj, indice) => {
//     obj.id = indice + 1;
//     return obj;
// });


//No código acima "idPessoaObjOriginal" estamos iterando e modificando o obj original, para evitar esse comprotamento caso haja necessidade o código a baixo é uma solução!

const idPessoaNewObj = pessoas.map((obj, indice) => {
    const newObj = { ...obj }
    newObj.id = indice + 1;
    return newObj;
});

console.log(pessoas);
console.log(idPessoaNewObj);
