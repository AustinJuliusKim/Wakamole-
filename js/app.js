var holes = document.querySelectorAll(".hole")

var randomHole = function() {
	holes[Math.floor(Math.random() * (holes.length))].innerHTML = "<img src = tobi.gif>";
}
// will randomly pick a hole and place tobi inside

if (holes[Math.floor(Math.random() * (holes.length))].innerHTML === "<img src = tobi.gif>") {
	randomHole();
}
