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

function validaCPF(cpf) {
    return Object.create(protoCPF, {
        cpfLimpo: { value: cpf.replace(/\D+/g, ''), enumerable: true }
    })
}

const valida = {
    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false + console.log('CPF INVALIDO');
        if (this.isSequencia()) return false + console.log('O CPF NÃO PODE SER UMA SEQUÊNCIA');

        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.contaCPF(cpfParcial);
        const digito2 = this.contaCPF(cpfParcial + digito1);

        if (cpfParcial + digito1 + digito2 === this.cpfLimpo) {
            return console.log('CPF VÁLIDO')
        } else {
            return console.log('CPF INVÁLIDO');
        }
        return true;
    }
}
const contaCPF = {
    contaCPF(cpfParcial) {
        let regressivo = cpfParcial.length + 1;
        const cpfArray = Array.from(cpfParcial);
        const total = cpfArray.reduce((ac, val) => {
            ac += regressivo * Number(val);
            regressivo--;
            return ac
        }, 0)
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }
}
const isSequencia = {
    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
}
const protoCPF = Object.assign({}, valida, isSequencia, contaCPF); /* Esse protoCPF joga automaticamente as variaveis valida, contaCPF e isSequencia lá no   */


const cpf1 = validaCPF('705.484.450-52');
const cpf2 = validaCPF('40967773822');

cpf1.valida();
cpf2.valida();