import { Background } from './background';
import { Cell } from './cell';
import { InputHandler } from './input';

export class Game {
    constructor(gameHeight, cellHeight, padding) {
        this.cellHeight = cellHeight
        this.gameHeight = gameHeight
        this.padding = padding
        
        this.allLocations = this.generateAllLocations()
        this.gameStaticObjects = []
        this.gameMovingObjects = []
    }

    generateAllLocations() {
        // Generates all the locations where a cell can park
        const gridLimit = this.gameHeight + this.cellHeight
        const increment = this.cellHeight + this.padding
        const allLocations = [];

        for (let col = 0; col < gridLimit - increment; col += increment) {
            for (let row = 0; row < gridLimit - increment; row += increment) {
                allLocations.push([row, col])
            }
        }

        return allLocations
    }

    generateRandomLocation() {
        let randomLocation = this.allLocations[parseInt(Math.random() * this.allLocations.length)]
        return randomLocation
    }

    start() {
        this.background = new Background(this)
        this.gameStaticObjects.push(this.background)
    }

    addCell() {
        // We need to make sure that a new cell doesn't appear on top of a new cell

        let randomLocation = this.generateRandomLocation()
        let newCell = new Cell(this, randomLocation)

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