function Conta(ag, conta, saldo) {
    this.agencia = ag;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log('Saldo insuficiente para saque no valor de: R$' + valor.toFixed(2))
        return
    };
    this.saldo -= valor;
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo()
}

Conta.prototype.verSaldo = function () {
    console.log(`Ag.: ${this.agencia}  -  Conta: ${this.conta}  |  Saldo: R$${this.saldo.toFixed(2)}`)
}

function CC(ag, conta, saldo, limite) {
    Conta.call(this, ag, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constrctor = CC;

CC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log('Saldo insuficiente para saque no valor de: R$' + valor.toFixed(2))
        return
    };
    this.saldo -= valor;
}

Conta.prototype.verSaldoCC = function () {
    console.log(`Ag.: ${this.agencia}  -  Conta: ${this.conta}  |  Saldo: R$${this.saldo.toFixed(2)}   |  Limite: R$${this.limite.toFixed(2)}`)
}
const conta = new Conta(0003, 53972896, 0);
const cc = new CC(0004, 1234567, 0, 100);

console.log(conta);
conta.depositar(10);
conta.sacar(21);

console.log('');
console.log('---------------------------');
console.log('');

console.log(cc);
cc.depositar(10)
cc.sacar(100);
cc.verSaldoCC();
