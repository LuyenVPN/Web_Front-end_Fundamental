let a = prompt("Nhập tham số a: ");
while(isNaN(a) || a === "" || a.trim() === "") {
    alert("Số không hợp lệ");
    a = prompt("Nhập lại tham số a: ");
}
let b = prompt("Nhập tham số b: ");
while(isNaN(b) || b === "" || b.trim() === "") {
    alert("Số không hợp lệ");
    b = prompt("Nhập lại tham số b: ");
}
let c = prompt("Nhập tham số c: ");
while(isNaN(c) || c === "" || c.trim() === "") {
    alert("Số không hợp lệ");
    c = prompt("Nhập lại tham số c: ");
}   
a = +a;
b = +b;
c = +c;
if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            alert("Phương trình vô số nghiệm");
        } else {
            alert("Phương trình vô nghiệm");
        }
    } else {
        let x = -c / b;
        alert("Phương trình có nghiệm x = " + x);
    }
} else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        alert("Phương trình vô nghiệm");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert("Phương trình có nghiệm kép x = " + x);
    } else {
        let x1 = (-b - Math.sqrt(delta)) / (2 * a);
        let x2 = (-b + Math.sqrt(delta)) / (2 * a);
        alert("Phương trình có 2 nghiệm phân biệt:\nx1 = " + x1 + "\nx2 = " + x2);
    }
}

