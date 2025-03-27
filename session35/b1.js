let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskInput = document.getElementById("add");
const addTaskButton = document.getElementById("btn");
const taskList = document.getElementById("list");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `<span>${task}</span>
    <div> <button class="delete" onclick="deleteTask(${index})">Xóa</button> <button class="edit" onclick="editTask(${index})">Sửa</button></div>`;
    taskList.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
addTaskButton.addEventListener("click", () => {
  let task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    //Cách 2:
    //     let tasks = {
    //         id : Math.random() * 10000,
    //         task : task,
    //     }
    //     taskList.push(tasks)
    taskInput.value = "";
    renderTasks();
  }
});

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
function editTask(index) {
  let newText = prompt("Nhập nội dung mới", tasks[index]);
  if (newText) {
    tasks[index] = newText;
    renderTasks();
  }
}
renderTasks();
