class Todo {
    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(taskText) {
        // CLONAR TEMPLATE
        let template = document.querySelector('.task').cloneNode(true)
        // REMOVENDO A CLASSE HIDE
        template.classList.remove('hide')
        // MANIPULAR TEXTO
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText

        let list = document.querySelector('#task-container')

        // INSERINDO NA LISTA
        list.appendChild(template)
    }
}

let todo = new Todo();

// EVENTS
let addBtn = document.querySelector('#add')

addBtn.addEventListener('click', function(e) {
    
    e.preventDefault();

    let taskText = document.querySelector('#task')

    if(taskText.value != '') {
        todo.addTask(taskText.value)
    }

    // CLEAR TEXT FIELD
    taskText.value = ''
})
