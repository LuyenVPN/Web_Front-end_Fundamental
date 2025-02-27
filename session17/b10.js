let n = +prompt("Nhập vào một số: ");
let isSquare = n > 0 && Math.sqrt(n) % 1 === 0 ? "là số chính phương" : "không phải số chính phương";
alert(`${n} ${isSquare}`);
