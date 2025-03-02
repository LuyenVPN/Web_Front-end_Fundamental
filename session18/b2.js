let toan = parseFloat(prompt("Nhập điểm Toán: "));
let van = parseFloat(prompt("Nhập điểm Văn: "));
let anh = parseFloat(prompt("Nhập điểm Anh: "));
let averageScore = (toan + van + anh) / 3;
if (averageScore < 5.0) {
    alert("Yếu");
} else if (averageScore < 6.5) {
    alert("Trung bình");
} else if (averageScore < 8.0) {
    alert("Khá");
} else {
    alert("Giỏi");
}
