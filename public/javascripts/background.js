export class Background {
    constructor(game) {
        this.cellHeight = game.cellHeight
        this.gameHeight = game.gameHeight
        this.padding = game.padding
    }

    draw(ctx) {
        const gridLimit = this.gameHeight
        const increment = this.cellHeight + this.padding

        for (let col = 0; col <= gridLimit; col += increment) {
            for (let row = 0; row <= gridLimit; row += increment) {
                    ctx.beginPath()
                    ctx.rect(row, col, this.cellHeight, this.cellHeight)
                    ctx.fillStyle = '#1876b5'
                    ctx.fill()
            }
        }
    }

}