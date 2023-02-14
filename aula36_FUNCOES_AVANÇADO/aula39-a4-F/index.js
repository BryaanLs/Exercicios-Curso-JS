function retornaFuncao() {
    const nome = 'Bryan';
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao();
