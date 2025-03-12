let arr = [];
for (let i = 0; i < 10; i++) {
  let element = +prompt("Nhập phần tử thứ " + (i + 1) + ": ");
  arr.push(element);
}
console.log(output(arr));
function output(arr) {
  if (arr.length == 0) {
    return "Mảng không có phần tử nào";
   } else {
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        return "Dữ liệu không hợp lệ";
      }
    }
    let result = arr.filter(function (element, index) {
      return element >= 10;
    });
    if (result.length === 0) {
        return "Không có phần tử nào lớn hơn 10";
    }
    console.log(result);
  }
}
