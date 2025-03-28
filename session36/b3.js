// Lấy màu đã lưu trong localStorage 
document.getElementById("body").style.backgroundColor = localStorage.getItem("backgroundColor") || "white";

// Hàm đổi màu và lưu vào localStorage
function changeColor(color) {
    document.getElementById("body").style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
}

// Gán sự kiện click cho các nút
document.getElementById("btn1").addEventListener("click", function () {
    changeColor("red");
});
document.getElementById("btn2").addEventListener("click", function () {
    changeColor("blue");
});
document.getElementById("btn3").addEventListener("click", function () {
    changeColor("yellow");
});
document.getElementById("btn4").addEventListener("click", function () {
    changeColor("purple");
});
