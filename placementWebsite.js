let Navbar = document.getElementById("navbar");

window.addEventListener("scroll",function(e){
    if(window.pageYOffset > 652){
        Navbar.style.background = "black";
    
    }else if(window.pageYOffset < 652){
        Navbar.style.background = "rgb(14, 3, 53)";

    }

});








