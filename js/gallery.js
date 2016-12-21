var img_dis = document.getElementById("img_display");
var img_play = document.getElementById("img_player");
var img_desc = document.getElementById("img_description");
var img_input = document.getElementById("image");
var desc = document.getElementById("description");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var add = document.getElementById("add");


var img_arr = ["garibaldi.jpg", "machi.jpg", "beach.jpg", "angel.jpg"];
var desc_arr = ["Garibaldi Lake", "Dog", "Kit", "Person"];

var num = 0;
img_desc.innerHTML = desc_arr[num]+"<p>";
img_play.src = "../img/gallery/" + img_arr[num];


prev.onclick = function() {
	num--;

	if (num < 0) {
		num = 1;
	}

	img_desc.innerHTML = desc_arr[num]+"<p>";
	img_play.src = "../img/gallery/" + img_arr[num];
}

next.onclick = function() {
	num++;

	if (num > img_arr.length-1) {
		num = 0;
	}

	img_desc.innerHTML = desc_arr[num]+"<p>";
	img_play.src = "../img/gallery/" + img_arr[num];
}

add.onclick = function() {
	img_arr.push(img_input.value);
	desc_arr.push(desc.value);
}

for (var i=0; i< img_arr.length; i++) {
	var thumb = document.createElement("img");
	thumb.src = img_arr[i];
	document.body.appendChild(thumb);
	thumb.style.width = "100px";
	thumb.style.height = "100px";
}

for (var i=0; i<img_arr.length; i++) {
	var info = document.createElement("p");
	info.innerHTML = desc_arr[i];
	document.body.appendChild(info);
}





