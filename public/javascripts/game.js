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
        this.gameStaticObjects = [ this.background ]
        this.gameMovingObjects = [ this.cell ]
    }
    
    update(deltaTime) {
        this.gameMovingObjects.forEach( object => object.update(deltaTime))
    }

    draw(ctx) {
        this.gameStaticObjects.forEach( object => object.draw(ctx))
        this.gameMovingObjects.forEach(object => object.draw(ctx))
    }
}