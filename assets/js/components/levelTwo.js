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

// ----------- The Paddle ----------- //
var paddle = {
    color: "black",
    borderColor: "white"
}

// ----------- The ball ------------- //
const ballRadius = 10;
var ball = {
    xPosition: 1, //The 1's  are here simply to be overwritten
    yPosition: 1 - ballRadius,
    radius: ballRadius,
    speed: 7,
    dx: 5.5,
    dy: -5.5,
    color: "white",
    border: "white"
}