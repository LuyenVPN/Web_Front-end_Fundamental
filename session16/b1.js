// Khai báo biến input
let input;

// Vòng lặp yêu cầu nhập cho đến khi nhập đúng số
do {
    // Lấy input từ người dùng
    input = prompt("Vui lòng nhập một số:");
    
    // Kiểm tra nếu người dùng bấm Cancel
    if (input === null) {
        alert("Bạn đã hủy nhập liệu!");
        break;
    }
    
    // Thông báo lỗi nếu không phải số
    if (isNaN(input)) {
        alert("Vui lòng chỉ nhập số!");
    }
} while (isNaN(input));

// Nếu input là số hợp lệ thì xử lý
if (!isNaN(input) && input !== null) {
    let output = "Bạn đã nhập số: " + input;
    
    // In ra console
    console.log(output);
    
    // Hiển thị trên trang web
    document.write(output);
    
    // Hiển thị hộp thoại alert
    alert(output);
}