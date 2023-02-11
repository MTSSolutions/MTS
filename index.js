window.onscroll = function() {ScrollFunction()};

function ScrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("nivbar").style.padding = "12px";
        document.getElementById("nivbar").style.fontSize = " 15px";
        document.getElementById("nivbar").style.backgroundColor = "black"; 
        document.getElementById("nivbar").style.height = "30px";
        document.getElementById("logo").style.display = "none";
        document.getElementById("signup-btn").style.display = "none";
        document.getElementById("login").style.display = "none";
        document.getElementById("nivbar").style.paddingLeft = "100px";
        document.getElementById("navtext").style.marginRight = "50px";
        document.getElementById("navtex").style.marginRight = "50px";
        document.getElementById("navte").style.marginRight = "50px";
        document.getElementById("navt").style.marginRight = "50px";
        document.getElementById("nav").style.marginRight = "50px";
        document.getElementById("search-icon-top").style.display = "flex";
        document.getElementById("search-icon-top").style.marginRight="200px";
        document.getElementById("nivbar").style.opacity = "0.7"; 
    }
    else{
        document.getElementById("nivbar").style.padding = "0px";
        document.getElementById("nivbar").style.backgroundColor = "#45464600";
        document.getElementById("nivbar").style.marginRight = "10px";
        document.getElementById("nivbar").style.height = "88px";
        document.getElementById("logo").style.display = "flex";
        document.getElementById("signup-btn").style.display = "flex";
        document.getElementById("login").style.display = "flex";
        document.getElementById("nivbar").style.paddingLeft = "0px";
        document.getElementById("navtext").style.marginRight = "0px";
        document.getElementById("navtex").style.marginRight = "0px";
        document.getElementById("navte").style.marginRight = "0px";
        document.getElementById("navt").style.marginRight = "0px";
        document.getElementById("nav").style.marginRight = "0px";
        document.getElementById("nivbar").style.opacity = "1";
        document.getElementById("search-icon-top").style.display = "none";
}
}


