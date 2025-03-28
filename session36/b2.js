// lưu biến đếm vào local storage
let sum1=+(localStorage.getItem("love1"));
// sum1 = isNaN(sum1) ? 0 : parseInt(sum1); // dùng parseInt
let sum2= +(localStorage.getItem("love2"));
let sum3= +(localStorage.getItem("love3"));
// lấy dữ liệu lưu từ trước
document.getElementById("love1").innerHTML=sum1;
document.getElementById("love2").innerHTML=sum2;
document.getElementById("love3").innerHTML=sum3;

document.getElementById("btn1").addEventListener("click",function(){
    sum1++;
    document.getElementById("love1").innerHTML=sum1;
    localStorage.setItem("love1", sum1); // lưu biến đếm vào local storage
});
document.getElementById("btn2").addEventListener("click",function(){
    sum2++;
    document.getElementById("love2").innerHTML=sum2;
    localStorage.setItem("love2", sum2);
});
document.getElementById("btn3").addEventListener("click",function(){
    sum3++;
    document.getElementById("love3").innerHTML=sum3;
    localStorage.setItem("love3", sum3);
});