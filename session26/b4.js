let arr = [];
let number = +prompt("Nhập số lượng phan tu: ");
for (let i = 0; i < number; i++) {
  let element = +prompt("Nhập phần tử thứ " + (i + 1) + ": ");
  arr.push(element);
}
console.log(output(arr));
function output(arr) {
    return arr.filter(num => isPrime(num));
}
function isPrime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; 
    }
    return true;
  }
 
  
