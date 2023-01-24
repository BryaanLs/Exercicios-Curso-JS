/* let num = prompt('Digite um número!')
num = parseInt(num)
document.body.innerHTML += `<h1>Seu número é: ${num}</h1> <br>`
document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(num)}<br>`
document.body.innerHTML += `${num} é inteiro?: ${Number.isInteger(num)}<br>`
document.body.innerHTML += `É NaN?: ${isNaN(num)}<br>`
document.body.innerHTML += `Arredondado para baixo: ${Math.round(num)}<br>`
document.body.innerHTML += `Arredondado para baixo: ${Math.floor(num)}<br>`
document.body.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}<br>`

 */

const num = prompt('Digite um número!');
let numero = parseInt(num);

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número é: ${numero}</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro?: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN ${isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.round(numero)} </p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} </p>`;
