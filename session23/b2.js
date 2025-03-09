let arr = [];
for (let i = 0; i < 10; i++) {
    let number = +prompt("Nhập vào số thứ " + (i+1) + ": ");
    arr.push(number);
}
let max = Math.max(...arr);
let maxIndex = arr.indexOf(max);
alert("Số lớn nhất là " + max + " ở vị trí " + (maxIndex));