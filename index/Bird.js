export default class Bird {
  constructor (gameWidth, gameHeight) {
    this.width = 150;
    this.height = 100;

    this.position = {

      x: gameWidth - this.width - 10,

      y: gameHeight / 2 - this.height / 2

    };
  }

  draw(ctx) {
    ctx.fillStyle = '#0000FF';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
