let num1 = +(prompt("Nhập số thứ nhất:"));
let num2 = +(prompt("Nhập số thứ hai:"));
let min = +(Math.min(num1, num2));
let max = +(Math.max(num1, num2));
let randomNum = +(Math.floor(Math.random() * (max - min - 2 + 1)) + min);
alert(randomNum);