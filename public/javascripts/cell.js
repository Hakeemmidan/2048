export class Cell {
    constructor(game, location) {
        this.cellHeight = game.cellHeight
        this.gameHeight = game.gameHeight
        this.padding = game.padding
        this.position = {
            x: location[0],
            y: location[1]
        }
        this.maxSpeed = 40
        this.speed = 0
        this.movementAxis = 'x'
    }

    draw(ctx) {
        ctx.fillStyle = 'pink'
        ctx.fillRect(this.position.x, this.position.y, this.cellHeight, this.cellHeight)
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
             this.speed = 0
             return true
         }
    }

    update(deltaTime) {
        if (!deltaTime) return
        this.position[this.movementAxis] += this.speed
        if (this.position.x < 0) {
            this.position.x = 0
        } else if (this.position.x > this.gameHeight - this.cellHeight - this.padding ) {
            this.position.x = this.gameHeight - this.cellHeight - this.padding
        } else if (this.position.y < 0) {
            this.position.y = 0
        } else if (this.position.y > this.gameHeight - this.cellHeight - this.padding) {
            this.position.y = this.gameHeight - this.cellHeight - this.padding
        }
    }

    moveRight() {
        this.speed = this.maxSpeed
        this.movementAxis = 'x'
    }

    moveLeft() {
        this.speed = -this.maxSpeed
        this.movementAxis = 'x'
    }

    moveUp() {
        this.speed = -this.maxSpeed // Because canvas axis go from the top left of screen
        this.movementAxis = 'y'
    }

    moveDown() {
        this.speed = this.maxSpeed
        this.movementAxis = 'y'
    }
}