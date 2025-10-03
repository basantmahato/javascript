const taskInput = document.getElementById("task-input")
const addTaskBtn = document.getElementById("add-task")
const taskList = document.getElementById("task-list")

let tasks = []


function renderTasks() {
  taskList.innerHTML = ""; // clear old list

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">X</button>
    `;

    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    tasks.push(taskText); 
    taskInput.value = ""; 
    renderTasks(); 
  }
});

// Delete task with splice()
function deleteTask(index) {
  tasks.splice(index, 1); 
  renderTasks();
}