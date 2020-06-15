// Setting up the canvas //
const canvas = document.getElementById("levelOneCanvas");
const ctx = canvas.getContext("2d");

// Fetching the screen size and adjusting the canvas accordingly
const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

const virtualButtonsHeight = viewportHeight * 0.2;

function findCanvasHeight(height, width) {
    if(height > width) {
        return (height - virtualButtonsHeight);
    } else if(height < width) {
        return height;
    }
}
document.getElementsByTagName("canvas")[0].width = viewportWidth;
document.getElementsByTagName("canvas")[0].height = findCanvasHeight(viewportHeight, viewportWidth);


// ------- Levels ---------//
let level = 1;
let maxLevel = 1;

// Functions for responsiveness //
/*
    The following functions are for finding height and width of objects based on the screen size 
*/
function findHeightOfPills(screen, divide) {
    if(canvas.height > canvas.width) {
        return (screen / (divide * 0.9));
    } else if (canvas.height < canvas.width) {
        return (screen / divide)
    }
}

// ----- creating the brick object ----- //
function findTopMarginOfBrick(screen, divide) {
    if(canvas.height > canvas.width) {
        return (screen / (divide * 0.8));
    } else if (canvas.height < canvas.width) {
        return (screen / divide)
    }
}

var brick = {
    row: 3,
    column: 3,
    width: (canvas.width / 3) - (canvas.width / 25),
    height: findHeightOfPills(canvas.height, 45),
    offsetLeft: (canvas.width / 34.5),
    offsetTop: (canvas.height / 40),
    marginTop: findTopMarginOfBrick(canvas.height, 15),
    borderColor: "white",
    fillColor: "white"
}

// ------------- Creating the paddle object -------------- //
function findWidthOfPaddle(screen, divide) {
    if(canvas.width < canvas.height) {
        return (screen / divide);
    } else if(canvas.width > canvas.height) {
        return (screen / (divide * 2));
    }
}



const paddleWidth = findWidthOfPaddle(canvas.width, 5)
const paddleHeight = findHeightOfPills(canvas.height, 45);
const paddleMarginBottom = 30;

const paddle = {
    xPosition: canvas.width/2 - paddleWidth/2,
    yPosition: canvas.height - paddleHeight - paddleMarginBottom,
    width: paddleWidth,
    height: paddleHeight,
    dx: 10,
    color: "black",
    borderColor: "black"
}

// ----------- Creating the ball object ------------- //
const ballRadius = 10;
var ball = {
    xPosition: canvas.width/2,
    yPosition: paddle.yPosition - ballRadius,
    radius: ballRadius,
    speed: 6,
    dx: 5,
    dy: -5,
    color: "black",
    border: "black"
}

// ---------------- Score and Lives -------------------- //
/*
    The following function draws the info about levels, lives and score on the canvas 
*/
function gameStats(text, textX, textY) {
    ctx.fillStyle = "white";
    ctx.font = "25px Quicksand";
    ctx.fillText(text, textX, textY);
}

function drawStats() {
    gameStats("Score: " + score, 35, 35);
    gameStats("Lives: " + lives, canvas.width - 135, 35);
    gameStats("Level: " + level, canvas.width/2 - 45, 35);
}
/*
for(var i = 0; i < document.getElementsByClassName("movementButtons").length; i++) {
    document.getElementsByClassName("movementButtons")[i].style.height = `${virtualButtonsHeight}px`;
}
*/