// define the next and prev button from html
// define the img id from html
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var img = document.getElementById("slideimg");

// when the next button is clicked, go to next slide
var num = 1;
// have 7 imgs in total
var total = 7;

// when the next button is clicked, go to next slide
next.onclick = function() {
	num++;
	if (num > total) {
		num = 1;
	}
	img.src = "../img/car/carImg" + num + ".jpg";
}

// when the prev button is clicked, go to next slide
prev.onclick = function() {
	num--;
	if (num < 1) {
		num = total;
	}
	img.src = "../img/car/carImg" + num + ".jpg";
}