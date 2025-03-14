function kiemTraCapSoCong(arr) {
  if (arr.length <= 2) {
    return true;
  }
  let khoangCach = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== khoangCach) {
      return false;
    }
  }
  return true;
}
console.log(kiemTraCapSoCong([2, 4, 6, 8]));

