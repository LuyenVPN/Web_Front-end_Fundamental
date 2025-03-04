let number = +prompt("Nhap so can kiem tra:");
while(number === "" || number.trim() === "" || isNaN(+number) || +number <= 1) {
    alert("So khong hop le");
    number = +prompt("Nhap lai so:");
}
if(number === 2){
    alert("2 la so nguyen to");
}else{
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            alert(number + " khong phai la so nguyen to");
        break;
    }else{
        alert(number + " la so nguyen to");
    }
    }
}
