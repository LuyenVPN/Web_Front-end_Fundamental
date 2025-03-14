let menu = `
-----------Menu----------
1. Tính diện tích hình tròn.
2. Tính chu vi hình tròn.
3. Tính diện tích hình chữ nhật.
4. Tính chu vi hình chữ nhật.
5. Thoát.
-------------------------
Nhập lựa chọn: `;
let choice;
while (choice !== 5) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
        alert("Diện Tích Hình tròn Là: "+ dienTichHinhTron()); 
        break;
    case 2:
        alert("Chu Vi Hình tròn Là: "+ chuViHinhTron());
        break;
    case 3:
        alert("Diện Tích Hình chữ nhật Là: "+ dienTichHinhChuNhat());
        break;
    case 4:
        alert("Chu Vi Hình chữ nhật Là: "+ chuViHinhChuNhat());
        break;
    case 5:
        alert("Thoát chương trình.");
        break;
    default:
        alert("Lựa chọn không hợp lệ. Mời bạn chọn lại.");
        break;
  }
}
function dienTichHinhTron(){
    let r= prompt("Nhập bán kính hình tròn:");
    while (r<=0 || isNaN(r)){
        alert("Bán kính không hợp lệ");
        r= prompt("Nhập lại bán kính hình tròn:");
    }
    return Math.PI * r * r;
}
function chuViHinhTron(){
    while (r<=0 || isNaN(r)){
        alert("Bán kính không hợp lệ");
        r= prompt("Nhập lại bán kính hình tròn:");
    }
    let r= prompt("Nhập bán kính hình tròn:");
    return 2 * Math.PI * r;
}
function dienTichHinhChuNhat(){
    let a= prompt("Nhập chiều dài hình chữ nhật:");
    while (a<=0 || isNaN(a)){
        alert("Chiều dài không hợp lệ");
        a= prompt("Nhập lại chiều dài hình chữ nhật:");
    }
    let b= prompt("Nhập chiều rộng hình chữ nhật:");
    while(b<=0 || isNaN(b)){
        alert("Chiều rộng không hợp lệ");
        b= prompt("Nhập lại chiều rộng hình chữ nhật:");
    }
    return a * b;
}
function chuViHinhChuNhat(){
    let a= prompt("Nhập chiều dài hình chữ nhật:");
    while (a<=0 || isNaN(a)){
        alert("Chiều dài không hợp lệ");
        a= prompt("Nhập lại chiều dài hình chữ nhật:");
    }
    let b= prompt("Nhập chiều rộng hình chữ nhật:");
    while(b<=0 || isNaN(b)){
        alert("Chiều rộng không hợp lệ");
        b= prompt("Nhập lại chiều rộng hình chữ nhật:");
    }    return (a + b) * 2;
}