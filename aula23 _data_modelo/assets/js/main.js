const data = new Date();
const dateWeb = document.querySelector('#data');

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function converteDiaSemana() {
    const nomeDiasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    const diaSemana = data.getDay();
    let textDay = nomeDiasSemana[diaSemana];
    return textDay;
}

function converteNomeMes() {
    const nomesMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const mes = data.getMonth();
    let textMonth = nomesMeses[mes];
    return textMonth;
}

function today() {
    const diaMes = zeroAEsquerda(data.getDate());
    const diaSemana = converteDiaSemana();
    const nomeMes = converteNomeMes();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const ano = data.getFullYear();
    return `${diaSemana}, ${diaMes} de ${nomeMes} de ${ano} ${hora}:${min}`
}

const fullDate = today();
dateWeb.innerHTML = fullDate;



// Opção relativa e mais simples para retornar esse resultado!
// const dateWeb = document.querySelector('#data');
// const data = new Date();
// const opcoes = {
//    dateStyle: 'full',
//   timeStyle: 'short'
//   };
// dateWeb.innerHTML = data.toLocaleDateString('pt-BR', opcoes);




