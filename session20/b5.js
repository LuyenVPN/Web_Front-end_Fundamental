let a = prompt("Nhap a:");
while(a === "" || a.trim() === ""  || isNaN(+a)) {
    alert("Không hợp lệ");
    a = prompt("Nhap lai a:");
}
let b = prompt("Nhap b:");
while(b === "" || b.trim() === ""  || isNaN(+b)) {
    alert("Không hợp lệ");
    b = prompt("Nhap lai b:");
}
let luythua = 1;
for(let i = 1; i <= b; i++) {
    luythua = luythua * a;   
}
alert("Ket qua la: " + luythua);
