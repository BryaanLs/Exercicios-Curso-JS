// for in -> lê os indices ou chaves do objeto

// const linguagens = ['Python', 'JavaScript', 'Node.js', 'PHP']

// for (let i in linguagens) {
//     console.log(linguagens[i]);
// }

const pessoa = {
    nome: 'Bryan',
    sobrenome: 'Soares',
    profissao: 'Web developer',
    stack: 'FullStack'
}

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}