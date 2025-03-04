let number = +prompt("Nhap 1 số nguyên:");
while(number <= 0 || isNaN(number)) {
    alert("dữ liệu nhập vào không hợp lệ");
    number = +prompt("Nhap lai số nguyên:");
}
console.log("Các số chia hết cho 5 từ 1 đến " + number + " là:");
for(let i = 1; i <= number; i++) {
        if(i % 5 === 0) {
            console.log(i);
        }
    }
