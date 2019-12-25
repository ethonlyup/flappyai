import Bird from 'Bird.js';

var canvas = document.getElementById("gameScreen");
var ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let bird = new Bird(GAME_WIDTH, GAME_HEIGHT);

bird.draw(ctx);
