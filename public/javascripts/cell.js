export class Cell {
    constructor(ctx, gameHeight, cellHeight, padding) {
        this.padding = padding
        this.cellHeight = cellHeight
        this.gameHeight = gameHeight

        this.draw = this.draw.bind(this)
        this.generateAllLocations = this.generateAllLocations.bind(this)
        
        this.allLocations = this.generateAllLocations()
        this.draw(ctx)
    }

    draw(ctx) {
        const randomLocation = this.allLocations[parseInt(Math.random() * this.allLocations.length)]
        ctx.beginPath()
        ctx.rect(randomLocation[0], randomLocation[1], this.cellHeight, this.cellHeight)
        ctx.fillStyle = 'pink'
        ctx.fill()
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
}