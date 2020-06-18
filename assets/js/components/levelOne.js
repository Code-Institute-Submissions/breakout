// Setting up the canvas //
const canvas = document.getElementById('levelOneCanvas');
const ctx = canvas.getContext('2d');

// Fetching the viewport size and adjusting the canvas accordingly
/*
    A big thanks to the users that had a great way of doing this in this thread on stackoverflow:
    https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
*/
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
  viewportHeight, viewportWidth
);


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

const brick = {
  row: 3,
  column: 3,
  width: (canvas.width / 3) - (canvas.width / 25),
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

// Constants for setting up the paddle object//
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
const ballRadius = 10; // This is used in the collision detection as well
const ball = {
  xPosition: canvas.width / 2,
  yPosition: paddle.yPosition - ballRadius,
  radius: ballRadius,
  speed: 6,
  dx: 5,
  dy: -5,
  color: 'black',
  border: 'black',
};

// ---------------- Score and Lives -------------------- //
/*
    These two functions adjust the font and margin of the stats to keep them from overlapping
*/
function findSizeOfFont() {
    if(canvas.width > 1000) {
        return 35;
    } else if (canvas.width > 320) {
        return 25;
    } else {
        return 20;
    }
}

function lifeCounterRightMargin() {
    if(canvas.width > 1000) {
        return 2;
    } else {
        return 10;
    }
}

// ------- Levels ---------//
const level = 1;
const maxLevel = 1;

/*
    The following function draws the info about levels, lives and score on the canvas
*/

function gameStats(text, textX, textY) {
  ctx.fillStyle = 'white';
  ctx.font = `${findSizeOfFont()}px Quicksand`;
  ctx.fillText(text, textX, textY);
}

// Drawing the score, lives, and level using the function above //
function drawStats() {
  gameStats(`Score: ${score}`, 35, 40);
  gameStats(`Lives: ${lives}`, canvas.width - 135 - findSizeOfFont()/lifeCounterRightMargin(), 40);
  gameStats(`Level: ${level}`, canvas.width / 2 - 45, 40);
}
