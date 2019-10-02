export class Cell {
    constructor(ctx, gameHeight, cellHeight, padding) {
        this.padding = padding
        this.cellHeight = cellHeight
        this.gameHeight = gameHeight

        this.draw = this.draw.bind(this)
        this.draw(ctx)
    }

    draw(ctx) {
        const padding = this.padding
        const gridLimit = this.gameHeight + this.cellHeight

        // const increment = this.cellHeight + padding

        // for (let col = 0; col < gridLimit; col += increment) {
            // for (let row = 0; row < gridLimit; row += increment) {
                ctx.beginPath()
                ctx.rect(0, 0, this.cellHeight, this.cellHeight)
                ctx.fillStyle = 'pink'
                ctx.fill()
            // }
        // }
    }
}