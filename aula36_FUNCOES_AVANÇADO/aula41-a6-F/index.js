//factory function (função fabrica)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;

        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');

        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura: a,
        peso: p,

        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    }
}

const p1 = criaPessoa('Bryan', 'Soares', 1.62, 52);
const p2 = criaPessoa('Gilberto', 'Pereira', 1.65, 82);
p1.nomeCompleto = 'Bryan Luccas Soares'
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.altura);
// console.log(p1.peso);
// console.log(p1.imc);