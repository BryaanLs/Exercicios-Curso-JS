//EXECUÇÃO NO CONSOLE 

/* const dados = [['Nayara', 'Advogada', 'Executiva'], ['Mariana', 'Dentista', 'InvisaLign']];
let nome = 0;
let profissao = 1;
let foco = 2;


dados.push(['Gilberto', 'Engenheiro', 'Civil']) // Adiciona ao final da lista (array)
dados.unshift(['Bryan', 'Web Developer', 'FullStack']) //Adiciona ao inicio da lista (array)

for (i = 0; i < dados.length; i++) {
    console.log('=============================');
    console.log(`Nome: ${dados[i][nome]}`);
    console.log(`Profissão: ${dados[i][profissao]}`);
    console.log(`Foco: ${dados[i][foco]}`);
    console.log('=============================');
}
 */



//EXECUÇÃO NO NAVEGADOR
const aprovados = [];
for (let i = 0; i < 10; i++) {
    let nome = prompt('Digite seu nome: ')
    aprovados.push(nome)
}

document.body.innerHTML += `A lista de aprovados para as vagas concorridas no ano de 2023 é: ${aprovados.slice(0, 5)}`
