// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//Pessoa.prototype === p1.__proto__

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome
};

// instância
const p1 = new Pessoa('Bryan', 'S.') // <- Pessoa = Função construtora
const p2 = new Pessoa('Nayara', 'P.') // <- Pessoa = Função construtora
const list = [];

list.push(new Pessoa('JORGE', 'F'))
list.push(new Pessoa('Gregori', 'A'))
list.push(new Pessoa('Atenas', 'G'))
list.push(new Pessoa('Medusa', 'C'))

list.forEach((valor, indice) => {
    console.log(list[indice].nomeCompleto());
});

console.dir(p1);
console.dir(p2);
console.dir(p1.nomeCompleto());

