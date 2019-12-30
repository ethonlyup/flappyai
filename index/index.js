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
    if(bird.position.y >= GAME_HEIGHT - bird.height ) {
        
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        bird.position.x = GAME_WIDTH - bird.width - (790 - bird.width);
        bird.position.y = GAME_HEIGHT / 2 - bird.height / 2;
        bird.update(dt);
        bird.draw(ctx);
        timeStamp = 0;
        lastTime = 0;
        dt = 0;
        
        gameLoop();
    }
    else {
    requestAnimationFrame(gameLoop);
    }
}

gameLoop();
