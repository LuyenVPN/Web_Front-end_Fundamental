let arr=[];
for (let i=0 ; i<10 ; i++){
    let number = +prompt("Nhập vào một số bất kỳ: ");
    arr.push(number);
}
let found= false;

for (let i=0 ; i<10 ; i++){
    if (arr[i] >= 10){
        console.log(arr[i]);
        found=true;
    }
}
if(!found){
    console.log("Không có số nào lớn hơn 10");
}