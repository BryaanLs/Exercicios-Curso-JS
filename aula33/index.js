// TRY CATCH

// function soma(x, y) {

//     if (
//         typeof x !== 'number' ||
//         typeof y !== 'number'
//     ) {
//         throw new ReferenceError('x e y precisam ser números!');
//     }
//     return x + y;
// }

// try {
//     console.log(soma(1, 2));
//     console.log(soma('2', 2));
// } catch (err) {
//     console.log(err);
// }

// TRY CATCH FINALLY

// try {
//     // É executada quando não há erros
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro', arquivo);
//     console.log('Fechei o arquivo');
// } catch (e) {
//     // É executada quando há erros
//     console.log('Tratando o erro');
// } finally {
//     // Será executado sempre
//     console.log('Fechando o arquivo');

// }

function returnTime(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Waiting instace of Date')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', 'full', 'short')
}

try {
    const data = new Date('31-01-2023 09:30:00')
    const hora = returnTime(11)
    console.log(hora);
} catch (e) {
    // console.log('Waiting instace of date');
} finally {
    console.log('Have a nice day');
}