let a = +prompt("Nhap so thu nhat: ");
let b = +prompt("Nhap so thu hai: ");
let c = +prompt("Nhap so thu ba: ");
let max = a > b ? a : b;
max = max > c ? max : c;
alert("So lon nhat la: " + max);
