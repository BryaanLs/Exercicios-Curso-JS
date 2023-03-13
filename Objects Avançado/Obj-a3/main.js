/* 
Object.values retorna um array com os valores
Object.entries retorna um array com arrays dentro contendo ['chave', 'valor']
Object.getOwnPropertyDescriptor(obj, 'chave') //Exibe as configurações do obj
Object.assign({}, obj) copia o obj
... (spread) || {...obj} [...array] copia o obj ou array

*/

//Visto
// Object.keys() retorna as chaves
// Object.freeze() congela o obj
// Object.defineProperties() define várias propriedades
// Object.defineProperty() define uma propriedade


const produto = { nome: 'Caneca', preco: 1.8 };
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));