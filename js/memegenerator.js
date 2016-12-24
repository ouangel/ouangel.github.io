// function el (id) {
// 	return document.getElementById(id);
// }

var canvas= document.getElementById("canvas");
var inputImg = document.getElementById("imgInput");
var topt = document.getElementById("topInput");
var bottom = document.getElementById("bottomInput");
var download = document.getElementById("download");
var ctx = canvas.getContext("2d");

reader = new FileReader();
img = new Image();



drawing = function() {
	var writeText = function (text, x, y) {
        for (var s=40; s >= 0; s -=1) {
            ctx.font = "bold " + s + "pt Impact, Charcoal, sans-serif";
            if (ctx.measureText(text).width < canvas.width - 10) {
            	// console.log("hi");
                ctx.fillText(text, x, y);
                ctx.strokeText(text, x, y);
                break;
            }
        }
    };
    canvas.width = img.width;
    canvas.height = img.height;
	ctx.drawImage(img, 0, 0);
	ctx.textAlign = "center";
	ctx.fillStyle = "#fff";
	ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
	writeText(topt.value, canvas.width/2, 55);
	writeText(bottom.value, canvas.width/2, canvas.height - 10);
	download.href = canvas.toDataURL("image/jpg");
};

inputImg.onchange = function () {
    reader.readAsDataURL(inputImg.files[0]);
    reader.onload = function () {
        img.src = reader.result;
        img.onload = function () {
            drawing();
            // img.style.width = "53%";
        }
    }
};
topt.onkeyup = drawing;
bottom.onkeyup = drawing;



var reset = document.getElementById("reset");
reset.onclick = function() {
	location.reload();
}

