//Criando a Factory Function
function createPeople(name, lastName) {

    /* 
    Utilizando Object.create(), podemos configurar a propertye do objeto que será retornado, dizendo de cara também se esse valor poderá ser reconfigurado, exibido e etc

    pessoaPrototype é o Objeto que recebe os métodos (pessoaPrototype), e é assim que se define o prototype de uma FF;
    */

    return Object.create(pessoaPrototype, {
        name: { value: name, enumerable: true },
        lastName: { value: lastName, enumerable: true },
        fullName: { value: name + ' ' + lastName, enumerable: true }
    });

}
//Método falar que será passado no proto
const speak = {
    speak() {
        console.log(`${this.name} speak Hello World!`);
    }
}
//Método falar nome completo que será passado no proto

const speakFullName = {
    speakFullName() {
        console.log(`My full name is ${this.fullName}! Nice to meet you`);
    }
};

//Proto da factory function -> createPeople;
const pessoaPrototype = Object.assign({}, speak, speakFullName)


const p1 = createPeople('Bryan', 'Soares');
// console.log(p1);
// console.log(p1.fullName);
// p1.speak();
// p1.speakFullName();
console.log(p1);


//Importante lembrar de utilizar o this dentro dos métodos que irão utilizar variaveis/chave do objeto, pois caso não seja utilizado o this, na execução irá gerar um erro