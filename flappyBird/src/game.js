import Level from './level';
import Bird from './bird';
export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    
    // this.ctx.fillStyle = "red";
    // this.ctx.fillRect(0, 0, 500, 500);
    this.restart();

  }

  animate () {
    this.level.animate(this.ctx);
    this.bird.animate(this.ctx);
  }


  restart (ctx) {
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.animate();
  }


}




// this.canvas = document.getElementById("bird-game");
// this.canvas.height = 480;
// this.canvas.width = 640;

// this.ctx = canvas.getContext("2d");
// this.ctx.fillStyle = "red";
// this.ctx.fillRect(0, 0, 500, 500);