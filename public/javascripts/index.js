import { Background } from './background';
import { Cell } from './cell';
import { InputHandler } from './input';

const axios = require('axios');

document.addEventListener('DOMContentLoaded', () => {

    let isbn = '0201558025';
    axios.get(`/books/${isbn}`)
    .then((response) => {
        console.log(response); 
    })
    .catch(function (error) {
        console.log(error);
    });

    let query = "grace hopper";
    axios.get(`/search?string=${query}`)
    .then((response) => {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
    
})

// Disable arrow scrolling
// Source : https://stackoverflow.com/a/8916697/7974948
window.addEventListener("keydown", function (e) {
    if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


window.onload = function() {
    const canvas = this.document.getElementById('game-canvas')
    let ctx = canvas.getContext('2d')
    
    const GAME_HEIGHT = 500
    ctx.clearRect(0, 0, GAME_HEIGHT, GAME_HEIGHT)

    const padding = 10
    const CELL_HEIGHT = (GAME_HEIGHT / 4) - padding

    new Background(ctx, GAME_HEIGHT, CELL_HEIGHT, padding)
    const cell = new Cell      (ctx, GAME_HEIGHT, CELL_HEIGHT, padding)
    new InputHandler(cell)
    
    let lastTime = 0;
    function gameLoop(timeStamp) {
        // new Background(ctx, GAME_HEIGHT, CELL_HEIGHT, padding)
        let deltaTime = timeStamp - lastTime
        lastTime = timeStamp
        // ctx.clearRect(0, 0, GAME_HEIGHT, GAME_HEIGHT)
        cell.update(deltaTime)
        cell.draw(ctx)

        requestAnimationFrame(gameLoop)
    }

    gameLoop()
}