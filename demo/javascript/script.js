/* 所有的JS均写在此页 */

//make the navigation on the top
var nav = document.getElementById("nav");
window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop >= 100){
        nav.className = "header-nav navfixed";
    }else{
        nav.className = "header-nav";
    }
}
//make the imgs slide
var index = 0, timer = null;
var imgs1 = document.getElementById("imgs-slide");
var box1Img = imgs1.getElementsByTagName("div");

function changeImgs(){
    for(var i = 0; i < box1Img.length; i++){
        box1Img[i].style.display = 'none';
    }
    box1Img[index].style.display = 'block';
}

function slideImgs(){
    imgs1.onmouseover = function(){
        if(timer){
            clearInterval(timer);
        }
    }
    var len = box1Img.length;
    imgs1.onmouseout = function(){
        timer = setInterval(function(){
            index++;
            if(index >= len){
                index = 0;
            }
            changeImgs();
        }, 2000);
    }
    imgs1.onmouseout();

    var prev = document.getElementById("prev");
    prev.onclick = function() {
        index--;
        if(index < 0)
            index = len - 1;
        changeImgs();
    }
    var next = document.getElementById("next");
    next.onclick = function() {
        index++;
        if(index >= len)
            index = 0;
        changeImgs();
    }
}

slideImgs();

/* js for footer */

function recGood(){
    alert("点赞成功！");
}

function recStar(){
    alert("收藏成功！");
}

/* js for blog form */

function checkValue(){
    var forms = document.forms[0];
    var back = document.getElementById("back");
    var login = document.getElementById("login");
    if(forms.loginname.value == "root" && forms.loginpw.value == "root"){
        back.style.visibility = "hidden";
        login.style.visibility = "hidden";
        alert("Welcome Back");
    }else{
        alert("Invalid Username or Password!");
        forms.loginname.value = "";
        forms.loginpw.value = "";
    }
}