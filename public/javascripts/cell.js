export class Cell {
    constructor(ctx, gameWidth, padding) {
        this.padding = padding
        this.cellHeight = gameWidth / 4 - padding
        this.height = 30
        this.gameWidth = gameWidth
        this.position = {
            // x: gameWidth / 2 - this.width / 2, // Put the paddle in the middle of the screen
            // y: gameHeight - this.height - 20 // Lift the paddle from the bottom of the screen
        }
        this.maxSpeed = 5
        this.speed = 0
        this.draw = this.draw.bind(this)
        this.draw(ctx)
    }

    draw(ctx) {
        const padding = this.padding
        const CELL_HEIGHT = (this.gameWidth / 4) - padding
        const gridLimit = this.gameWidth + CELL_HEIGHT

        const increment = CELL_HEIGHT + padding

        // for (let col = 0; col < gridLimit; col += increment) {
            // for (let row = 0; row < gridLimit; row += increment) {
                ctx.beginPath()
                ctx.rect(0, 0, CELL_HEIGHT, CELL_HEIGHT)
                ctx.fillStyle = 'pink'
                ctx.fill()
            // }
        // }
    }
}