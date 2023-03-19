class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false
    }

    ligar() {
        if (this.ligado) return console.log(`${this.nome} Já está ligado`);
        this.ligado = true
    }
    desligar() {
        if (!this.ligado) return console.log(`${this.nome} Já está desligado`);
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo, memoria) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
        this.memoria = memoria;
    }

}

const _preco = Symbol('preco')
class Computer extends DispositivoEletronico {
    constructor(nome, marca, material, memDisc, memRam, processador, preco) {
        super(nome)
        this.marca = marca;
        this.material = material;
        this.memDisc = memDisc;
        this.memRam = memRam;
        this.processador = processador;
        this[_preco] = preco;
    }

    set preco(value) {
        this[_preco] = Number(value).toFixed(2);
    }

    get preco() {
        return 'R$ ' + Number(this[_preco]).toFixed(2);
    }

}

const d1 = new DispositivoEletronico('Luz')
const s1 = new Smartphone('Iphone', 'Preto', '11', '64GB')
const pc1 = new Computer('MacBook', 'Apple', 'Aluminio', '500GB', '8GB', 'I-7 8°', '6000')


console.log(d1);
console.log(s1);
console.log(pc1);

