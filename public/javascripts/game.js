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

    // source : https://gist.github.com/gordonbrander/2230317
    generateCellId() {
    return '_' + Math.random().toString(36).substr(2, 9);
    }; 

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
        const randomValueArr = [2,4]
        const randomValue = randomValueArr[parseInt(Math.random() * randomValueArr.length)]
        const that = this
        setTimeout(() => {
            let randomLocation = that.generateRandomLocation()
            const id = this.generateCellId()
            let newCell = new Cell(id, that, randomLocation, randomValue)
            that.gameMovingObjects.push(newCell)
            new InputHandler(newCell)
        }, 100);
    }
    
    deleteCellById(id) {
        let unwantedElementIdx = -1
        for (let i = 0; i < this.gameMovingObjects.length; i++) {
            if (this.gameMovingObjects[i].id === id) {
                unwantedElementIdx = i
                break
            }
        }
        if (unwantedElementIdx === -1) return 'Not found'
        this.gameMovingObjects.splice(unwantedElementIdx, 1)
        return 'Deleted!'
    }

    mergeCells(cell1, cell2, location) {
        const id = this.generateCellId()
        const newCell = new Cell(id, this, location, cell1.value + cell2.value)
        this.gameMovingObjects.push(newCell)
        new InputHandler(newCell)
        // Delete old cells
        this.deleteCellById(cell1.id)
        this.deleteCellById(cell2.id)
    }
    
    update(deltaTime) {
        for (let i = 0; i < this.gameMovingObjects.length; i++) {
            const object1 = this.gameMovingObjects[i]
            for (let j = 0; j < this.gameMovingObjects.length; j++) {
                if (!((this.gameMovingObjects[i].id) === this.gameMovingObjects[j].id)) {
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