export class Cell {
    constructor(game, location) {
        this.cellHeight = game.cellHeight
        this.gameHeight = game.gameHeight
        this.padding = game.padding
        this.position = {
            x: location[0],
            y: location[1]
        }
        this.collide = false
        this.maxSpeed = 40
        this.speed = 0
        this.movementAxis = 'x'
        this.colors = ['#9400D3', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000']
        this.generateRandomColor()
    }

    generateRandomColor() {
        this.color = this.colors[parseInt(Math.random() * this.colors.length)]
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.cellHeight, this.cellHeight)
        ctx.globalAlpha = 0.3 // changing the opacity of the rectangle 
    }
    
    get top() { return this.position.y }
    get right() { return this.position.x + this.cellHeight }
    get bottom() { return this.position.y + this.cellHeight }
    get left() { return this.position.x }
    

    checkCollusion(cell) {
        if (
               this.bottom < cell.top
            || this.left   > cell.right
            || this.top    > cell.bottom
            || this.right  < cell.left) {
            return false
         } else {
             this.collide = true
             return true
         }
    }

    update(deltaTime) {
        if (!deltaTime) return
        this.position[this.movementAxis] += this.speed
        if (this.position.x < 0) {
            this.speed = 0
            this.position.x = 0
        } else if (this.position.x > this.gameHeight - this.cellHeight - this.padding ) {
            this.speed = 0
            this.position.x = this.gameHeight - this.cellHeight - this.padding
        } else if (this.position.y < 0) {
            this.speed = 0
            this.position.y = 0
        } else if (this.position.y > this.gameHeight - this.cellHeight - this.padding) {
            this.speed = 0
            this.position.y = this.gameHeight - this.cellHeight - this.padding
        }
    }

    moveRight() {
        if (this.speed != 0) return
        this.speed = this.maxSpeed
        this.movementAxis = 'x'
    }

    moveLeft() {
        if (this.speed != 0) return
        this.speed = -this.maxSpeed
        this.movementAxis = 'x'
    }

    moveUp() {
        if (this.speed != 0) return
        this.speed = -this.maxSpeed // Because canvas axis go from the top left of screen
        this.movementAxis = 'y'
    }

    moveDown() {
        if (this.speed != 0) return
        this.speed = this.maxSpeed
        this.movementAxis = 'y'
    }
}