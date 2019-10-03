export class Background {
    constructor(gameHeight, cellHeight, padding) {
        this.gameHeight = gameHeight
        this.cellHeight = cellHeight
        this.padding = padding

        this.draw = this.draw.bind(this)
    }

    draw(ctx) {
        const gridLimit = this.gameHeight + this.cellHeight
        const increment = this.cellHeight + this.padding

        for (let col = 0; col < gridLimit; col += increment) {
            for (let row = 0; row < gridLimit; row += increment) {
                    ctx.beginPath()
                    ctx.rect(row, col, this.cellHeight, this.cellHeight)
                    ctx.fillStyle = '#1876b5'
                    ctx.fill()
            }
        }
    }
}