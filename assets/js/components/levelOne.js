// Setting up the canvas //
const canvas = document.getElementById("levelOneCanvas");
const ctx = canvas.getContext("2d");

// ------- Levels ---------//
let level = 1;
let maxLevel = 1;
// ----- Bricks ----- //
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

// ----------- The ball ------------- //
const ballRadius = 10;
var ball = {
    xPosition: 1, //The 1's  are here simply to be overwritten
    yPosition: 1 - ballRadius,
    radius: ballRadius,
    speed: 6,
    dx: 5,
    dy: -5
}