let arr = [];

let n = parseInt(prompt("Nhập vào số lượng phần tử muốn nhập: "));
for (let i = 0; i < n; i++) {
    let input = parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `));
    if (isNaN(input)) {
        alert("Dữ liệu không hợp lệ, vui lòng nhập số!");
        i--; 
    } else {
        arr.push(input);
    }
}

function maxValue(arr) {
    let max = arr[0];
    let location = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            location = i;
        }
    }

    alert("Phần tử lớn nhất: " + max + "\nVị trí: " + location);
}
maxValue(arr);