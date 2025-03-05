let number = prompt("Nhập 1 số nguyên: ");
while(isNaN(number) || number === "" || number.trim() === "") {
    alert("Số không hợp lệ");
    number = prompt("Nhập lại số nguyên: ");
}
number= +number;
console.log("Các ước số của " + number + " là: ");
for(let i = 1; i <= number; i++) {
    if(number % i === 0) {
        console.log(i);
    }
}
