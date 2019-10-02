import { Background } from './background';
import { Cell } from './cell';

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
    const canvas = this.document.getElementById('game-canvas')
    let ctx = canvas.getContext('2d')
    // ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

    const GAME_HEIGHT = 500
    const padding = 10
    const CELL_HEIGHT = (GAME_HEIGHT / 4) - padding

    new Background(ctx, GAME_HEIGHT, CELL_HEIGHT, padding)
    new Cell(ctx, GAME_HEIGHT, CELL_HEIGHT, padding)
}