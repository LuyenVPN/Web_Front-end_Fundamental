let usd = prompt("VND --> USD: ");
if (usd > 0) {
    usd = usd / 23000;
    console.log(usd.toFixed(2) + " USD");
} else {
    console.log("Số tiền không hợp lệ");
}

let vnd = prompt("USD --> VND: ");
if (vnd > 0) {
    vnd = vnd * 23000;
    console.log(vnd.toLocaleString("vi-VN") + " VND");
} else {
    console.log("Số tiền không hợp lệ");
}

