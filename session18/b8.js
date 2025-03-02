let a = +prompt("Nhập độ dài cạnh a: ");
let b = +prompt("Nhập độ dài cạnh b: ");
let c = +prompt("Nhập độ dài cạnh c: ");
if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        alert("Tam giác đều");
    } else if (a === b || b === c || a === c) {
        alert("Tam giác cân");
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        alert("Tam giác vuông");
    } else {
        alert("Tam giác thường");
    }
} else {
    alert("Không phải tam giác");   
}
