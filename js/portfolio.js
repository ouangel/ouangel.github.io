// navigation bar
var icon = document.getElementById("hamburger");
var nav = document.getElementById("dropdown");
var close = document.getElementById("close-btn");


icon.onclick = function() {
	nav.style.display = "block";
}

close.onclick = function() {
	nav.style.display = "none";
}


// back to top
var toTop = document.getElementById("up");

toTop.addEventListener("click", smoothscroll);
function smoothscroll(){

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
};

smoothscroll();




