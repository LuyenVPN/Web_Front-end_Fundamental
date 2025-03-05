let number;
let sum=0;
for (let i=0; i<5; i++) {
    number = prompt("Nhap so thu " + (i+1) + ":");
    if (number % 2 !== 0) {
        sum += +number;
    }
}
alert("Tong cac so le la: " + sum);
