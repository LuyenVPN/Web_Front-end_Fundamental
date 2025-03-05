let n = prompt("Nhập vào số lượng số nguyên tố cần in: ");
while(n === "" || n.trim() === "" || isNaN(n) || +n <= 0) {
    alert("Số không hợp lệ. Vui lòng nhập số nguyên dương!");
    n = prompt("Nhập lại số lượng: ");
}
n = +n;
let count = 0;
let number = 2;
console.log(n + " số nguyên tố đầu tiên là:");
while(count < n) {
    let isPrime = true;
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        console.log(number);
        count++;
    }
    number++;
}

