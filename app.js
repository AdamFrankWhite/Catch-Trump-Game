var gamePiece; 
const max_v = 20;

function startGame() {
	gameArea.start();
	bluegamePiece = new component(50,50,"navy",200,200);
}


function component(width, height, color, x, y) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	this.speedX = 0;
	this.speedY = 0;
	this.update = function() {
		ctx = gameArea.context;
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}
	this.newPos = function() {
		this.x += this.speedX;
		this.y += this.speedY;
	}
	
	
}

function updateGameArea() {
	
	gameArea.clear();
	gameArea.context.fillStyle = "black";
	gameArea.context.fillRect(0,0, gameArea.canvas.width, gameArea.canvas.height)
	if (bluegamePiece.x < 0 || bluegamePiece.x > gameArea.canvas.width-bluegamePiece.width) {
		bluegamePiece.speedX = -bluegamePiece.speedX;
	} else if (bluegamePiece.y < 0 || bluegamePiece.y > gameArea.canvas.height-bluegamePiece.height) {
		bluegamePiece.speedY = -bluegamePiece.speedY;
	}
	bluegamePiece.newPos();
	bluegamePiece.update();
}

function moveUp() {
	if (bluegamePiece.speedY > -max_v) {
		bluegamePiece.speedY -= 1;
	}
}

function moveLeft() {
	if (bluegamePiece.speedX > -max_v) {
		bluegamePiece.speedX -= 1;
	}
}

function moveDown() {
	if (bluegamePiece.speedY < max_v) {
		bluegamePiece.speedY += 1;
	}
}

function moveRight() {
	if (bluegamePiece.speedX < max_v) {
		bluegamePiece.speedX += 1;
	}
}

const gameArea = {
	canvas: document.createElement("canvas"),
	start: function() {
		this.canvas.width = 1200;
		this.canvas.height = 500;
		this.context = this.canvas.getContext("2d");
		this.context.fillStyle = "black";
		this.context.fillRect(0,0, this.canvas.width, this.canvas.height)
		document.body.insertBefore(this.canvas, document.body.childNodes[1]);
		this.interval = setInterval(updateGameArea, 20);
	},
	clear: function() {
		this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
	}
}

document.addEventListener("keydown", function(e){
	console.log(e.keyCode);
	switch (e.keyCode) {
		case 38: moveUp(); break;
		case 37: moveLeft(); break;
		case 40: moveDown(); break;
		case 39: moveRight(); break;
	}
	
})
	