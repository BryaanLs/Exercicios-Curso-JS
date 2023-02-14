

function criaMultiplicador(m) {
    return function (n) {
        return n * m;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + resto;
    }

    return falaResto;
}


const frase = falaFrase('Ola');
const mundo = frase(' mundo');
console.log(mundo);

