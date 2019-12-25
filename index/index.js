//imports
import Bird from '/Bird.js';//importing bird
import InputHandler from '/input.js';//importing the input handler
//end of imports

//canvas statements
var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");
//end of canvas statements

//constant declarations
const GAME_WIDTH = 800;//game width
const GAME_HEIGHT = 600;//game height
//end of constant declarations


let bird = new Bird(GAME_WIDTH, GAME_HEIGHT);

new InputHandler(bird);//handle inputs

let lastTime = 0;

function gameLoop(timeStamp) {
    
    let dt = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    bird.update(dt);
    bird.draw(ctx);
    
    requestAnimationFrame(gameLoop);
}

gameLoop();