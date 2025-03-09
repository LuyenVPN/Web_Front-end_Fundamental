let arr = [];
let n = +prompt("Số phần tử của mảng:")
if (n===0){
    alert("Mảng không có phần tử")
}else if (n<0){
    alert("Số lượng phần tử không hợp lệ")
}else{
    let count=0;
    for (let i = 0; i < n; i++) {
        let number = +prompt("Nhập vào số thứ " + (i+1) + ": ");
        arr.push(number);
    }
    for (let i=0 ; i< n; i++){
        if (arr[i]<0){
            count++;
        }
    }
    alert("Có "+ count +" số nguyên âm trong mảng");
}
