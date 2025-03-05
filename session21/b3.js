let password = "123456";
let input;
while(input !== password) {
    input = prompt("Nhap mat khau:");
    if(input === password) {
        alert("Dang nhap thanh cong");
        break;
    } else {
        alert("Mat khau khong chinh xac");
    }
}
