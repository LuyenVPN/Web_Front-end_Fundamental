let number = [2, 5, 7, 8, 6, 1];
let kiemtra = +prompt("Nhập vào một số bất kỳ:");
let found = false;  

for (let i = 0; i < number.length; i++) {
    if (number[i] === kiemtra) {
        found = true;  
        break;
    }
}
if (found) {
    console.log("Bingo");
} else {
    console.log("Chúc bạn may mắn lần sau");
}