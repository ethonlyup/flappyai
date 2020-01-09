var verticalVelocity = 0;
var gravity = 0.3;
var isJumping = false;
var characterGround = 600;

export default class Bird {
  
  constructor (gameWidth, gameHeight) {
    this.width = 75;
    this.height = 50;

    this.position = {

      x: gameWidth - this.width - (790 - this.width),

      y: gameHeight / 2 - this.height / 2

    };
  }

  draw(ctx) {
    ctx.fillStyle = '#0000FF';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(dt) {
    if(!dt) return;
    this.position.x += 5/dt;
    verticalVelocity += gravity;
    this.position.y += verticalVelocity;
    if (this.position.y > characterGround - this.height) {
        this.position.y = characterGround - this.height;
        verticalVelocity = 0;
    }
  }
  
  jump() {
      verticalVelocity = -10;
  }
}