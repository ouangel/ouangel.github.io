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
var requestAnimationFrame = window.requestAnimationFrame;
var toTop = document.getElementById("up");
var bodyElement = document.querySelector("body");

var currentPos;
var iteration;
var start = false;

function setup() {
	toTop.addEventListener("click", backToTop, false);

	bodyElement.addEventListener("mousewheel", stopScroll, false);
	bodyElement.addEventListener("DOMMouseScroll", stopScroll, false);

	animationLoop();
}

setup();

function backToTop(e) {
	currentPos = getScrollPos();

	start ^= true;
	iteration = 0;
}

function stopScroll() {
	start = false;
}

function getScrollPos() {
	if (document.documentElement.scrollTop == 0) {
		return document.body.scrollTop;
	} else {
		return document.documentElement.scrollTop;
	}
}

function animationLoop () {
	if (start) {
		window.scrollTo(0, 0);

		// iteration++;

		if (getScrollPos() <= 0) {
			stopScroll();
		}
	}

	requestAnimationFrame(animationLoop);
}