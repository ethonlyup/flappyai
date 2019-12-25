var verticalVelocity = 0;
var gravity = 9.8;
var isJumping = false;
export default class Bird {
  
  constructor (gameWidth, gameHeight) {
    this.width = 150;
    this.height = 100;

    this.position = {

      x: gameWidth - this.width - (790-this.width),

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
    if (isJumping) {
      yVel += gravity;
      this.position.y += yVel;
          if (this.position.y > characterGround) {
              this.position.y = characterGround;
              yVel = 0;
              isJumping = false;
             }
      }
  }
  
  jump() {
    if(isJumping == false) {
      verticalVelocity = -15;
      isJumping = true;
    }
  }
}
