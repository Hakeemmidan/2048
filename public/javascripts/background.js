export class Background {
    constructor(ctx, gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.ctx = ctx

        this.draw = this.draw.bind(this)
        this.draw(ctx)   
    }

    draw(ctx) {
        const padding = 10
        const CELL_HEIGHT = (this.gameWidth / 4) - padding
        const CELL_WIDTH = CELL_HEIGHT // The cell should be a square so they should be the same
        const gridLimit = this.gameWidth + CELL_HEIGHT

        const increment = CELL_WIDTH + padding

        for (let col = 0; col < gridLimit; col += increment) {
            for (let row = 0; row < gridLimit; row += increment) {
                    ctx.beginPath()
                    ctx.rect(row, col, CELL_HEIGHT, CELL_WIDTH)
                    ctx.fillStyle = '#1876b5'
                    ctx.fill()
            }
        }
    }
}