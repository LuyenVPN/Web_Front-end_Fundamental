let count =0;
document.getElementById("count").textContent = count;
document.getElementById("btn-change").onclick=function(){
    count++;
    document.getElementById("count").textContent = count; 
}