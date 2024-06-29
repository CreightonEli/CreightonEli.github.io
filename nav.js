const menu = document.querySelector("#mobile-nav")
const hamburgerBtn = document.querySelector("#hamburger")
const menuOpen = document.querySelector("#menu-open")

function hamburgerMenu() {
    // if closed then open
    if (hamburgerBtn.classList.contains("fa-bars")) {
        hamburgerBtn.classList.remove("fa-bars")
        hamburgerBtn.classList.add("fa-x")
        if (window.innerWidth > 575) {
            document.querySelector(".sticky").style.height = "155px";
            document.querySelector(".gradient-border.bottom").style.top = "155px";
            menuOpen.style.display = "block";    
        }
        else {
            document.querySelector(".sticky").style.height = "274px";
            document.querySelector(".gradient-border.bottom").style.top = "274px";
            menuOpen.style.display = "block";    
        }
    }
    // else close
    else {
        hamburgerBtn.classList.remove("fa-x")
        hamburgerBtn.classList.add("fa-bars")
        document.querySelector(".sticky").style.height = "80px";
        document.querySelector(".gradient-border.bottom").style.top = "80px";
        menuOpen.style.display = "none";
    }
}

function scrollFunction() {
    if (window.innerWidth < 1020) {
        if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
            document.getElementById("mobile-nav").style.display = "block";
            // Animate mobile-nav in
            document.getElementById('mobile-nav').style.animation = 'slide-in .3s forwards'
        } else {
            // Animate mobile-nav out
            document.getElementById('mobile-nav').style.animation = 'slide-out .3s forwards'
        }
    }
    else if (window.innerWidth > 1020) {
        document.getElementById("mobile-nav").style.display = "none";
    }
}

// When the user scrolls down 520px from the top of the document, display mobile-nav unless class stay is there
    if (menu.classList.contains("stay") == false) {
        window.onscroll = function() {scrollFunction()};
    }