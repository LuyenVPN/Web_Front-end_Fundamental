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
// Tính năng thêm mới

// B1: Xác định vị trí gắn sự kiện dành cho tính
// năng create --> nút add

// B2: Gắn sự kiện onclick cho nút add
addBtn.onclick = function(){
input.value;
let newTodo={
    id: Math.random(),
    task: input.value,
    completed:false,
};
todoList.push(newTodo);
displayTodo();
}
// B3:
// Mỗi khi người dùng bấm vào nút add thì
// Gọi thẻ input và lấy nội dung bên trong đó ra

// B4:
// Biến nội dung đó thành các phần tử li

// B5:
// Đưa thẻ li đó xuất hiện ở trên trình duyệt (trang web)
function displayTodo(){
    ul.innerHTML="";
    for (let index in todoList) {
        todoList[index];
        let li;
        if (todoList[index].completed === true) {
          li = `<li class="checked ">${todoList[index].task} 
          <span class="close">&#x2715; </span>
          </li>`;
        } else {
          li = `<li>${todoList[index].task}
           <span class="close">&#x2715; </span>
            </li>`;
          
        }
        ul.innerHTML = ul.innerHTML + li;
      }
};