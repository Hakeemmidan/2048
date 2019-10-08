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
        this.currentScore = 0
        this.bestScore = 0
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

    // Source : https://gist.github.com/gordonbrander/2230317
    generateCellId() {
    return '_' + Math.random().toString(36).substr(2, 9);
    };

    // Inspired by : https://www.w3schools.com/js/js_cookies.asp
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays));
        document.cookie = cname + "=" + cvalue;
    }

    getBestScoreFromCookie() {
        this.bestScore = document.cookie.split('=')[0] === 'bestScore' ? document.cookie.split('=')[1] : 0
    }

    calculateCurrentScore() {
        this.currentScore = 0
        this.gameMovingObjects.forEach( cell => {
            this.currentScore += cell.value
        })
    }

    start() {
        this.background = new Background(this)
        this.gameStaticObjects.push(this.background)
    }

    // VVVVVVVVVV adding, deleting, and merging cells END VVVVVVVVVV //
    generateRandomLocation() {
        const yesCellLocations = this.gameMovingObjects.map(cell => Object.values(cell.position))
        const noCellLocations = this.allLocations.filter(loc => !JSON.stringify(yesCellLocations).includes(JSON.stringify(loc)))
        // Used JSON.stringify b/c JS arrays don't use Arraay#inclues as expected
        let randomLocation = noCellLocations[parseInt(Math.random() * noCellLocations.length)]
        return randomLocation
    }

    addCell() {
        const randomValueArr = [2, 4]
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
    // ^^^^^^^^^^ adding, deleting, and merging cells END ^^^^^^^^^^ //
// ---------------------------------------------------------------------------------------- //
    // VVVVVVVVVV draw and update START VVVVVVVVVV //
    update(deltaTime) {
        if (this.checkGameOver()) {
            return 'game over'
        }

        for (let i = 0; i < this.gameMovingObjects.length; i++) {
            const object1 = this.gameMovingObjects[i]
            for (let j = 0; j < this.gameMovingObjects.length; j++) {
                if (this.gameMovingObjects[i] === undefined || this.gameMovingObjects[j] === undefined) {
                    continue                    
                }
                if (!((this.gameMovingObjects[i].id) === this.gameMovingObjects[j].id)) {
                    const object2 = this.gameMovingObjects[j]
                    object1.checkCollusion(object2)
                }
            }
        }

        if (this.currentScore > this.bestScore) {
            this.setCookie('bestScore', this.currentScore, 30)
        }

        this.gameMovingObjects.forEach(object => object.update(deltaTime))
    }

    draw(ctx, currentScoreCtx, bestScoreCtx) {
        currentScoreCtx.fillStyle = '#1876b5'
        currentScoreCtx.fillRect(0, 0, 50, 50)
        currentScoreCtx.font = '22px sans-serif'
        currentScoreCtx.fillStyle = '#ffffff'
        this.calculateCurrentScore()

        if (this.currentScore < 10) {
            currentScoreCtx.fillText(String(this.currentScore), 19, 20)
        } else if (this.currentScore >= 10 && this.currentScore < 100) {
            currentScoreCtx.fillText(String(this.currentScore), 12, 20)
        } else if (this.currentScore >= 100 && this.currentScore < 1000) {
            currentScoreCtx.fillText(String(this.currentScore), 7, 20)
        } else if (this.currentScore >= 1000) {
            currentScoreCtx.fillText(String(this.currentScore), 0, 20)
        }

        bestScoreCtx.fillStyle = '#1876b5'
        bestScoreCtx.fillRect(0, 0, 80, 50)
        bestScoreCtx.font = '22px sans-serif'
        bestScoreCtx.fillStyle = '#ffffff'
        this.getBestScoreFromCookie()

        if (this.bestScore < 10) {
            bestScoreCtx.fillText(String(this.bestScore), 27, 20)
        } else if (this.bestScore >= 10 && this.bestScore < 100) {
            bestScoreCtx.fillText(String(this.bestScore), 20, 20)
        } else if (this.bestScore >= 100 && this.bestScore < 1000) {
            bestScoreCtx.fillText(String(this.bestScore), 15, 20)
        } else if (this.bestScore >= 1000) {
            bestScoreCtx.fillText(String(this.bestScore), 9.5, 20)
        }

        this.gameStaticObjects.forEach( object => object.draw(ctx) )
        this.gameMovingObjects.forEach( object => object.draw(ctx) )
    }

    // ^^^^^^^^^^ draw and update END ^^^^^^^^^^ //
    // ---------------------------------------------------------------------------------------- //
    // VVVVVVVVVV check game over START VVVVVVVVVV //
    // Gets a row at a certain y position
    getRow(rowYPos) {
        const resultRows = []
        this.gameMovingObjects.forEach(cell => {
            if (cell.position.y === rowYPos) {
                resultRows.push(cell)
            }
        })
        return resultRows
    }

    // Gets a col at a certain x position
    getColumn(colXPos) {
        const resultCols = []
        this.gameMovingObjects.forEach(cell => {
            if (cell.position.x === colXPos) {
                resultCols.push(cell)
            }
        })
        return resultCols
    }

    hasConsecutiveEqualValues(cells) {
        let resultBool = false
        cells.forEach((cell, idx) => {
            if (cells[idx + 1]) {
                if (cell.value === cells[idx + 1].value) {
                    resultBool = true
                }
            }
        })
        return resultBool
    }


    getAllColumns() {
        const columns = []
        for (let i = 0; i <= 375; i += 125) {
            columns.push(this.getColumn(i))
        }
        return columns
    }

    getAllRows() {
        const rows = []
        for (let i = 0; i <= 375; i += 125) {
            rows.push(this.getRow(i))
        }
        return rows
    }

    checkGameOver() {
        let rows = this.getAllRows()
        let columns = this.getAllColumns()
        let resultBool = true

        if (this.gameMovingObjects.length < 16) {
            return false
        }

        rows.forEach(row => {
            row.sort((cell1, cell2) => cell1.position.x - cell2.position.x)
            if (this.hasConsecutiveEqualValues(row)) {
                resultBool = false
            }
        })

        columns.forEach(col => {
            col.sort((cell1, cell2) => cell1.position.y - cell2.position.y)
            if (this.hasConsecutiveEqualValues(col)) {
                resultBool = false
            }
        })

        if (resultBool) console.log('game over')
        return resultBool
    }
    // ^^^^^^^^^^ check game over END ^^^^^^^^^^ //
}