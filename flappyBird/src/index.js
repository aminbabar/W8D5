import FlappyBird from './game';
import Game from './game';

const canvas = document.getElementById('bird-game');

let game = new Game(canvas);
game.restart();


new FlappyBird(canvas);