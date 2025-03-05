let initialAmount= prompt("Nhập số tiền ban đầu: ");
while(isNaN(initialAmount) || initialAmount === "" || initialAmount.trim() === "") {
    alert("Số tiền không hợp lệ");
    initialAmount = prompt("Nhập lại số tiền ban đầu: ");
}
let interestRate= prompt("Nhập lãi suất: ");
while(isNaN(interestRate) || interestRate === "" || interestRate.trim() === "") {
    alert("Lãi suất không hợp lệ");
    interestRate = prompt("Nhập lại lãi suất: ");
}
let numberOfMonths= prompt("Nhập số tháng gửi: ");
while(isNaN(numberOfMonths) || numberOfMonths === "" || numberOfMonths.trim() === "") {
    alert("Số tháng không hợp lệ");
    numberOfMonths = prompt("Nhập lại số tháng: ");
}
let result = initialAmount;
for(let i = 0; i < numberOfMonths; i++) {
    result *= (1 + interestRate);
}
let interest = result - initialAmount;
alert("Số tiền lãi là: " + interest.toFixed(3));
alert("Số tiền cả gốc và lãi là: " + result.toFixed(3));

