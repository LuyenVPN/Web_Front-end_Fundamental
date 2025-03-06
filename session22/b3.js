let input = prompt("Nhập vào một dãy số: ");
if(isNaN(input)) {
    alert("Dãy không hợp lệ");
} else {
    let numbers = input.split('');
    numbers.reverse();
    let result = numbers.join('');
    alert("Số sau khi đảo ngược: " + result);
}
