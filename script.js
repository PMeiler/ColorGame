initLength = 6;
var colors = popColor(initLength);
var winColor = pickWinner(initLength);
var squares = document.querySelectorAll(".square");
var title = document.getElementById("titleColor");
var h1 = document.getElementsByTagName("h1");
var spanner = document.getElementById("displayMsg");
var nGame = document.querySelector("#NewGame");
var easy = document.querySelector("#easyBtn");
var hard = document.querySelector("#hardBtn");


nGame.addEventListener("click", function() {
	setGameInit(initLength);
	console.log("Done");
});

easy.addEventListener("click", function() {
	initLength = 3;
	this.classList.add("Select")
	hard.classList.remove("Select")
	setGameInit(initLength);
});

hard.addEventListener("click", function() {
	initLength = 6;
	this.classList.add("Select")
	easy.classList.remove("Select")
	setGameInit(initLength);
});

hard.classList.add("Select");



setGameInit(initLength);

function setGameInit(size) {
	h1[0].style.backgroundColor = "steelblue";
	spanner.textContent = "";
	nGame.textContent = "New Game";
	colors = popColor(initLength);
	winColor = pickWinner(initLength);
	setSQColor(size);
	setHeadLine(winColor);

}

function pickWinner(size) {
	return colors[Math.floor(Math.random() * size)];
}

function popColor(size) {
	var arr = [];
	for (i = 0; i < size; i++) {
		arr[i] = getColor();
	}
	return arr;
}

function getColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"

}

function setSQColor(size) {
	for (i = 0; i < 6; i++) {
		if (typeof colors[i] === "undefined") {
			squares[i].style.backgroundColor = "#232323";
		} else {
			squares[i].style.backgroundColor = colors[i];
		}


		squares[i].addEventListener("click", function() {
			if (this.style.backgroundColor === winColor) {
				winSituation();
			} else {
				this.style.backgroundColor = "#232323";
				spanner.textContent = "Try Again!";

			}
		});
	}
}

function winSituation() {
	for (i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = winColor;
	}
	h1[0].style.backgroundColor = winColor;
	spanner.textContent = "Winner!";
	nGame.textContent = "Try Again?";
}


function setHeadLine(colorName) {
	title.textContent = colorName;
}