const nomes = ['Bryan', 'Nayara', 'Bud', 'Gilberto', 'Manuela', 'Mariana'];

//nomes.splice(indice, delete, elem1, elem2, elem3);

//--------------------------------------------------------------------------

//simulando um pop -> nomes.splice(-1, 1);
//OUTPUT: ['Bryan', 'Nayara', 'Bud', 'Gilberto', 'Manuela']

//simulando um pop -> nomes.splice(-3, 3);
//OUTPUT: ['Bryan', 'Nayara', 'Bud']

// const removidos = nomes.splice(-3, 3);
// console.log(nomes);
// console.log(removidos);

//OUTPUT nomes: [ 'Bryan', 'Nayara', 'Bud' ]
//OUTPUT removidos: [ 'Gilberto', 'Manuela', 'Mariana' ]

// nomes.splice(-4, Infinity)
// console.log(nomes);
//OUTPUT nomes: [ 'Bryan', 'Nayara']

//--------------------------------------------------------------------------


const nomes2 = ['Soares', 'Pereira', 'Do Papai'];

nomes.splice(nomes.length, 0, nomes2)
console.log(nomes[nomes.length - 1]);