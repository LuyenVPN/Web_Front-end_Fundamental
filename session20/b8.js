let n = +prompt("Nhập số lượng số nguyên tố cần hiển thị:");
if (n <= 0 || isNaN(n) || !Number.isInteger(n)) {
    console.log("Số không hợp lệ!");
} else {
    let count = 0;
    for (let num = 2; count < n; num++) {
        let isPrime = true;

        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
            count++;
        }
    }
}