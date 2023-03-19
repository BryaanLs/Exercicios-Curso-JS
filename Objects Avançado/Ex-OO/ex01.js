function criaPessoa(nome, cpf, sexo, idade) {
    return Object.create(protoPessoa, {
        nome: {
            get() {
                return nome
            },
            set(value) {
                nome = value
            },
            enumerable: true
        },

        cpf: {
            get() {
                if (typeof cpf !== "number") return Number(cpf.replace(/\D+/g, ''))
                else return cpf
            },
            set(value) {
                cpf = Number(value)
            },
            enumerable: true
        },

        sexo: {
            get() {
                return sexo.slice(0, 1).toUpperCase()
            },
            set(value) {
                sexo = value.slice(0, 1).toUpperCase()
            },
            enumerable: true

        },

        idade: {
            get() {
                if (typeof idade !== "number") return Number(idade.replace(/\D+/g, ''))
                else return idade
            },
            set(value) {
                idade = Number(value)
            },
            enumerable: true
        }

    })
}

const menu = {
    mostraPessoa() {
        console.log();
        console.log('====================');
        console.log(`Nome: ${this.nome}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`SEXO: ${this.sexo}`);
        console.log(`Idade: ${this.idade}`);
        console.log('====================');
        console.log();
    }
}

const protoPessoa = Object.assign({}, menu)

const p1 = criaPessoa('Bryan', '409.677.738-22', 'masculino', '21');
