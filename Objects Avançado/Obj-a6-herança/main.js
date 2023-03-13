//Produto -> aumento, desconto
// Camiseta, caneca
// Camiseta = Cor
// Caneca = Material

function Produto(nome, preco, cor) {
    this.nome = nome;
    this.preco = preco;
    this.cor = cor;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function defineProto(objA, objB) {
    objA.prototype = Object.create(objB.prototype);
    objA.prototype.constructor = objA;
}


function Camiseta(nome, preco, cor, tam) {
    Produto.call(this, nome, preco, cor);
    this.tam = tam;
}

function Caneca(nome, preco, cor, estampa, peso) {
    Produto.call(this, nome, preco, cor)
    this.estampa = estampa;
    this.peso = peso;
}

defineProto(Camiseta, Produto);
defineProto(Caneca, Produto);


const produto = new Produto('gen', 5)
const camiseta1 = new Camiseta('Regata', 80, 'branca');
const caneca1 = new Caneca('Star Wars', 180, 'preta', 'estampado', '600g');
console.log(produto);
console.log(camiseta1);
console.log(caneca1);
camiseta1.aumento(200)
caneca1.desconto(100)
console.log(camiseta1.preco);
console.log(caneca1.preco);