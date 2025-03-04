let number = +prompt("Nhap 1 số nguyên từ 1 đến một số N:");
while(number <= 0 || isNaN(number)) {
    alert("dữ liệu nhập vào không hợp lệ");
    number = +prompt("Nhap lai số nguyên:");
}    
let tong = 0;
    for (let i = 0; i <= number; i = i+1) {
        tong = tong + i;
    }
    console.log(tong);


