let N = +prompt(" nhập số lượng mà số fabonnaci hiển thị ")
let result = "";
if (isNaN(N) || N < 0) {
    console.log(" nhập lại số lượng")
} else {
    let f1 = 0
    let f2 = 1
    let fN
    result += f1
    if (N > 1) {
        result += f2
    }
    for (let i = 2; i < N; i++) {
        fN = f1 + f2
        result += fN
        f1 = f2
        f2 = fN
    }
}
console.log(result);

