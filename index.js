function myScrolling(x){
if(x.matches){
    window.onscroll = function() {ScrollFunction()};
}else{
    window.onscroll = function( ){MobileScrolling()}
}
    }

const myscrol = window.matchMedia("(min-width: 908px)")

myScrolling(myscrol);

myscrol.addListener(myScrolling)


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
        document.getElementById("nivbar").style.height = "120px";
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
        document.getElementById("niv-line-two").style.display = "flex";

}
}

function MobileScrolling(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("logo").style.display = "none";
        document.getElementById("nivbar").style.backgroundColor = "white";
        document.getElementById("nivbar").style.height = "60px";
        document.getElementById("icon-close").style.display = "none";
        document.getElementById("icon-menu").style.display = "none";
        document.getElementById("nivbar").style.overflow = "hidden";
        document.getElementById("nivbar-line-one").style.display = "none";
        document.getElementById("niv-line-two").style.display = "none";
        document.getElementById("nivbar").style.opacity = "0.4";       
        document.getElementById("icon-arrow").style.display = "block";
    }
    else{
        document.getElementById("logo").style.display = "";
        document.getElementById("nivbar").style.backgroundColor = "#45464600";
        document.getElementById("nivbar").style.height = "135px";
        document.getElementById("icon-close").style.display = "none";
        document.getElementById("icon-menu").style.display = "block";
        document.getElementById("nivbar").style.overflow = "hidden";
        document.getElementById("nivbar-line-one").style.display = "block";
        document.getElementById("niv-line-two").style.display = "block";
        document.getElementById("nivbar").style.opacity = "1";    
        document.getElementById("icon-arrow").style.display = "none";
    }
}


