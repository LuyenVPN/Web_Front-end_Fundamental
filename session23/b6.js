let arr1 = ["", false, 0, 5, 10, "Hello world!"];
console.log(arr1.filter(Boolean)); 
let arr2 = ["", false, 0, undefined, null];
console.log(arr2.filter(Boolean));
let arr3 = [NaN, "test", 4];
console.log(arr3.filter(Boolean));  
let arr4 = ["JavaScript", 0, null, true, 7, ""];
console.log(arr4.filter(Boolean)); 
