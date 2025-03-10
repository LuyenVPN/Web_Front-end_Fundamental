let arr = [];
let choice;
let menu = `
================== MENU ===================
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
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
        console.log("Cac phan tu la so chan la:")
        for(let i=0; i< arr.length; i++){
            if(arr[i] % 2 === 0){
                console.log(arr[i]);
            }
        }
        console.log("Cac phan tu la so le la:")
        for(let i=0; i< arr.length; i++){
            if(arr[i] % 2 !== 0){
                console.log(arr[i]);
            }
        }
        break;
    case 4:
        let sum= 0;
        for (let i=0; i< arr.length; i++){
            sum += arr[i];
        }
        let average = sum / arr.length;
        console.log(`Trung binh cong cua mang la ${average}`);
        break;
    case 5:
        let deleteIndex = +prompt("Mời bạn nhập vào vị trí của phần tử muốn xóa");
        arr.splice(deleteIndex - 1 ,1);
        break;
    case 6:
        let max=arr[0];
        let seconMax=arr[1];
        for(let i=0;i<arr.length;i++){
            if(arr[i]>max){
                seconMax=max;
                max=arr[i];
            }
            if(arr[i]>seconMax&&arr[i]!==max){
                seconMax=arr[i];
            }
        }
        console.log(seconMax);
        break;
  }
}