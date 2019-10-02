export class Cell {
    constructor(ctx, gameHeight, cellHeight, padding) {
        this.padding = padding
        this.cellHeight = cellHeight
        this.gameHeight = gameHeight
        this.position = {
            x: 0,
            y: 0
        }
        this.maxSpeed = 5
        this.speed = 0

        this.draw = this.draw.bind(this)
        this.generateAllLocations = this.generateAllLocations.bind(this)
        this.generateRandomLocation = this.generateRandomLocation.bind(this)
        this.moveRight = this.moveRight.bind(this)
        this.update = this.update.bind(this)

        this.allLocations = this.generateAllLocations()
        this.generateRandomLocation()
    }

    generateRandomLocation() {
        this.randomLocation = this.allLocations[parseInt(Math.random() * this.allLocations.length)]
        this.position = { x: this.randomLocation[0], y: this.randomLocation[1] }
    }

    draw(ctx) {
        ctx.fillStyle = 'pink'
        ctx.fillRect(this.position.x, this.position.y, this.cellHeight, this.cellHeight)
    }

    update(deltaTime) {
        if (!deltaTime) return
        this.position.x += this.speed
        if (this.position.x < 0) {
            this.position.x = 0
        } else if (this.position.x > this.gameHeight - this.cellHeight - this.padding ) {
            this.position.x = this.gameHeight - this.cellHeight - this.padding
        }
    }

    moveRight() {
        this.speed = this.maxSpeed
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