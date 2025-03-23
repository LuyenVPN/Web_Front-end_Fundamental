let password = document.getElementById("password");
document.getElementById("icon").onclick=function(){
    if(password.type === "password"){
        password.type= "text";
    }else{
        password.type= "password";
    }
}