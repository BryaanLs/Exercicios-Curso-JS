function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;


    this.soma = () => {
        return 'Nao quero somar rs';
    }
}

const p1 = new Pessoa();

p1.nome = 'Bryan';
p1.sobrenome = 'Soares';

console.log(p1.soma());