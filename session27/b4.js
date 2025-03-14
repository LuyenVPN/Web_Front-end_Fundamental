let arr=[];
let choice;
let menu=`
---------Menu---------
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.
----------------------
Nhập lựa chọn:
`;
while (choice !== 5){
    choice =+ prompt(menu);
    switch (choice){
        case 1:
            inputNumber();
            break;
        case 2:
            average();
            break;
        case 3:
            maxEven();
            break;
        case 4:
            minOdd();
            break;
        case 5:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Mời bạn chọn lại.");
            break;
    }
}
function inputNumber(){
    let quantity=+prompt("Nhập số lượng số nguyên muốn thêm vào:");
    for (let i=0; i<quantity; i++){
        let number=+prompt("Nhập số nguyên thứ"+(i+1) +":");
        arr.push(number);
    }
    console.log(arr);
}
function average(){
    let sum=0;
    for (let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    alert("Trung bình các số là: "+ sum/arr.length);
}
function maxEven(){
    let max=arr[0];
    for (let i=0; i<arr.length; i++){
        if (arr[i] % 2 === 0){
            if (arr[i] > max){
                max=arr[i];
            }
        }
    }
    alert("Số chẵn lớn nhất là: "+ max);
}
function minOdd(){
    let min=arr[0];
    for (let i=0; i<arr.length; i++){
        if (arr[i] % 2 !== 0){
            if (arr[i] < min){
                min=arr[i];
            }
        }
    }
    alert("Số lẻ nhỏ nhất là: "+ min);
}