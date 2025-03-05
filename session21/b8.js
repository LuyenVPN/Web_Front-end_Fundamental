for(let i = 100; i <= 999; i++) {
    let sum = 0;
    let number = i;
    while(number > 0) {
        let digit = number % 10;
        sum += digit ** 3;
        number = Math.floor(number / 10);
    }
    if(sum === i) {
        console.log(i);
    }
}
