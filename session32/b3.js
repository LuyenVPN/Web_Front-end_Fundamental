let ol=document.getElementById("addli");
let input=document.getElementById("myInput");
document.getElementById("addBtn").onclick=function(){
    if (input.value==="") {
        alert("tên môn học không được bỏ trống!");
    } else {
        ol.innerHTML+=`<li>${input.value}</li>`;
        input.value = "";
    }
}