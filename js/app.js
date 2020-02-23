// mynavbar 
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $("#mynavbar").css("top","5%")
    if(scroll < 200){
        $('#mynavbar').css('background', 'transparent');
    } else{
        $('#mynavbar').css('background', 'linear-gradient(89deg,#a5215e 3%,#ee5586 98%)');
        $("#mynavbar").css("top","0")
    }
});

// mynavbar p4

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $("#mynavbarp4").css("top","5%")
    if(scroll < 200){
        $('#mynavbarp4').css('background', 'transparent');
    } else{
        $('#mynavbarp4').css('background', 'linear-gradient(89deg,#a5215e 3%,#ee5586 98%)');
        $("#mynavbarp4").css("top","0")
    }
});

// ******

var hbar=document.querySelector(".hidden-bar")
var menu=document.querySelector(".fmenu")
hbar.onclick=function(){
    menu.classList.toggle("active")
}


var fli=document.querySelector(".fli")
var phmenu=document.querySelector(".phonemenu")
fli.onclick=function(){
    phmenu.classList.toggle("active")
}


// mynavbar end

