let todoList = [
  {
    id: 1,
    task: "Hit the gym",
    completed: false,
  },
  {
    id: 2,
    task: "Pay Bills",
    completed: true,
  },
  {
    id: 3,
    task: "Meet George",
    completed: false,
  },
  {
    id: 4,
    task: "Buy eggs",
    completed: false,
  },
  {
    id: 5,
    task: "Read a book",
    completed: false,
  },
  {
    id: 6,
    task: "Organize office",
    completed: false,
  },
];
// R - Read
// Render
let ul = document.getElementById("myUL");
let addBtn = document.getElementsByClassName("addBtn")[0];
let input = document.getElementById("myInput");

displayTodo();
// C - Create
addBtn.onclick = function () {
  input.value;
  let newTodo = {
    id: Math.random(),
    task: input.value,
    completed: false,
  };
  todoList.push(newTodo);
  displayTodo();
};
// hàm hiển thị tất cả todo
function displayTodo() {
  ul.innerHTML = "";
  for (let index in todoList) {
    todoList[index];
    let li;
    if (todoList[index].completed === true) {
      li = `<li id=" ${todoList[index].id}" class="checked ">${todoList[index].task} 
            <span class="close">&#x2715; </span>
            </li>`;
    } else {
      li = `<li id=" ${todoList[index].id}" >${todoList[index].task}
             <span class="close">&#x2715; </span>
              </li>`;
    }
    ul.innerHTML = ul.innerHTML + li;
  }
  // D- Delete
  // B1: gọi ra toàn bộ nút close và gắn sự kiện onclick cho nút close đó
  let closeList = document.getElementsByClassName("close");
  for (let i in closeList) {
    closeList[i].onclick = function () {
      // B2: Lấy cơ số đối tượng dữ liệu tương ứng trong kho dữ liệu
      // nút close là con của li
      let id = +closeList[i].parentElement.id;
      console.log(id);
      
      let findIndex = -1;
      for (let index in todoList) {
        if (id === todoList[index].id) {
          findIndex = index;
          break;
        }
      }
      console.log("check",findIndex);
      
      todoList.splice(findIndex, 1);
      displayTodo();
    };
  }
}
