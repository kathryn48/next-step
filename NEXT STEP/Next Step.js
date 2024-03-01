let navBar = document.getElementById("mobile-navBar");
let openBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-btn");

function OpenAndCloseNav(){
    if(navBar.style.display==="flex"){
        navBar.style.display = "none"
    }
    else{
        navBar.style.display ="flex"
    };
}

// OpenAndCloseNav()

openBtn.addEventListener("click", OpenAndCloseNav)
closeBtn.addEventListener("click", OpenAndCloseNav)