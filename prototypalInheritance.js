Function.prototype.inherits = function (parent) { // why is this faster than the one liner (child.prototype.__proto__ = parent.prototype)
    const Surrogate = function(){};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this
};


function MovingObject () {}

MovingObject.prototype.moves = function () {
    console.log(`${this.constructor.name} is moving!`);
}

function Ship () {}
Ship.inherits(MovingObject);

Ship.prototype.fire = function () {
    let that = this
    console.log(`${that.constructor.name} is firing`);
}


function Asteroid () {}
Asteroid.inherits(MovingObject);

Asteroid.prototype.nothing = function () {
    console.log(`${this.constructor.name} is doing nothing`);
}

let ship = new Ship()
let asteroid = new Asteroid()
ship.fire()
asteroid.nothing()
ship.moves()
asteroid.moves()
// asteroid.fire()