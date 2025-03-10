let arr = [];
let choice;
let menu = `
================== MENU ===================
1. Nhập mảng 2 chiều
2. Hiển thị mảng 2 chiều
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
============================================

Lựa chọn của bạn: 
`;
while (choice !== 7) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
            rows = +prompt("Nhập số hàng: ");
            cols = +prompt("Nhập số cột: ");
            for (let i = 0; i < rows; i++) {
                arr[i] = [];
                for (let j = 0; j < cols; j++) {
                    arr[i][j] = +(prompt(`Nhập phần tử [${i}][${j}]: `));
                }
            }
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Vui lòng nhập mảng trước!");
            } else {
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i]);
                }
            }
            break;

        case 3:
            if (arr.length === 0) {
                console.log("Vui lòng nhập mảng trước!");
            } else {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                }
                console.log("Tổng các phần tử: " + sum);
            }
            break;

        case 4:
            if (arr.length === 0) {
                console.log("Vui lòng nhập mảng trước!");
            } else {
                let max = arr[0][0];
                let maxRow = 0;
                let maxCol = 0;

                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                          if (arr[i][j] > max) {
                            max = arr[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                console.log(`Phần tử lớn nhất: ${max}`);
                console.log(`Vị trí: [${maxRow}][${maxCol}]`);
            }
            break;

        case 5:
            if (arr.length === 0) {
                console.log("Vui lòng nhập mảng trước!");
            } else {
                let rowIndex =  +(prompt("Nhập số hàng cần tính (0-" + (rows-1) + "): "));
                if (rowIndex >= 0 && rowIndex < rows) {
                    let rowSum = 0;
                    for (let j = 0; j < arr[rowIndex].length; j++) {
                        rowSum += arr[rowIndex][j];
                    }
                    let average = rowSum / arr[rowIndex].length;
                    console.log("Trung bình cộng hàng " + rowIndex + ": " + average);
                } else {
                    console.log("Hàng không hợp lệ!");
                }
            }
            break;

        case 6:
            if (arr.length === 0) {
                console.log("Vui lòng nhập mảng trước!");
            } else {
                arr.reverse();
                console.log("Đã đảo ngược các hàng:");
                for (let i = 0; i < arr.length; i++) {
                    console.log(arr[i]);
                }
            }
            break;
        default:
            console.log("Lựa chọn không hợp lệ!");
    }
}