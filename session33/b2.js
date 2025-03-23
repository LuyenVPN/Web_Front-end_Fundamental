let count=0;
let ouput= document.getElementById("ouput");
let textarea =document.getElementById("textarea");
document.getElementById("btn").onclick=function(){
    count = textarea.value.length;
    ouput.innerText = count;
};
