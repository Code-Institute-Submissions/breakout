//Setting up the canvas 
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// ------ Paddle -------- //
const paddleWidth = 120;
const paddleHeight = 15;
const paddleMarginBottom = 30;

const paddle = {
    xPosition: canvas.width/2 - paddleWidth/2,
    yPosition: canvas.height - paddleHeight - paddleMarginBottom,
    width: paddleWidth,
    height: paddleHeight,
    dx: 10
}

function paddleDraw() {
    ctx.fillStyle = "black";
    ctx.fillRect(paddle.xPosition, paddle.yPosition, paddle.width, paddle.height);
}

// paddle movement //
let leftArrow = false;
let rightArrow = false;

document.addEventListener("keydown", function(event) {
    if(event.keyCode == 37){
        leftArrow = true;
    } else if(event.keyCode == 39){
        rightArrow = true; 
    }
});

document.addEventListener("keyup", function(event) {
    if(event.keyCode == 37){
        leftArrow = false;
    } else if(event.keyCode == 39){
        rightArrow = false; 
    }
});

function paddleMove(){
    if(rightArrow && paddle.xPosition + paddle.width < canvas.width) {
        paddle.xPosition += paddle.dx;
    } else if(leftArrow && paddle.xPosition > 0){
        paddle.xPosition -= paddle.dx;
    }
}

// ------------------------- The ball ------------------------- //
const ballRadius = 10;

const ball = {
    xPosition: canvas.width/2,
    yPosition: paddle.yPosition - ballRadius,
    radius: ballRadius,
    speed: 4,
    dx: 4,
    dy: -4
}

function ballDraw() {
    ctx.beginPath();

    ctx.arc(ball.xPosition, ball.yPosition, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.closePath();
}

function ballMove() {
    ball.xPosition += ball.dx;
    ball.yPosition += ball.dy;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ballDraw();
    paddleDraw();
}

function game() {
    paddleMove();
    draw();
//    update();
    requestAnimationFrame(game);
} 

game();