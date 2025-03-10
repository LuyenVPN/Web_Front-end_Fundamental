let arr = [];
let choice;
let menu = `
================== MENU ===================
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
============================================

Lựa chọn của bạn: 
`;
while (choice !== 7) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
        let number= +prompt("Nhap so luong phan tu:")
        for (let i= 0; i< number ; i++){
            let newElement= +prompt("Nhap phan tu muon nhap");
            arr.push(newElement);
        }
        break;
    case 2: 
        for (let i=0; i< arr.length; i++){
            console.log(arr[i]);
        }
        break;
    case 3:
        let max=arr[0];
        for (let i= 0; i< arr.length; i++){
            if (arr[i] > max){
                max = arr[i];
            }
        }
        console.log(`Phần tử lớn nhất trong mảng la ${max}`);
        break;
    case 4:
        let sum=0;
        for (let i=0; i< arr.length; i++){
            if (arr[i] > 0){
                sum += arr[i]
            }
        }
        let average = sum / arr.length;
        console.log(`Trung binh cong cua mang la ${average}`);
        break;
    case 5:
        console.log("Mang sau khi dao nguoc la:");
        for (let i= arr.length - 1; i >= 0; i--){
            console.log(arr[i]);
        }
        break;
    case 6:
        for (let i=0; i< arr.length/2; i++){
            if (arr[i] !== arr[arr.length - 1 - i]){
                console.log("Mang khong doi xung");
                break;
            }else{
                console.log("Mang doi xung");
            }
        }
        break;
  }
}