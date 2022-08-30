const addButton = document.getElementById('tasks__add');
const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');
const localStorage = window.localStorage;

localStorage.saveList && localStorage.saveList.split('|').map(value => addTask(value));

addButton.addEventListener('click', key => {
  key.preventDefault();
  addTask(taskInput.value);
  localStorage.saveList ? localStorage.saveList += `|${taskInput.value}` : localStorage.setItem('saveList', taskInput.value);
  taskInput.value = '';
});

function addListener(task) {
  const removeTask = task.querySelector('.task__remove')
  removeTask.addEventListener('click', key => {
    key.preventDefault();
    taskList.removeChild(key.target.parentElement);
    localStorage.saveList = localStorage.saveList.replace(key.target.previousElementSibling.textContent, '');
    localStorage.saveList = localStorage.saveList.replace('||', '|')
  })
}

function addTask(value) {
  if (value) {
    const newTask = document.createElement('div');
    newTask.classList.add('task');

    newTask.innerHTML += `<div class="task__title">${value}</div>
                          <a href="#" class="task__remove">&times;</a>`;

    addListener(newTask);
    taskList.appendChild(newTask);
  }
}

