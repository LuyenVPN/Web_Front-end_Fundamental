let arr = [];
let str = prompt("Nhập số lượng phan tu: ");
for (let i = 0; i < str; i++) {
  let element = prompt("Nhập phần tử thứ " + (i + 1) + ": ");
  arr.push(element);
}
console.log(output(arr));
function output(arr) {
  if (arr.length === 0) {
    return "Mảng không có phần tử nào";
   } else {
    let result = arr.filter(function (element, index) {
      return element.length>5;
    });
    if (result.length === 0) {
        return "Không có phần tử nào có độ dài lớn hơn 5";
    }
    console.log(result);
  }
}