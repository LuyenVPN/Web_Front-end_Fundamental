function chiamang(arr, n) {
    let result = []
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n))
    }
    return result

}
let input = prompt("nhập các phần tử mảng khách nhau dấu pjhaayr ")
let arr = input.split(",").map(Number)
let n = +prompt(" nhập số lượng chuỗi con")
console.log(chiamang(arr, n))