let chuoi = prompt("Nhập tên: ");
if (chuoi === "ADMIN") {
    let password = prompt("Nhập mật khẩu: ");
    if (password === "TheMaster") {
        alert("Welcome");
    } else if (password === null) {
        alert("Cancelled");
    } else {
        alert("Wrong password");
    }
} else if (chuoi === null) {
    alert("Cancelled");
} else {
    alert("I Don’t know you");
}
