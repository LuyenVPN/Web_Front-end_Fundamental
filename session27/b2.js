let student = [];
let choice;
let menu = `
------Menu-----
1. Thêm sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên theo tên
4. Xóa sinh viên khỏi danh sách
5. Thoát 
---------------
Nhập lựa chọn: `;
while (choice !== 5) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      addStudent();
      break;
    case 2:
      showStudent();
      break;
    case 3:
      searchStudent();
      break;
    case 4:
      deleteStudent();
      break;
    case 5:
      alert("Thoát chương trình.");
      break;
    default:
      alert("Lựa chọn không hợp lệ. Mời bạn chọn lại.");
      break;
  }
}
function addStudent() {
  let quantity = +prompt("Nhập số lượng sinh viên muốn thêm vào:");
  for (let i = 0; i < quantity; i++) {
    let newStudent = prompt("Nhập tên đầy đủ sinh viên muốn thêm vào:");
    student.push(newStudent);
  }
}
function showStudent() {
  if (student.length === 0) {
    alert("Danh sách sinh viên hiện tại rỗng.");
  } else {
    for (let i = 0; i < student.length; i++) {
      console.log(student[i]);
    }
  }
}
function searchStudent() {
  let searchName = prompt("Nhập tên sinh viên cần tìm:");
  let foundStudents = arr.filter(name => name.toLowerCase().includes(searchName.toLowerCase()));
  if (foundStudents.length > 0) {
      console.log("Sinh viên tìm thấy:", foundStudents);
  } else {
      console.log("Sinh viên không có trong danh sách");
  }
}
function deleteStudent() {
  let deleteName = prompt("Nhập tên sinh viên cần xóa:");
  let index = arr.map(name => name.toLowerCase()).indexOf(deleteName.toLowerCase());
  if (index !== -1) {
      arr.splice(index, 1);
      console.log("Đã xóa sinh viên:", deleteName);
  } else {
      console.log("Sinh viên không có trong danh sách");
  }
}