const inputTarefa = document.querySelector('.new-task');

const btnTask = document.querySelector('.new-task-btn');

const tasks = document.querySelector('.tasks-ul');

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTask(inputTarefa.value);

    }
});

function criaBotaoApagar(li) {
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar')
    li.appendChild(btnApagar);

}

function criaTask(textoInput) {
    const li = criaLi();
    let textLi = document.createTextNode(textoInput);
    li.appendChild(textLi);
    tasks.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    saveTasks();

}

btnTask.addEventListener('click', function () {
    if (!inputTarefa.value) return;
    criaTask(inputTarefa.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        saveTasks();
    }
});

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    // console.log(liTasks);
    const taskList = [];
    for (let t of liTasks) {
        let textTask = t.innerText;
        textTask = textTask.replace('Apagar', '').trim();
        taskList.push(textTask);
    }

    const taskJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', taskJSON);

}

function loadSaveTasks() {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);
    for (let t of taskList) {
        criaTask(t);
    }
}

loadSaveTasks();