let arr=[];
let number= +prompt("Nhap so luong phan tu muon them:");
for(let i=0 ; i< number; i++){
    let newArr= +prompt("Nhap phan tu thu " +(i+1)+ " la:");
    arr.push(newArr);
}
    alert(Min(arr));
function Min(array) {
    let min= arr[0];
    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            return "du lieu không hợp lệ.";
        }
        sum += arr[i];
    }
    return "Tong 2 phan tu da nhap là: " + min;
}