const taskInput = document.getElementById('task-input') as HTMLInputElement;
const addTaskBtn = document.getElementById('add-task-btn') as HTMLButtonElement;
const tasksList = document.getElementById('tasks-list') as HTMLUListElement;

let currentTaskName: string = '';

taskInput.addEventListener('input', () => {
  currentTaskName = taskInput.value;
});

addTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (!currentTaskName) return;

  if (currentTaskName.length != 0) {
    currentTaskName.trim()

    const li: HTMLLIElement = document.createElement('li');
    li.textContent = currentTaskName;

    tasksList.appendChild(li);
  }
})