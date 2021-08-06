export default class FlappyBird {
  constructor(canvas){
    this.canvas = document.getElementById("bird-game");
    this.canvas.height = 500;
    this.canvas.width = 500;

    this.ctx = canvas.getContext("2d");
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(0, 0, 500, 500);
    // this.ctx.fillStyle = "green";
    // this.ctx.fillRect(0, 0, 10, 10);

    // this.ctx.arc(100, 100, 20, 0, Math.PI, true);
    // this.ctx.strokeStyle = "green";
    // this.ctx.lineWidth = 1;
    // this.ctx.stroke();



    // ctx.fillStyle = "blue";
    // ctx.fill();
    // ctx.beginPath();

    // ctx.arc(200, 200, 50, 0, 2 * Math.PI, true);
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 1;
    // ctx.stroke();

    // ctx.fillStyle = "orange";
    // ctx.fill();
    // ctx.beginPath();
  }
}