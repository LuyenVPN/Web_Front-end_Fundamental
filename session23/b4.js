let arr = [];
let n = +prompt("Số phần tử của mảng:");
if (n === 0) {
    alert("Mảng không có phần tử");
} else if (n < 0) {
    alert("Số lượng phần tử không hợp lệ");
} else {
    for (let i = 0; i < n; i++) {
        let char = prompt("Nhập vào 1 ký tự thứ " + (i+1) + ": ");
        arr.push(char);
    }
    for (let i = 0; i < n; i++) {
        if (arr[i] > -9 || arr[i] < 9) {
            console.log(arr[i]);
        }
    }
}