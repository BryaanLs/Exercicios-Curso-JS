const pessoa = ['Bryan', 'Nayara', 'Mariana', 'Gilberto', 'Manuela'];

for (let i = 0; i < pessoa.length; i++) {
    console.log(pessoa[i], i);
}

for (let valor in pessoa) {
    console.log(valor, pessoa[valor]);
}

for (let valor of pessoa) {
    console.log(valor);
}

pessoa.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
})