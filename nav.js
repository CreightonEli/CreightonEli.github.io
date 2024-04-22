// When the user scrolls down 520px from the top of the document, display mobileNav
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.innerWidth < 1020) {
        if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
            document.getElementById("mobileNav").style.display = "block";
            // Animate mobileNav in
            document.getElementById('mobileNav').style.animation = 'fade-in .3s forwards'
        } else {
            // Animate mobileNav out
            document.getElementById('mobileNav').style.animation = 'fade-out .3s forwards'
        }
    }
    else if (window.innerWidth > 1020) {
        document.getElementById("mobileNav").style.display = "none";
    }
} 