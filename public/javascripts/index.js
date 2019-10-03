import { Game } from './game';

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


window.onload = function() {
    // Disable arrow key scrolling
    // Source : https://stackoverflow.com/a/8916697/7974948
    document.addEventListener("keydown", function (e) {
        if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);

    const canvas = this.document.getElementById('game-canvas')
    let ctx = canvas.getContext('2d')
    
    const padding = 10
    const GAME_HEIGHT = 500
    const CELL_HEIGHT = (GAME_HEIGHT / 4) - padding
    ctx.clearRect(0, 0, GAME_HEIGHT, GAME_HEIGHT)

    let game = new Game(GAME_HEIGHT, CELL_HEIGHT, padding)
    game.start()
    
    let lastTime = 0;
    function gameLoop(timeStamp) {
        let deltaTime = timeStamp - lastTime
        lastTime = timeStamp
        ctx.clearRect(0, 0, GAME_HEIGHT, GAME_HEIGHT)
        
        game.update(deltaTime)
        game.draw(ctx)

        requestAnimationFrame(gameLoop)
    }

    gameLoop()
}