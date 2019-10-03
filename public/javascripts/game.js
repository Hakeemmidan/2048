import { Background } from './background';
import { Cell } from './cell';
import { InputHandler } from './input';

export class Game {
    constructor(gameHeight, cellHeight, padding) {
        this.cellHeight = cellHeight
        this.gameHeight = gameHeight
        this.padding = padding
    }

    start() {
        this.background = new Background(this)
        this.cell = new Cell(this)
        new InputHandler(this.cell)
        this.gameObjects = [this.background, this.cell]
    }
    
    update(deltaTime) {
        this.gameObjects.forEach( object => object.update(deltaTime) )
    }

    draw(ctx) {
        this.gameObjects.forEach( object => object.draw(ctx) )
    }
}