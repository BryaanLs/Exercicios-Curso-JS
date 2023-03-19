function criaAluno(nome, ra, ac1, ac2, ag, af) {
    return Object.create(protoAluno, {
        nome: {
            get() { return nome },
            set(value) { nome = value },
            enumerable: false
        },
        ra: {
            get() { return Number(ra.replace(/\D+/g, '')) },
            set(value) { ra = Number(value.replace(/\D+/g, '')) },
            enumerable: false
        },
        ac1: {
            get() { return Number(ac1) },
            set(value) { ac1 = Number(value) },
            enumerable: false
        },
        ac2: {
            get() { return Number(ac2) },
            set(value) { ac2 = Number(value) },
            enumerable: false
        },
        ag: {
            get() { return Number(ag) },
            set(value) { ag = Number(value) },
            enumerable: false
        },
        af: {
            get() { return Number(af) },
            set(value) { af = Number(value) },
            enumerable: false
        },
        media: {
            get() { return this.calcularMedia() },
            enumerable: false
        },
        situation: {
            get() { return this.verificaAprovacao() },
            enumerable: false
        }
    })
}

const media = {
    calcularMedia() {
        return Number(((this.ac1 * 0.15)
            + (this.ac2 * 0.30)
            + (this.ag * 0.10)
            + (this.af * 0.45)).toFixed(2))
    }
}

const aprovado = {
    verificaAprovacao() {
        return this.media >= 5 ? `APROVADO(A)! - Média: ${this.media}` : `REPROVADO(A)! - Média: ${this.media}`;
    }
}

const mostraAluno = {
    mostraAluno() {
        console.log('========================================');
        console.log();
        console.log(`Nome: ${this.nome}`);
        console.log(`RA: ${this.ra}`);
        console.log(`Situação: ${this.situation}`);
        console.log();
        console.log('========================================');
    }
}

const protoAluno = Object.assign({}, media, aprovado, mostraAluno);

const a1 = criaAluno('Bryan', '1112022202313', '8', '9', '5', '10');

a1.mostraAluno()

//Métodos 
/* 

obj.calcularMedia() -> retorna a média do aluno
obj.verificaAprovacao() -> retorna a situação e a media do aluno

Todas as chaves do objeto estão ocultas, para que fiquem de forma privada visivelmente!
A media possui apenas get, para que não seja possivel um aluno malicioso modificar o valor da média;
A situacao também tem esse comportamento

para que as chaves fiquem visiveis com o console.log(obj);, basta alterar o enumerable para true:
enumerable: true (porémmm, os dados ainda não serão visiveis pois estão protegidos por getters e setters :) )
*/