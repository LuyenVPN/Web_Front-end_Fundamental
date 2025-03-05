let number;
let count = 0;
let oddcount = 0;
for (let i=0; i<5; i++) {
    number = prompt("Nhap so thu " + (i+1) + ":");
    if (number % 2 !== 0) {
        oddcount ++;
    } else {
        count ++;
    }
}
alert("So so le la: " + oddcount);
alert("So so chan la: " + count);
