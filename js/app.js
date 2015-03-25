var holes = document.querySelectorAll(".hole");
var moleCounter = 0;
var score = document.getElementsByTagName("h1")[0];

function randomNumber() {
	var result = Math.floor(Math.random() * (holes.length));
	console.log(result);
	return result; 
}



for (var i = 0; i<holes.length; i++) {
	holes[i].addEventListener("click", function() {
		if (this.innerHTML !== "") {
			this.innerHTML = "";
			moleCounter++;	
			score.innerText = moleCounter;
			holes[randomNumber()].innerHTML = "<img src = tobi.gif>";
		}
		})
	}

holes[randomNumber()].innerHTML = "<img src = tobi.gif>";



