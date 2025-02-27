let date1 = new Date(prompt("Nhập ngày thứ nhất: "));
let date2 = new Date(prompt("Nhập ngày thứ hai: "));
let Time = date2 - date1;
let Days = Time / (1000 * 60 * 60 * 24);
alert(`Độ lệch là ${ Math.abs(Days)} ngày`); 