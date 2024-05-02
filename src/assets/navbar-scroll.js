let scrollPos = window.scrollY;
window.onscroll = function() {
    let curScrollPos = window.scrollY;

    // decide whether the navbar should be fixed on top with larger size
    if(curScrollPos < 80){
        document.getElementById("navbar").style.height = "100px";
        document.getElementById("navbar").style.background = "var(--dark)";
    }else{
        // compare the current Y pos with previous Y pos to deduct 
        // if the user is scrolling down or up
        if (scrollPos > curScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "calc(0px - var(--navbar-height))";
        }
        document.getElementById("navbar").style.height = "var(--navbar-height)";
        document.getElementById("navbar").style.background = "var(--soft-dark)";
    }
    scrollPos = curScrollPos;

    
}

