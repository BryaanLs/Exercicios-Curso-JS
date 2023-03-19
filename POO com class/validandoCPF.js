class ValidaCPF {
    constructor(cpf) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpf.replace(/\D+/g, ''),
            enumerable: true
        })
    }

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.isSequencia()) return false;
        if (!this.geraNovoCpf()) return false;
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.contaCPF(cpfParcial);
        const digito2 = this.contaCPF(cpfParcial + digito1);

        if (cpfParcial + digito1 + digito2 === this.cpfLimpo) {
            return 'Esse cpf é valido'
        } else {
            return 'CPF INVALIDO';
        }
    }

    contaCPF(cpfParcial) {
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

    isSequencia() {
        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }

    static geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.contaCPF(cpfSemDigitos);
        const digito2 = this.contaCPF(cpfSemDigitos + digito1);
        return cpfSemDigitos + digito1 + digito2;
    }


}

const cpf = new ValidaCPF('705.484.450-52');
const cpf2 = new ValidaCPF('123.456.789-10');
const cpf3 = new ValidaCPF('409.677.738-22');
const cpf4 = new ValidaCPF('111.111.111-11');


console.log(cpf.valida());
console.log(cpf2.valida());
console.log(cpf3.valida());
console.log(cpf4.valida());
// console.log(cpf4.geraNovoCpf());
