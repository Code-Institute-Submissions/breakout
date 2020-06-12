// Setting up the canvas //
const canvas = document.getElementById("levelOneCanvas");
const ctx = canvas.getContext("2d");

// ------- Levels ---------//
let level = 1;
let maxLevel = 1;

// ----- creating the brick object ----- //
var brick = {
    row: 3,
    column: 3,
    width: 260,
    height: 15,
    offsetLeft: 45,
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

// ----------- Creating the ball object ------------- //
const ballRadius = 10;
var ball = {
    xPosition: canvas.width/2,
    yPosition: paddle.yPosition - ballRadius,
    radius: ballRadius,
    speed: 6,
    dx: 5,
    dy: -5
}