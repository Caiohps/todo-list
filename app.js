//Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions

function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //CREATE LI
    const newTodo = document.createElement('li');

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    newTodo.appendChild(todoDiv);

    const todoText = document.createElement('span');
    todoText.innerText= todoInput.value;
    newTodo.classList.add('todoItem');
    todoDiv.appendChild(todoText);
    

    // CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    newTodo.appendChild(completedButton);

    // CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    newTodo.appendChild(trashButton);

    // APPEND TO LIST
    todoList.appendChild(newTodo);

    // clear todoInput value
    todoInput.value = "";
    
}

function deleteCheck (e) {
    const item = e.target;
    // DELETE TODO ITEM
    if (item.classList[0] === "trash-btn") {        
        const todo = item.parentElement
        //Animation
        todo.classList.add("fall");
        
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }
    // CHECK MARK
    if(item.classList[0] === "completed-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todoItem) {
        switch (e.target.value) {
            case "all":
                todoItem.style.display = 'flex';
                break;
            case "completed":
                if(todoItem.classList.contains('completed')) {
                    todoItem.style.display = 'flex';
                }else{
                    todoItem.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todoItem.classList.contains('completed')) {
                    todoItem.style.display = 'flex';
                }else{
                    todoItem.style.display = 'none';
                }
                break;
        }
    })

}