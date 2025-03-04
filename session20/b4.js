let string = "Welcome to the world";
let search = prompt("Nhap vao mot ky tu can tim kiem:");
if (string.includes(search)) {
   alert("Tồn tại từ cần tìm kiếm");
} else {
    alert("Khoong Tồn tại từ cần tìm kiếm");
}