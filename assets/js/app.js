//Setting up the canvas 
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// ------ Paddle -------- //
const paddleWidth = 100;
const paddleHeight = 15;
const paddleMarginBottom = 30;



function game() {

    draw();
    update();
    requestAnimationFrame(game);
} 

game();