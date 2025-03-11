let number = +prompt("Nhap so can kiem tra:");
alert(number + " " + isPrime(number));

function isPrime(number) {
    if (number <= 1) {
        return "khong phai so nguyen to";
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return "khong phai so nguyen to";
        }
    }
    return "la so nguyen to";
}
