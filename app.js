window.onload = function() {
    displayTask()
}

const input = document.querySelector('input'),
      btn = document.querySelector('button'),
      todoList = document.querySelector('.todo-list'),
      clear = document.querySelector('.clear');
let tasks;

btn.addEventListener('click', addTask)

//get tasks from the local storage
function getTasks() {
    if (localStorage.getItem('tasks') === null) {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
}

function addTask() {
    if (input.value !== '') { 
        //add task to local storage
        addTaskToLS()
        //clear everything from the page
        todoList.innerHTML = ''
        //get the newest list of tasks from the locasl storage and display
        displayTask()
      } else {
        alert('Please enter a task')
      }
}

//save task to local storage
function addTaskToLS() {
    getTasks()
    tasks.push(input.value)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    input.value = ''
}

//display task on the page
function displayTask() {
    getTasks()
    tasks.forEach((task, index) => {
        const newLi = document.createElement('li')
        const delBtn = document.createElement('button')
        delBtn.innerHTML = ` <i class="fas fa-trash-alt" id="${index}" onclick="deleteTask(this.id)"></i>`

        newLi.appendChild(document.createTextNode(task))
        newLi.appendChild(delBtn)
        todoList.appendChild(newLi)
    }) 
}

//delete tasks
function deleteTask(index) {
    const del = confirm('Are you sure you want to delete a task?')
    if (del == true) {
        getTasks()
    }
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    //clear everything from the page
    todoList.innerHTML = ''
    //get the updated list of tasks from the locasl storage and display
    displayTask()
}

//clear tasks
function clearTasks () {
    const delAllTasks = confirm('Are you sure you want to delete all tasks?')

    if (delAllTasks == true) {
        localStorage.clear()
        todoList.innerHTML = ''
        displayTask()
    }
}

clear.addEventListener('click', clearTasks)