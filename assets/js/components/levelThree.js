// Setting up the canvas //
const canvas = document.getElementById('levelOneCanvas');
const ctx = canvas.getContext('2d');

// Fetching the viewport size and adjusting the canvas accordingly
const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window
  .innerWidth || 0);
const viewportHeight = Math.max(document.documentElement.clientHeight || 0,
  window.innerHeight || 0);

// This is for setting up the height of the movement buttons on mobile view //
const virtualButtonsHeight = viewportHeight * 0.2;

// This function gives the space for the movement buttons beneath the canvas on mobile//
function findCanvasHeight(height, width) {
  if (height > width) {
    return (height - virtualButtonsHeight);
  }
  return height;
}

/*
    These variables below set up the height and width of the canvas
    They are represented by canvas.height and canvas.width
*/
document.getElementsByTagName('canvas')[0].width = viewportWidth;
document.getElementsByTagName('canvas')[0].height = findCanvasHeight(
  viewportHeight, viewportWidth,
);

// ------- Levels ---------//
const level = 3;
const maxLevel = 3;

// Functions for responsiveness //
/*
    The following functions are for finding height and width of objects based on the screen size
*/
function findHeightOfPills(screen, divide) {
  if (canvas.height > canvas.width) {
    return (screen / (divide * 0.9));
  }
  return (screen / divide);
}

// ----- creating the brick object ----- //
/*
    The follwing function checks the aspect ratio and decides the top margin of the bricks
*/
function findTopMarginOfBrick(screen, divide) {
  if (canvas.height > canvas.width) {
    return (screen / (divide * 0.8));
  }
  return (screen / divide);
}
// ----- Bricks ----- //
const brick = {
  row: 4,
  column: 6,
  width: (canvas.width / 6) - (canvas.width / 30),
  height: findHeightOfPills(canvas.height, 45),
  offsetLeft: (canvas.width / 34.5),
  offsetTop: (canvas.height / 40),
  marginTop: findTopMarginOfBrick(canvas.height, 15),
  borderColor: 'white',
  fillColor: 'white',
};

// ------------- Creating the paddle object -------------- //
function findWidthOfPaddle(screen, divide) {
  if (canvas.width < canvas.height) {
    return (screen / divide);
  }
  return (screen / (divide * 2));
}


const paddleWidth = findWidthOfPaddle(canvas.width, 5);
const paddleHeight = findHeightOfPills(canvas.height, 45);
const paddleMarginBottom = 30;

const paddle = {
  xPosition: canvas.width / 2 - paddleWidth / 2,
  yPosition: canvas.height - paddleHeight - paddleMarginBottom,
  width: paddleWidth,
  height: paddleHeight,
  dx: 10,
  color: 'black',
  borderColor: 'black',
};

// ----------- Creating the ball object ------------- //
const ballRadius = 10;
const ball = {
  xPosition: canvas.width / 2,
  yPosition: paddle.yPosition - ballRadius,
  radius: ballRadius,
  speed: 8,
  dx: 6,
  dy: -6,
  color: 'black',
  border: 'black',
};

// ---------------- Score and Lives -------------------- //
/*
    The following function draws the info about levels, lives and score on the canvas
*/
function gameStats(text, textX, textY) {
  ctx.fillStyle = 'white';
  ctx.font = '25px Quicksand';
  ctx.fillText(text, textX, textY);
}

function drawStats() {
  gameStats(`Score: ${score}`, 35, 35);
  gameStats(`Lives: ${lives}`, canvas.width - 135, 35);
  gameStats(`Level: ${level}`, canvas.width / 2 - 45, 35);
}
