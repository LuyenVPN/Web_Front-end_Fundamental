let arr = [];
let str = prompt("Nhập số lượng email: ");
for (let i = 0; i < str; i++) {
  let element = prompt("Nhập email thứ " + (i + 1) + ": ");
  arr.push(element);
}
console.log(output(arr));
function output(arr) {
  if (arr.length === 0) {
    return "Mảng không có phần tử nào";
  } else {
    let result = arr.filter(function (element) {
      return element.includes('@') && !element.includes(' ');
    });
    if (result.length === 0) {
      return "Không có email hợp lệ";
    } else {
      return result;
    }
  }
}
