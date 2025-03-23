document.getElementById("img1").onclick=function(){
      if (img1.style.height === img1.style.height){
        anh1.style.width="100%";
        anh1.style.height="100%";
        img2.style.display="none";
        img3.style.display="none";
      }
};

document.getElementById("img2").onclick=function(){
    anh2.style.width="100%";
    anh2.style.height="100%";
    img1.style.display="none";
    img3.style.display="none";
};
document.getElementById("img3").onclick=function(){
    anh3.style.width="100%";
    anh3.style.height="100%";
    img2.style.display="none";
    img1.style.display="none";
};