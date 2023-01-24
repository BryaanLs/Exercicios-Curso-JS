let nome;
let sobrenome;
let anoNascimento;
let anoAtual;
let peso;
let idade;
const alturaEmM = 1.80;
let imc;

nome = 'Bryan';
sobrenome = 'Soares';
anoNascimento = 2002;
anoAtual = 2023;
peso = 53.2;
idade = anoAtual - anoNascimento;
imc = peso * (alturaEmM * alturaEmM);

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} Kg, tem ${alturaEmM} de altura e seu IMC é de: ${imc}`);


