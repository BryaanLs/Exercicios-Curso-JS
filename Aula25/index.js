const pessoa = {
    nome: 'Bryan',
    sobrenome: 'Soares',
    idade: '21',
    endereco: {
        rua: 'Francisco Preto',
        numero: 530
    }
}

const { endereco: { rua, numero }, endereco } = pessoa;

console.log(rua, numero, endereco);

// console.log(pessoa.endereco.rua);