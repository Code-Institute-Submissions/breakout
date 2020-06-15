// Setting up the canvas //
const canvas = document.getElementById("levelTwoCanvas");
const ctx = canvas.getContext("2d");

// Fetching the screen size and adjusting the canvas accordingly
const userScreenWidth = screen.width;
const userScreenHeight = screen.height;
//const virtualButtonsHeight = userScreenHeight - canvas.height;

document.getElementsByTagName("canvas")[0].width = userScreenWidth;
document.getElementsByTagName("canvas")[0].height = userScreenHeight - (userScreenHeight * 0.165);


// ------- Levels ---------//
let level = 2;
let maxLevel = 2;

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
// ----- Bricks ----- //
var brick = {
    row: 3,
    column: 5,
    width: (canvas.width / 5) - (canvas.width / 27.5),
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
    color: "white",
    borderColor: "white"
}

// ----------- Creating the ball object ------------- //
const ballRadius = 10;
var ball = {
    xPosition: canvas.width/2,
    yPosition: paddle.yPosition - ballRadius,
    radius: ballRadius,
    speed: 7,
    dx: 5.5,
    dy: -5.5,
    color: "white",
    border: "white"
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