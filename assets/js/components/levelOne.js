// Setting up the canvas //
const canvas = document.getElementById("levelOneCanvas");
const ctx = canvas.getContext("2d");

// Fetching the screen size and adjusting the canvas accordingly
const userScreenWidth = screen.width;
const userScreenHeight = screen.height;

document.getElementsByTagName("canvas")[0].width = userScreenWidth;
document.getElementsByTagName("canvas")[0].height = userScreenHeight - (userScreenHeight * 0.165);

// ------- Levels ---------//
let level = 1;
let maxLevel = 1;

// ----- creating the brick object ----- //
var brick = {
    row: 3,
    column: 3,
    width: (userScreenWidth / 3) - (userScreenWidth / 25),
    height: (userScreenHeight / 45),
    offsetLeft: (userScreenWidth / 34.5),
    offsetTop: (userScreenHeight / 40),
    marginTop: 40,
    borderColor: "white",
    fillColor: "white"
}

// ------------- Creating the paddle object -------------- //
function findWidthOfPaddle(screen, divide) {
    if(userScreenWidth < 600) {
        return (screen / divide);
    } else {
        return (screen / (divide * 2));
    }
}

function findHeightOfPaddle(screen, divide) {
    if(userScreenHeight > userScreenWidth) {
        return (screen / (divide * 1.05));
    } else if (userScreenHeight < userScreenWidth) {
        return (screen / divide)
    }
}

const paddleWidth = findWidthOfPaddle(userScreenWidth, 5)
const paddleHeight = findHeightOfPaddle(userScreenHeight, 45);
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