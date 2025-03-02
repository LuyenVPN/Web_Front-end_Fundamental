let a = +prompt("Nhập số a: ");
let b = +prompt("Nhập số b: ");
let operator = prompt("Nhập phép tính (+, -, *, /): ");
let result = 0;
switch (operator) {
    case "+":
        result = a + b;
        break;
    case "-":
        result = a - b;
        break;
    case "*":
        result = a * b;
        break;
    case "/":
        result = a / b;
        break;
    default:
        alert("Phép tính không hợp lệ");
        break;
}
alert("Kết quả: " + result);
