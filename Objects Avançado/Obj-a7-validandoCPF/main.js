// 705.484.450-52      070.987.720-03

/* 
7x   0x   5x   4x   8x   4x   4x   5x   0x
10   9    8    7     6    5   4    3    2
70   0    40   28   48   20   16   15   0 = 237
11 - (237 % 11) = 5 

Se o digito for maior que 9, consideramos 0.

7x   0x   5x   4x   8x   4x   4x   5x   0x  5x
11   10    9    8    7    6   5    4    3   2
77   0    45   32   56   24   20   20   0   10
11 - (284 % 11) = 2

os 2 digitos gerados pelo calculo, deve ser concatenado com os outros 9 o cpf 
e posteriormente comparar os dois cpfs para saber se ele é valido 

*/



function ValidaCPF(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;


    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.contaCPF(cpfParcial);
    const digito2 = this.contaCPF(cpfParcial + digito1);

    if (cpfParcial + digito1 + digito2 === this.cpfLimpo) {
        return 'Esse cpf é valido'
    } else {
        return 'CPF INVALIDO';
    }

    return true;
}

ValidaCPF.prototype.contaCPF = function (cpfParcial) {

    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0)
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);

}

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('705.484.450-52');
const cpf2 = new ValidaCPF('123.456.789-10');
const cpf3 = new ValidaCPF('409.677.738-22');
const cpf4 = new ValidaCPF('111.111.111-11');


console.log(cpf.valida());
console.log(cpf2.valida());
console.log(cpf3.valida());
console.log(cpf4.valida());