// const objA = {
//     chaveA: 'A'
//     // __proto__ :Object.prototype

// }


// const objB = {
//     chaveB: 'B'
//     // __proto__ : objA

// }

// Object.setPrototypeOf(objB, objA);


function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (percentual) {
    this.preco += this.preco * (percentual / 100)
}

Produto.prototype.desconto = function (percentual) {
    this.preco -= this.preco * (percentual / 100)
}

const p1 = new Produto('Camiseta', 50);
// p1.aumento(100)
// p1.desconto(100)
// console.log(p1);

const p2 = {
    nome: 'Caneca',
    preco: 15,

}

// console.log(p2);
// console.log(p2.aumento(100));
// console.log(p2.desconto(100));

const p3 = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Canequinha'
    },

    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 200
    },
});

console.log(p3);