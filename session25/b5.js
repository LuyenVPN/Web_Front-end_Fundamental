let arr=[];
let number= +prompt("Nhap so luong phan tu muon them:");
for(let i=0 ; i< number; i++){
    let newArr= +prompt("Nhap so nguyen thu " +(i+1)+ " la:");
    arr.push(newArr);
}
    alert( count(arr)); 
function count(array) {
    if (array.length === 0) {
        return "Mảng không chứa phần tử";
    }
    let count= 0;
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(arr[i]) && arr[i] > 0) {
            count++;
        }
    }
    return "So phan tu la so nguyen duong trong mang la: " + count;
}