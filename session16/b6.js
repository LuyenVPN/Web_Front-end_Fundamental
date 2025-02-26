const dola = 25000;
let usd = +prompt("Nhập số tiền Đô la Mỹ:");
let vnd = usd * dola;
document.write(`${usd } USD = ${vnd.toLocaleString("vi-VN")} VND`);
