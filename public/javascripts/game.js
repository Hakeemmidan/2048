import { Background } from './background';
import { Cell } from './cell';
import { InputHandler } from './input';

export class Game {
    constructor(gameHeight, cellHeight, padding) {
        this.cellHeight = cellHeight
        this.gameHeight = gameHeight
        this.padding = padding
        
        this.gameStaticObjects = []
        this.gameMovingObjects = []
    }


    start() {
        this.background = new Background(this)
        this.gameStaticObjects.push(this.background)
    }

    addCell() {
        let newCell = new Cell(this)
        this.gameMovingObjects.push(newCell)
        new InputHandler(newCell)
    }
    
    update(deltaTime) {
        this.gameMovingObjects.forEach( object => object.update(deltaTime))
    }

    draw(ctx) {
        this.gameStaticObjects.forEach( object => object.draw(ctx))
        this.gameMovingObjects.forEach(object => object.draw(ctx))
    }
}