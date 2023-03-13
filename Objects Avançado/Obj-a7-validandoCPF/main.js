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



function validaCPF(validate) {
    const cpf = validate;
    const cpfToString = cpf.replace(/\D+/g, '');
    const cpfArray = Array.from(cpfToString);
    contaCPF(cpfArray);
}

function contaCPF(cpfArray) {
    const tam = cpfArray.length - 2;
    let tot = 0;

}

console.log(validaCPF('705.484.450-52'));

