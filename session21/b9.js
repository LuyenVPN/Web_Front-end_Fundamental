// Viết chương trình yêu cầu người dùng nhập vào một số nguyên bất kỳ, kiểm tra xem số đã nhập có phải số nguyên tố hay không và in kết quả ra màn hình.
let number = prompt("Nhập vào một số nguyên bất kỳ: ");
while(isNaN(number) || number === "" || number.trim() === "" || +number <= 1) {
    alert("Số không hợp lệ");
    number = prompt("Nhập lại số nguyên: ");
}
number = +number;
let isPrime = true;
for(let i = 2; i <= Math.sqrt(number); i++) {
    if(number % i === 0) {
        isPrime = false;
        break;
    }
}
if(isPrime) {
    alert("Số " + number + " là số nguyên tố");
} else {
    alert("Số " + number + " không phải là số nguyên tố");
}   

