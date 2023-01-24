const pessoas = []
for (let i = 0; i < 5; i++) {
    let nome = prompt('Digite seu nome: ');
    let sobrenome = prompt('Digite seu sobrenome: ');
    let idade = prompt('Digite sua idade: ');
    let copia = [[nome, sobrenome, idade]]
    pessoas.push([...copia])
    copia = []
}

document.body.innerHTML += `<h1>Resultado</h1>`;
document.body.innerHTML += `${pessoas}`;