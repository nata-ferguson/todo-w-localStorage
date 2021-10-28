const input = document.querySelector('input'),
      btn = document.querySelector('button'),
      todoList = document.querySelector('.todo-list'),
      clear = document.querySelector('.clear');

// add list item

const addTask = (e) => {
  //prevent the default refresh behavior of the btn inside form
  e.preventDefault()
  const newLi = document.createElement('li')
  const delBtn = document.createElement('button')

  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'

  if (input.value !== '') {
    newLi.textContent = input.value
    newLi.appendChild(delBtn)
    todoList.appendChild(newLi)
    input.value = ''
  } else {
    alert('Please enter a task')
  }

  //delete li function
  delBtn.addEventListener('click', function() {
    const del = confirm('Are you sure you want to delete a task?')
    if (del == true) {
      const parent = this.parentNode
      parent.remove()
    }
  })
}

btn.addEventListener('click', addTask)

clear.addEventListener('click', function() {
  todoList.innerHTML = ''
})