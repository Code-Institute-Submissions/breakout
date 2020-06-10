// Setting up the canvas //
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Game variables and constants //
let level = 1;
const maxLevel = 1;
var lives = 3;
let score = 0;
var scoreUnit = 1 * lives;
let leftArrow = false;
let rightArrow = false;
let paused = false;
let gameLost = false;

// Game over functions //
function gameOver() {
    if(lives <= 0) {
        gameLost = true;
        document.getElementById("gameLost").style.display = "block";
        document.getElementById("loseScore").innerHTML = `Score: ${score}`;
    }
}

function youWin() {
    document.getElementById("gameWon").style.display = "block";
    document.getElementById("winScore").innerHTML = `Score: ${score}`;
    ball.dx = 0;
    ball.dy = 0;
}

function levelUp() {
    let levelDone = true; 
    for(let r = 0; r < brick.row; r++) {
        for(let c = 0; c < brick.column; c++) {
            levelDone = levelDone && !bricks[r][c].status;
        }
    }
    if(levelDone) {
        if(level >= maxLevel) {
            youWin();
            gameOver = true;
            return;
        }
        brick.row++;
        bricksCreate();
        ball.speed += 0.5;
        resetBall();
        level++;
    }
}

// --------- Rounded rectangle function --------- //
// This section got a lot from from the guide at https://newfivefour.com/javascript-canvas-rounded-rectangle.html //
function roundRect(xPosition, yPosition, width, height, rounding, color) {
    const halfRadians = (2 * Math.PI)/2
    const quarterRadians = (2 * Math.PI)/4

    ctx.arc(rounding + xPosition, rounding + yPosition, rounding, -quarterRadians, halfRadians, true);
    ctx.lineTo(xPosition, yPosition + height - rounding);

    ctx.arc(rounding + xPosition, height - rounding + yPosition, rounding, halfRadians, quarterRadians, true);
    ctx.lineTo(xPosition + width - rounding, yPosition + height);

    ctx.arc(xPosition + width - rounding, yPosition + height - rounding, rounding, quarterRadians, 0, true);
    ctx.lineTo(xPosition + width, yPosition + rounding);

    ctx.arc(xPosition + width - rounding, yPosition + rounding, rounding, 0, -quarterRadians, true)  
    ctx.lineTo(xPosition + rounding, yPosition)  

    ctx.fillStyle = `${color}`;
    ctx.fill(); 
}



// ------ Paddle -------- //
const paddleWidth = 120;
const paddleHeight = 15;
const paddleMarginBottom = 30;

const paddle = {
    xPosition: canvas.width/2 - paddleWidth/2,
    yPosition: canvas.height - paddleHeight - paddleMarginBottom,
    width: paddleWidth,
    height: paddleHeight,
    dx: 10,
    color: "black"
}

function paddleDraw() {
    //ctx.fillStyle = "black";
    //ctx.fillRect(paddle.xPosition, paddle.yPosition, paddle.width, paddle.height);
    ctx.beginPath();
    roundRect(paddle.xPosition, paddle.yPosition, paddle.width, paddle.height, 7, paddle.color);
    ctx.stroke();
}

// paddle movement //
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
    speed: 6,
    dx: 5,
    dy: -5
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

function resetBall(){
    ball.xPosition = canvas.width/2;
    ball.yPosition = paddle.yPosition - ballRadius;
    ball.dx = 5 * (Math.random() * 2 - 1);
    ball.dy = -5;
}

// ---------------- Bricks -------------------- //
const brick = {
    row: 3,
    column: 3,
    width: 260,
    height: 15,
    offsetLeft: 45,
    offsetTop: 20,
    marginTop: 40,
    fillColor: "black"
}

let bricks = [];

function bricksCreate() {
    for(let r = 0; r < brick.row; r++) {
        bricks[r] = [];
        for(let c = 0; c < brick.column; c++) {
            bricks[r][c] = {
                x: c * (brick.width + brick.offsetLeft) + brick.offsetLeft,
                y: r * (brick.height + brick.offsetTop) + brick.offsetTop + brick.marginTop,
                status: true
            }
        }
    }
}

bricksCreate();

function bricksDraw() {
    for(let r = 0; r < brick.row; r++) {
        for(let c = 0; c < brick.column; c++) {
            let b = bricks[r][c];
            if(b.status) {
                ctx.fillStyle = brick.fillColor;
                ctx.fillRect(b.x, b.y, brick.width, brick.height);
            }
        }
    }
}

// ---------------- Collisions ---------------- //
// Wall bounce //
function wallCollision() {
    if(ball.xPosition + ball.radius > canvas.width || ball.xPosition - ball.radius < 0) {
        ball.dx = -ball.dx;
    }

    if(ball.yPosition - ball.radius < 0) {
        ball.dy = -ball.dy;
    }

    if(ball.yPosition + ball.radius > canvas.height) {
        lives--;
        scoreUnit--;
        resetBall();
    }

    if(lives == 0) {
        gameOver();
    }
}

function paddleCollision() {
    if(ball.yPosition > paddle.yPosition && ball.yPosition < paddle.yPosition + paddle.height
       && ball.xPosition > paddle.xPosition && ball.xPosition < paddle.xPosition + paddle.width) {

        let collidePoint = ball.xPosition - (paddle.xPosition + paddle.width/2);
        collidePoint = collidePoint / (paddle.width/2);

        let angle = collidePoint * (Math.PI/3);
        ball.dx = ball.speed * Math.sin(angle);
        ball.dy = - ball.speed * Math.cos(angle);
    }
}

// brick collision //
function ballCollision() {
    for(let r = 0; r < brick.row; r++) {
        for(let c = 0; c < brick.column; c++) {
            let b = bricks[r][c];
            if(b.status) {
                if(ball.xPosition + ball.radius > b.x && ball.xPosition - ball.radius < b.x + brick.width
                   && ball.yPosition + ball.radius > b.y && ball.yPosition - ball.radius < b.y + brick.height) {
                    b.status = false;
                    ball.dy = -ball.dy;
                    score += scoreUnit;
                }
            }
        }
    }
}
// ---------------- Score and Lives -------------------- //
function gameStats(text, textX, textY) {
    ctx.fillStyle = "black";
    ctx.font = "25px Quicksand";
    ctx.fillText(text, textX, textY);
}

function statsDraw() {
    gameStats("Score: " + score, 35, 35);
    gameStats("Lives: " + lives, canvas.width - 135, 35);
    gameStats("Level: " + level, canvas.width/2 - 45, 35);
}

// pause game //
function pausePlay() {
    if(!paused) {
        paused = true;
    } else if(paused) {
        paused = false;
    }
}

document.addEventListener("keydown", function(event) {
    if(event.keyCode == 27){
        pausePlay();
    }
});

// ---------------- Initialising -------------------- //
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ballDraw();
    paddleDraw();
    bricksDraw();
    statsDraw();
}

function update() {
    paddleMove();
    ballMove();
    wallCollision();
    paddleCollision();
    ballCollision();
    levelUp();

}

function game() {
    draw();
    if(!paused) {
        update();
    }
    

    if(!gameLost) {
        requestAnimationFrame(game);
    }   
} 

game();