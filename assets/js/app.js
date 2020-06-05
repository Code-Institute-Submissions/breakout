//Setting up the canvas 
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// ------ Paddle -------- //
const paddleWidth = 100;
const paddleHeight = 15;
const paddleMarginBottom = 30;

const paddle = {
    xPosition: canvas.width/2 - paddleWidth/2,
    yPosition: canvas.height - paddleHeight - paddleMarginBottom,
    width: paddleWidth,
    height: paddleHeight,
    dx: 6
}

function drawPaddle() {
    ctx.fillStyle = "black";
    ctx.fillRect(paddle.xPosition, paddle.yPosition, paddle.width, paddle.height);
}

function draw();

function game() {

    drawPaddle();
    draw();
    update();
    requestAnimationFrame(game);
} 

game();