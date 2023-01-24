const elementos = [
    { tag: 'p', texto: 'Este é um paragrafo' },
    { tag: 'div', texto: 'Essa é uma div' },
    { tag: 'footer', texto: 'Esse é um footer' },
    { tag: 'section', texto: 'Essa é uma section' },
]
const container = document.querySelector('.container');
const div = document.createElement('div'); // Criação da div para adição dos elementos dentro dela

for (let i = 0; i < elementos.length; i++) {// No loop for foi feita a criação dos elementos que já existem no array

    let { tag, texto } = elementos[i]; //atribuição por desestruturação

    let tagCriada = document.createElement(tag); //criando os elementos um a um

    let textoCriado = document.createTextNode(texto); //criando uma variavel que recebe o texto node

    tagCriada.appendChild(textoCriado); //adicionando o texto node diretamente no elemento pai

    div.appendChild(tagCriada); //e no final do loop foram adicionados todos os elementos dentro da div

    // tagCriada.innerHTML = texto; adicionando conteudo a cada elemento criado (maneira alternativa para adicionar o texto diretamente pelo innerHTML)
}

container.appendChild(div); //adicionando a div com todos os conteudos dentro do container
