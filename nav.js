const hamburgerBtn = document.querySelector("#hamburger")
const menuOpen = document.querySelector("menuOpen")

function hamburgerMenu() {
    // if closed then open
    if (hamburgerBtn.classList.contains("fa-bars")) {
        hamburgerBtn.classList.remove("fa-bars")
        hamburgerBtn.classList.add("fa-x")
        if (window.innerWidth > 575) {
            document.querySelector(".sticky").style.height = "155px";
            document.querySelector(".gradientBorder.bottom").style.top = "155px";
            document.querySelector("#menuOpen").style.display = "block";    
        }
        else {
            document.querySelector(".sticky").style.height = "274px";
            document.querySelector(".gradientBorder.bottom").style.top = "274px";
            document.querySelector("#menuOpen").style.display = "block";    
        }
    }
    // else close
    else {
        hamburgerBtn.classList.remove("fa-x")
        hamburgerBtn.classList.add("fa-bars")
        document.querySelector(".sticky").style.height = "80px";
        document.querySelector(".gradientBorder.bottom").style.top = "80px";
        document.querySelector("#menuOpen").style.display = "none";
    }
}

// When the user scrolls down 520px from the top of the document, display mobileNav
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.innerWidth < 1020) {
        if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
            document.getElementById("mobileNav").style.display = "block";
            // Animate mobileNav in
            document.getElementById('mobileNav').style.animation = 'slide-in .3s forwards'
        } else {
            // Animate mobileNav out
            document.getElementById('mobileNav').style.animation = 'slide-out .3s forwards'
        }
    }
    else if (window.innerWidth > 1020) {
        document.getElementById("mobileNav").style.display = "none";
    }
}