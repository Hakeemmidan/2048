import { Background } from './background';
import { Cell } from './cell';
import { InputHandler } from './input';

export class Game {
    constructor(gameHeight, cellHeight, padding) {
        this.gameHeight = gameHeight
        this.cellHeight = cellHeight
        this.padding = padding
    }

    stsrt() {
        this.background = new Background(this.gameHeight, this.cellHeight, this.padding)
        this.cell = new Cell(this.gameHeight, this.cellHeight, this.padding)
        new InputHandler(cell)
        this.gameObjects = [this.background, this.cell]
    }

    
}