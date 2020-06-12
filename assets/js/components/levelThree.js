// Setting up the canvas //
const canvas = document.getElementById("levelThreeCanvas");
const ctx = canvas.getContext("2d");

// ------- Levels ---------//
let level = 3;
let maxLevel = 3;

// ----- Bricks ----- //
var brick = {
    row: 4,
    column: 6,
    width: 130,
    height: 15,
    offsetLeft: 23,
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
    speed: 8,
    dx: 6,
    dy: -6,
    color: "black",
    border: "black"
}

//A function for moving a row of bricks in to the right by 50px
//for(var i = 0; i < bricks[0].length; i++) {
//    bricks[0][i].x += 50;
//}