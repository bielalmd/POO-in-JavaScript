class Todo {
    constructor() {
        this.totalTasks = document.querySelectorAll('.task').length;
    }

    addTask(taskText) {
        // CLONAR TEMPLATE
        let template = document.querySelector('.task').cloneNode(true);
        // REMOVENDO A CLASSE HIDE
        template.classList.remove('hide');
        // MANIPULAR TEXTO
        let templateText = template.querySelector('.task-title');
        templateText.textContent = taskText;

        let list = document.querySelector('#task-container');

        // INSERINDO NA LISTA
        list.appendChild(template);

        // ADICIONAR EVENTO AS TASKS
        this.addEvents();

        this.checkTask('add');

    }

    removeTask(task) {
        // ACHAR ELEMENTO PAI
        let parentEl = task.parentElement;

        // REMOVENDO DA LISTA
        parentEl.remove();

        this.checkTask('remove');
    }

    completeTask(task) {
        // ADICIONA A CLASSE DE 'DONE'
        task.classList.add('done');
    }

    addEvents() {
        let removeBtns = document.querySelectorAll('.fa-trash')
        let removeBtn = removeBtns[removeBtns.length - 1];
        let doneBtns = document.querySelectorAll('.fa-check')
        let doneBtn = doneBtns[doneBtns.length - 1];

        // EVENTO DE REMOVER
        removeBtn.addEventListener('click', function() {
            todo.removeTask(this);
        });

        // EVENTO DE COMPLETAR TAREFA
        doneBtn.addEventListener('click', function() {
            todo.completeTask(this);
        });
    }

    checkTask(command) {
        let msg = document.querySelector('#empty-tasks');
        // LÓGICA DE ADICIONAR OU REMOVER TASKS

        if(command === 'add') {
            this.totalTasks += 1;
        } else if (command === 'remove') {
            this.totalTasks -= 1;
        }

        // CHECA SE EXITE MAIS DE UMA TASK E ADICIONA OU REMOVE A CLASSE
        if(this.totalTasks == 1) {
            msg.classList.remove('hide')
        } else {
            msg.classList.add('hide')
        }
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
