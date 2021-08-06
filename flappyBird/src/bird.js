const GRAVITY = 0.5;
export default class Bird {
    constructor(dimensions) {
        this.velocity = 0;
        this.dimensions = dimensions;

        this.y = 320;
        this.x = 160;
        this.gravity = 0.5;
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 40, 30);
    }


    animate(ctx) {
        this.move();
        this.drawBird(ctx);
    }

    move() {
        this.velocity += this.y;
        this.velocity += GRAVITY;
    }


    flap() {
        this.velocity = -8;
    }


}