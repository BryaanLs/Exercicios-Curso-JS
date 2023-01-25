function showHour() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', 'full');
}

const timer = setInterval(function () {
    console.log(showHour());
}, 1000);

setTimeout(function () {
    clearInterval(timer)
}, 5000);