let number = prompt("Nhap 1 so nguyen:");
while(number === "" || number.trim() === ""  || isNaN(+number)) {
    alert("So không hợp lệ");
    number = prompt("Nhap lai số nguyên:");
}

let numberString = number.toString();
let numberReverse = numberString.split('').reverse().join('');
if(numberString === numberReverse) {
    console.log("So nguyen la so doi xung");
} else {
    console.log("So nguyen khong la so doi xung");
}

