let arr = [];
let choice;
let menu = `
================== MENU ===================

1. Nhập số phần tử cần nhập và giá trị các phần tử
2. In ra giá trị các phần tử đang quản lý
3. In ra giá trị các phần tử chẵn và tính tổng
4. In ra giá trị lớn nhất và nhỏ nhất trong mảng
5. In ra các phần tử là số nguyên tố trong mảng và tính tổng
6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó
7. Thêm một phần từ vào vị trí chỉ định
8. Thoát
============================================

Lựa chọn của bạn: 
`;
while (choice !== 8) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      let number = +prompt("Mời bạn nhập vào số lượng phần tử muốn thêm vào mảng");
      for (let i = 0; i < number; i++) {
        let newElement = +prompt("Mời bạn nhập phần tử muốn thêm vào mảng");
        arr.push(newElement);
      }
      console.log(arr);
      break;
    case 2:
      for (let i = 0; i < arr.length; i++) {
        console.log(`${i+1}. ${arr[i]}`);
      }
      break;
    case 3:
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          sum += arr[i];
        } else {
          console.log(`Phần tử ${arr[i]} không phải là số chẵn`);
        } 
      }
      console.log(`Tổng các phần tử chẵn trong mảng là: ${sum}`); 
      break;
    case 4:
      let max = arr[0]; 
      let min = arr[0];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
          max = arr[i];
        }
        if (arr[i] < min) {
          min = arr[i];
        } else {
          console.log(`Phần tử ${arr[i]} không phải là số nguyên tố`);
        }
      }   
      console.log(`Giá trị lớn nhất trong mảng là: ${max}`);
      console.log(`Giá trị nhỏ nhất trong mảng là: ${min}`);  
      break;
    case 5:
      let sumPrime = 0;
      for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
          sumPrime += arr[i];
        } else {
          console.log(`Phần tử ${arr[i]} không phải là số nguyên tố`);
        }
      }
      console.log(`Tổng các phần tử là số nguyên tố trong mảng là: ${sumPrime}`); 

      break;
    case 6:
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
          count++;
        } else {
          console.log(`Phần tử ${arr[i]} không phải là số nguyên tố`);
        }
      }
      console.log(`Số lần xuất hiện của ${number} trong mảng là: ${count}`);  
      break;
    case 7:
      let position = +prompt("Mời bạn nhập vào vị trí muốn thêm phần tử");
      let newElement = +prompt("Mời bạn nhập phần tử muốn thêm vào mảng");
      arr.splice(position, 0, newElement);
      console.log(arr);
      break;  
    case 8:
      break;
  }
}