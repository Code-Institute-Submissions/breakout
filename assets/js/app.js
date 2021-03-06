// Game variables and constants //
let lives = 3;
let score = 0;
let scoreUnit = 1 * lives;
let isLeftArrowPressed = false;
let isRightArrowPressed = false;
let isGamePaused = false;
let gameLost = false;


// Game over functions //
function isGameOver() {
  if (lives <= 0) {
    gameLost = true;
    document.getElementsByClassName('gameLost')[0].style.display = 'block';
    document.getElementsByClassName('loseScore')[0].innerHTML = `Score: ${score}`;
  }
}

function didPlayerWin() {
  document.getElementsByClassName('gameWon')[0].style.display = 'block';
  document.getElementsByClassName('winScore')[0].innerHTML = `Score: ${score}`;
  ball.dx = 0;
  ball.dy = 0;
}

function levelUp() {
  let levelDone = true;
  for (let r = 0; r < brick.row; r += 1) {
    for (let c = 0; c < brick.column; c += 1) {
      levelDone = levelDone && !bricks[r][c].status;
    }
  }
  if (levelDone) {
    if (level >= maxLevel) {
      didPlayerWin();
      gameOver = true;
      return;
    }
    createBricks();
    resetBall();
    level += 1;
  }
}

// --------- Rounded rectangle function --------- //
// This section got a lot from from the guide at https://newfivefour.com/javascript-canvas-rounded-rectangle.html //
function renderRoundedPill(xPosition, yPosition, width, height, rounding, color,
  borderColor) {
  const halfRadians = (2 * Math.PI) / 2;
  const quarterRadians = (2 * Math.PI) / 4;

  ctx.arc(rounding + xPosition, rounding + yPosition, rounding, -quarterRadians,
    halfRadians, true);
  ctx.lineTo(xPosition, yPosition + height - rounding);

  ctx.arc(rounding + xPosition, height - rounding + yPosition, rounding,
    halfRadians, quarterRadians, true);
  ctx.lineTo(xPosition + width - rounding, yPosition + height);

  ctx.arc(xPosition + width - rounding, yPosition + height - rounding, rounding,
    quarterRadians, 0, true);
  ctx.lineTo(xPosition + width, yPosition + rounding);

  ctx.arc(xPosition + width - rounding, yPosition + rounding, rounding, 0, -quarterRadians, true);
  ctx.lineTo(xPosition + rounding, yPosition);

  ctx.strokeStyle = `${borderColor}`;
  ctx.fillStyle = `${color}`;
  ctx.fill();
}

// ------ Paddle -------- //s
function drawPaddle() {
  ctx.beginPath();
  renderRoundedPill(paddle.xPosition, paddle.yPosition, paddle.width, paddle
    .height, 7, paddle.color, paddle.borderColor);
  ctx.stroke();
}

// paddle movement //
document.addEventListener('keydown', (event) => {
  if (event.keyCode === 37) {
    isLeftArrowPressed = true;
  } else if (event.keyCode === 39) {
    isRightArrowPressed = true;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 37) {
    isLeftArrowPressed = false;
  } else if (event.keyCode === 39) {
    isRightArrowPressed = false;
  }
});

// Movement functions for the virtual buttons //
function isVirtualLeftButtonPressed() {
  isLeftArrowPressed = true;
}

function isVirtualRightButtonPressed() {
  isRightArrowPressed = true;
}

function stopMovement() {
  isLeftArrowPressed = false;
  isRightArrowPressed = false;
}

document.getElementsByClassName("leftButtonVirtual")[0].addEventListener("touchstart", 
    isVirtualLeftButtonPressed);
document.getElementsByClassName("rightButtonVirtual")[0].addEventListener("touchstart", 
    isVirtualRightButtonPressed);

document.getElementsByClassName("leftButtonVirtual")[0].addEventListener("touchend", stopMovement);
document.getElementsByClassName("rightButtonVirtual")[0].addEventListener("touchend", stopMovement);

function movePaddle() {
  if (isRightArrowPressed && paddle.xPosition + paddle.width < canvas.width) {
    paddle.xPosition += paddle.dx;
  } else if (isLeftArrowPressed && paddle.xPosition > 0) {
    paddle.xPosition -= paddle.dx;
  }
}

// ------------------------- The ball ------------------------- //
// Overwriting the x and y position of the ball
function drawBall() {
  ctx.beginPath();

  ctx.arc(ball.xPosition, ball.yPosition, ball.radius, 0, Math.PI * 2);
  ctx.strokeStyle = ball.border;
  ctx.stroke();
  ctx.fillStyle = ball.color;
  ctx.fill();

  ctx.closePath();
}

function moveBall() {
  ball.xPosition += ball.dx;
  ball.yPosition += ball.dy;
}

function resetBall() {
  ball.xPosition = canvas.width / 2;
  ball.yPosition = paddle.yPosition - ballRadius;
  ball.dx = 5 * (Math.random() * 2 - 1);
  ball.dy = -5;
}

// ---------------- Bricks -------------------- //
/*
    functions that create an array of a bricks, then draw the bricks on the canvas.
    The bricks with status = true show up, this is later used in collision 
    detection to count your points.
*/
let bricks = [];

function createBricks() {
  for (let r = 0; r < brick.row; r += 1) {
    bricks[r] = [];
    for (let c = 0; c < brick.column; c += 1) {
      bricks[r][c] = {
        x: c * (brick.width + brick.offsetLeft) + brick.offsetLeft,
        y: r * (brick.height + brick.offsetTop) + brick.offsetTop + brick
          .marginTop,
        status: true,
      };
    }
  }
}

createBricks();

function drawBricks() {
  for (let r = 0; r < brick.row; r += 1) {
    for (let c = 0; c < brick.column; c += 1) {
      const b = bricks[r][c];
      if (b.status) {
        ctx.beginPath();
        renderRoundedPill(b.x, b.y, brick.width, brick.height, 7, brick
          .fillColor, brick.borderColor);
        ctx.stroke();
      }
    }
  }
}

// ---------------- Collisions ---------------- //
// Wall bounce //
function wallCollision() {
  if (ball.xPosition + ball.radius > canvas.width || ball.xPosition - ball
    .radius < 0) {
    ball.dx = -ball.dx;
  }

  if (ball.yPosition - ball.radius < 0) {
    ball.dy = -ball.dy;
  }

  if (ball.yPosition + ball.radius > canvas.height) {
    lives -= 1;
    scoreUnit -= 1;
    resetBall();
  }

  if (lives === 0) {
    isGameOver();
  }
}

function paddleCollision() {
  if (ball.yPosition > paddle.yPosition && ball.yPosition < paddle.yPosition
    + paddle.height
    && ball.xPosition > paddle.xPosition && ball.xPosition < paddle.xPosition
    + paddle.width) {
    let collidePoint = ball.xPosition - (paddle.xPosition + paddle.width / 2);
    collidePoint /= (paddle.width / 2);

    const angle = collidePoint * (Math.PI / 3);
    ball.dx = ball.speed * Math.sin(angle);
    ball.dy = -ball.speed * Math.cos(angle);
    // this math in this collision was taken from the tutorial by Code Explained in this video https://www.youtube.com/watch?v=FyZ4_T0GZ1U
  }
}

// brick collision //
function ballCollision() {
  for (let r = 0; r < brick.row; r += 1) {
    for (let c = 0; c < brick.column; c += 1) {
      const b = bricks[r][c];
      if (b.status) {
        if (ball.xPosition + ball.radius > b.x && ball.xPosition - ball.radius
          < b.x + brick.width
          && ball.yPosition + ball.radius > b.y && ball.yPosition - ball.radius < b
          .y + brick.height) {
          b.status = false;
          ball.dy = -ball.dy;
          score += scoreUnit;
        }
      }
    }
  }
}

// pause game //
/*
    The following section is the pauses the game and shows the pause modal
*/
function pausePlay() {
  if (!isGamePaused) {
    isGamePaused = true;
    document.getElementsByClassName('gamePaused')[0].style.display = 'block';
  } else if (isGamePaused) {
    isGamePaused = false;
    document.getElementsByClassName('gamePaused')[0].style.display = 'none';
  }
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode === 27) {
    pausePlay();
  }
});

// ---------------- Initialising -------------------- //
// This function draws all the shapes on the canvas //
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  drawStats();
}

// This function updates the canvas and makes the ball and paddle able to move //
function update() {
  movePaddle();
  moveBall();
  wallCollision();
  paddleCollision();
  ballCollision();
  levelUp();
}
// The function that runs the game //
function game() {
  draw();
  if (!isGamePaused) {
    update();
  }


  if (!gameLost) {
    requestAnimationFrame(game);
  }
}

game();