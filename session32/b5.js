let input = document.getElementById("input");
let list = document.getElementById("list");
btn = document.getElementById("btn-change").onclick = function () {
  if (input.value === "") {
    alert("Nhiệm vụ không được bỏ trống!");
  } else {
    let li = document.createElement("li");
    li.textContent = input.value;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      li.remove();
    };
    li.appendChild(deleteBtn);//Gắn nút "X" vào bên trong <li>.
    list.appendChild(li);//Thêm <li> vào danh sách nhiệm vụ <ol> hoặc <ul>.
    input.value = "";
  }
};
