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
        const yesCellLocations = this.gameMovingObjects.map( cell => Object.values(cell.position))
        const noCellLocations = this.allLocations.filter( loc => !JSON.stringify(yesCellLocations).includes(JSON.stringify(loc))) 
        // Used JSON.stringify b/c JS arrays don't use Arraay#inclues as expected
        let randomLocation = noCellLocations[parseInt(Math.random() * noCellLocations.length)]
        return randomLocation
    }

    start() {
        this.background = new Background(this)
        this.gameStaticObjects.push(this.background)
    }

    addCell() {
        const that = this
        setTimeout(() => {
            let randomLocation = that.generateRandomLocation()
            let newCell = new Cell(that, randomLocation)
            that.gameMovingObjects.push(newCell)
            new InputHandler(newCell)
        }, 100);
    }
    
    update(deltaTime) {
        for (let i = 0; i < this.gameMovingObjects.length; i++) {
            const object1 = this.gameMovingObjects[i]
            for (let j = 0; j < this.gameMovingObjects.length; j++) {
                if (!(JSON.stringify(this.gameMovingObjects[i].position) === JSON.stringify(this.gameMovingObjects[j].position))) {
                    const object2 = this.gameMovingObjects[j]
                    object1.checkCollusion(object2)
                }
            }
        }
        this.gameMovingObjects.forEach(object => object.update(deltaTime))
    }

    draw(ctx) {
        this.gameStaticObjects.forEach( object => object.draw(ctx) )
        this.gameMovingObjects.forEach( object => object.draw(ctx) )
    }

    // checkLose() {
    //     if (this.generateRandomLocation().length === 0) {
    //         return true
    //     }
    //     return false
    // }

    // checkGameOver() {
    //     if (this.checkLose()) {
    //         console.log('Game over. lose')
    //     }
    // }
}