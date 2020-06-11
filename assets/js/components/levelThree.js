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

// ----------- The ball ------------- //
const ballRadius = 10;
var ball = {
    xPosition: 1, //The 1's  are here simply to be overwritten
    yPosition: 1 - ballRadius,
    radius: ballRadius,
    speed: 8,
    dx: 6,
    dy: -6
}

//A function for moving a row of bricks in to the right by 50px
//for(var i = 0; i < bricks[0].length; i++) {
//    bricks[0][i].x += 50;
//}