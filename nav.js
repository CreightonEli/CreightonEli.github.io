// When the user scrolls down 520px from the top of the document, display mobileNav
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.innerWidth < 1020) {
        if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
            document.getElementById("mobileNav").style.display = "block";
            // Animate mobileNav in from above window
        } else {
            // Animate mobileNav out to above window
            // Wait until animation is done...
            document.getElementById("mobileNav").style.display = "none";
        }
    }
    else if (window.innerWidth > 1020) {
        document.getElementById("mobileNav").style.display = "none";
    }
} 