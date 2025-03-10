let arr = [];
let choice;
let menu = `
================== MENU ===================
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình
============================================

Lựa chọn của bạn: 
`;
while (choice !== 7) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
        let number= +prompt("Nhap so luong phan tu muon nhap:");
        for (let i=0; i< number; i++){
            let newElement= +prompt("Nhap phan tu muon them vao mang:");
            arr.push(newElement);
        }
        break;
    case 2:
        for (let i=0; i < arr.length; i++){
            console.log(arr[i]);
        }
        break;
    case 3:
        let max = arr[0]; 
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i]< min){
                min= arr[i]  
            }
        }
        console.log(`Phần tử lớn nhất la ${max}`);
        console.log(`Phần tử nhỏ nhất la ${min}`);
        break;
    case 4:
        let sum = 0;
        for (let i=0; i< arr.length; i++){
            sum += arr[i];
        }
        console.log(`Tổng các phần tử trong mảng la ${sum}`);
        break;
    case 5:
        let count=0;
        let sreach= +prompt("Nhap phan tu muon tim kiem:");
        for (let i=0; i< arr.length; i++ ){
            if (arr[i] === sreach){
                count++;
            }
        }
        if (count > 0){
            console.log(`Số lần xuất hiện la: ${count}`);
        }else{
            alert("Khong co phan tu can tim kiem")
        }
        break;
        case 6:
        arr.sort((a, b) => a - b);
        console.log("Mảng sau khi sắp xếp: " + arr);
        break;
    }
}