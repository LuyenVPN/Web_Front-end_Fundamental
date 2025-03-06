let input = prompt("Nhập vào một dãy số: ");
if(isNaN(input)) {
    alert("Dãy không hợp lệ");
} else {
    let numbers = input.split('');
    let max = Math.max(...numbers);
    alert(max +" là số lớn nhất trong dãy số ");
}