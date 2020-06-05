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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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

//function draw()

function game() {

    drawPaddle();
    paddleMove();
//    draw();
//    update();
    requestAnimationFrame(game);
} 

game();