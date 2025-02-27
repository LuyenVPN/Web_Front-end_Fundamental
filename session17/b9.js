let a = +prompt("Nhập a: ");
if (a === 0) {
    alert("Phương trình không phải là phương trình bậc 2");
} else {
    let b = +prompt("Nhập b: ");
    let c = +prompt("Nhập c: ");
    let delta = b*b - 4*a*c;
if (delta < 0) {
    alert("Phương trình vô nghiệm");
} else if (delta === 0) {
    let x = (-b / (2*a)).toFixed(2);
    alert(`Phương trình có nghiệm kép x = ${x}`);
} else {
    let x1 = ((-b + Math.sqrt(delta)) / (2*a)).toFixed(2);
    let x2 = ((-b - Math.sqrt(delta)) / (2*a)).toFixed(2);
    alert(`Phương trình có 2 nghiệm x1 = ${x1} và x2 = ${x2}`);
    }
}

