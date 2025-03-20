// B1: Mô phỏng 1 kho lưu trữ dữ liệu
// Chứa các đối tượng dữ liệu (có tính chất tương đồng)
// để vận hành ứng dụng
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
// thành các phần tử HTML xuất hiện trên trang web
// R - Read
// Render
let ul = document.getElementById("myUL");
// - B2.1: Duyệt qua mảng todoList
for (let index in todoList) {
  // - B2.2: Lấy ra toàn bộ đối tượng todo-item{} nằm trong todoList
  todoList[index];
  // - B3.3: Chuyển đổi (Ánh xạ) từng đối tượng dữ liệu -->
  // CÁC PHẦN TỬ HTML
  let li;
  if (todoList[index].completed === true){
    li = `<li class="checked ">${todoList[index].task} 
     <span class="close">&#x2715; </span>
     </li>`;
  }else{
    li = `<li>${todoList[index].task} 
     <span class="close">&#x2715; </span>
     </li>`;
  }
  // - B3.4: Mỗi khi 1 đối tượng dữ liệu được --> HTML
  // Đưa phần tử HTML xuất hiện ở trong trang web (trên trình duyệt)
  ul.innerHTML = ul.innerHTML + li;
  console.log(li);
}
