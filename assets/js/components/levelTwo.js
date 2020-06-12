// Setting up the canvas //
const canvas = document.getElementById("levelTwoCanvas");
const ctx = canvas.getContext("2d");

// ------- Levels ---------//
let level = 2;
let maxLevel = 2;
// ----- Bricks ----- //
var brick = {
    row: 3,
    column: 5,
    width: 160,
    height: 15,
    offsetLeft: 25,
    offsetTop: 20,
    marginTop: 40,
    borderColor: "white",
    fillColor: "white"
}

// ------------- Creating the paddle object -------------- //
const paddleWidth = 120;
const paddleHeight = 15;
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

// ----------- The ball ------------- //
const ballRadius = 10;
var ball = {
    xPosition: canvas.width/2,
    yPosition: paddle.yPosition - ballRadius,
    radius: ballRadius,
    speed: 7,
    dx: 5.5,
    dy: -5.5
}