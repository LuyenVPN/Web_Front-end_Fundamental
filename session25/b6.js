let str= prompt("Nhap chuoi can kiem tra:");
alert(str + " " + outPut(str));
function outPut(str) {
    if(str.length === 0){
        return "chuua nhap chuoi";
    }
    for(let i=0; i < str.length/2; i++){
        if(str[i] === str[str.length-1-i]){
           return "la chuoi doi xung";
        }
        else{
            return "khong phai chuoi doi xung";
        }
    }
}