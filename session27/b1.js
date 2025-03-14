let arr = [];
for (let i = 0; i < 2; i++) {
  let element = +prompt("Nhập phần tử thứ " + (i + 1) + ": ");
  while (isNaN(element)) {
    element = +prompt("Nhập lại phần tử thứ " + (i + 1) + ": ");
  }
  
  arr.push(element);
}

let menu = `
------Menu-----
1. Cộng hai số.
2. Trừ hai số.
3. Nhân hai số.
4. Chia hai số.
5. Thoát.
--------------
Nhập Lựa Chọn:
`;

let choice;
while (choice !== 5) {
  choice = +prompt(menu);
  switch (choice) {
    case 1:
      alert("Tổng hai số là: " + sum(arr[0], arr[1]));
      break;
    case 2:
      alert("Hiệu hai số là: " + sub(arr[0], arr[1]));
      break;
    case 3:
      alert("Tích hai số là: " + mul(arr[0], arr[1]));
      break;
    case 4:
      if (arr[1] !== 0) {
        alert("Thương hai số là: " + div(arr[0], arr[1]));
      } else {
        alert("Không thể chia cho 0.");
      }
      break;
    case 5:
      alert("Thoát chương trình.");
      break;
    default:
      alert("Lựa chọn không hợp lệ. Mời bạn chọn lại.");
      break;
  }
}
function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}
