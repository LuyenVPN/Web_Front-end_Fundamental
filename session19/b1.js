// Viết chương trình nhập vào một tháng và in ra số ngày của tháng đó
let month = prompt("Nhập vào một tháng: ");
switch (month) {
    case "1" :
    case "3" :
    case "5" :
    case "7" :
    case "8" :
    case "10" :
    case "12" :
        console.log("Tháng " + month + " có 31 ngày");
        break;
    case "4" :
    case "6" :
    case "9" :
    case "11" :
        console.log("Tháng " + month + " có 30 ngày");
        break;
    case "2":
        console.log("Tháng " + month + " có 28 ngày và 29 ngày năm nhuận");
        break;
    default:
        console.log("Tháng " + month + " không hợp lệ");
        break;
}

