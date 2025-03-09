let arr = [];
let n = +prompt("Số phần tử của mảng:");
if (n === 0) {
    alert("Mảng không có phần tử");
} else if (n < 0) {
    alert("Số lượng phần tử không được âm");
} else {
    for (let i = 0; i < n; i++) {
        let char = prompt("Nhập vào 1 ký tự thứ " + (i+1) + ": ");
        arr.push(char);
    }
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > -9 || arr[i] < 9) {
            count++;
        }
    }
    if (count === 0) {
        alert("Không có phần tử nào là số");
    } else {
        alert("Có " + count + " ký tự số trong mảng");
    }
}