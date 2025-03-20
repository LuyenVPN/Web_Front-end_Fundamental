let container= document.getElementById("container");
let sum=24;
document.getElementById("+").onclick=function(){
    sum++;
    container.style.fontSize= sum+"px";
}
document.getElementById("-").onclick=function(){
    sum--;
    container.style.fontSize=sum +"px";
}