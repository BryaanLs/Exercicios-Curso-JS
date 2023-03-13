const pessoa = new Object();
pessoa.nome = 'Bryan';
pessoa.sobrenome = 'Soares';
pessoa.idade = 21;
pessoa.falarNome = () => { `${this.nome} está falando seu nome.` };
pessoa.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};
