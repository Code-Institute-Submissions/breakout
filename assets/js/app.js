var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Lives and score 
var score = 0;
var lives = 3;

//Directions and positions
var x = canvas.width/2;
var y = canvas.height - 30;

//The ball and directions 
const ballRadius = 10;
const ball = {
    radius: ballRadius,
    speed: 4,
    dx: 4,
    dy: -4
}


//The paddle 
var paddle = {
    height: 15,
    width: 100,
    xPosition: (canvas.width - 100) / 2,
    rightPressed: false,
    leftPressed: false
}

//Bricks 
var brick = {
    rowCount: 3, 
    columnCount: 10,
    width: 75,
    height: 20,
    padding: 10,
    offsetTop: 30,
    offsetLeft: 60
}

var bricks = [];
for(var c = 0; c < brick.columnCount; c++) {
    bricks[c] = [];
    for(var r = 0; r < brick.rowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 }
    }
}

function drawBricks() {
    for(var c = 0; c < brick.columnCount; c++) {
        for(var r = 0; r < brick.rowCount; r++) {
            if(bricks[c][r].status == 1) {
                var brickX = (c * (brick.width + brick.padding)) + brick.offsetLeft;
                var brickY = (r * (brick.width + brick.padding)) + brick.offsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brick.width, brick.height);
                ctx.fillStyle = "#a86878";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

//Left and right  arrow detection
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false); 

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        paddle.rightPressed = true; 
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        paddle.leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        paddle.rightPressed = false; 
    } else if(e.key == "Left" || e.key == "ArrowLeft") {
        paddle.leftPressed = false;
    }
}



function collisionDetection() {
    for(var c = 0; c < brick.columnCount; c++) {
        for(var r = 0; r < brick.rowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x + brick.width && y > b.y && y < b.y + brick.height) {
                    ball.dy = -ball.dy;
                    b.status = 0;
                    score++;
                    if(score == brick.rowCount * brick.columnCount) {
                        alert("you win");
                        document.location.reload();
                        clearInterval(interval);
                    }
                }
            }
        }
    }
}

function drawScore() {
    ctx.fonts = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + score, 20, 20);
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

//Drawing the ball (shape and color)
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = "#a06878";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddle.xPosition, canvas.height - paddle.height, paddle.width, paddle.height);
    ctx.fillStyle = "#a06878";
    ctx.fill();
    ctx.closePath();
}

function resetGame() {
    x = canvas.width/2;
    y = canvas.height - 30;
    ball.dx = 4 * (Math.random() * 2 - 1);
    ball.dy = -4;
    paddle.xPosition = (canvas.width-paddle.width)/2;

}

function startGame() {
    x += ball.dx;
    y += ball.dy;
}

//erasing and re-drawing it in a new position (movement)
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    
    //following ifs make the ball bounce off the walls 
    if(x + ball.dx > canvas.width - ball.radius || x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
    }

    if(y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
    } else if(y + ball.dy > canvas.height - ball.radius) {
        if(x > paddle.xPosition && x < paddle.xPosition + paddle.width) {
            ball.dy = -ball.dy;
        } else {
            lives--;
            if(!lives) {
                alert("GAME OVER");
                document.location.reload();
            }
            else { /////////////////////////////////////////////////////////////////////////
                resetGame();
            }
        }
    }

    if(paddle.rightPressed) {
        paddle.xPosition += 7;
        if(paddle.xPosition + paddle.width > canvas.width) {
            paddle.xPosition = canvas.width - paddle.width;
        }
    } else if(paddle.leftPressed) {
        paddle.xPosition -= 7;
        if(paddle.xPosition < 0) {
            paddle.xPosition = 0;
        }
    }

    startGame(); //starts the movement of the ball
    requestAnimationFrame(draw);
}

draw();