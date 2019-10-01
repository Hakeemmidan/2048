export class Background {
    constructor(ctx, gameWidth, gameHeight) {
        this.gameWidth = gameWidth
        this.gameHeight = gameHeight
        this.ctx = ctx

        this.draw = this.draw.bind(this)
        this.draw()   
    }

    draw() {
        const CELL_HEIGHT = this.gameWidth / 4
        const CELL_WIDTH = CELL_HEIGHT // They cell should be a square so they should be the same

        for (let col = 0; col < CELL_WIDTH * 4; col+= CELL_WIDTH) {
            for (let row = 0; row < CELL_WIDTH * 4; row += CELL_WIDTH) {
                console.log(col)
                console.log(row)
                this.ctx.beginPath()
                this.ctx.rect(col, row, CELL_HEIGHT, CELL_WIDTH)
                this.ctx.fillStyle = 'black'
                this.ctx.fill()
            }
        }
    }
}