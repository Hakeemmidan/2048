export class Cell {
    constructor(game, location, value) {
        this.cellHeight = game.cellHeight
        this.gameHeight = game.gameHeight
        this.padding = game.padding
        this.position = {
            x: location[0],
            y: location[1]
        }
        this.value = value
        this.maxSpeed = 70
        this.speed = 0
        this.movementAxis = 'x'
        this.backgroundColors = {
            2: '#a7d3fa',
            4: '#82c2fa',
            8: '#ffa500',
            16: '#ff8400',
            32: '#e36200',
            64: '#bf0000'
        }
        this.fontColors = {
            2: '#1876b5',
            4: '#1876b5',
            8: '#ffffff',
            16: '#ffffff',
            32: '#ffffff',
            64: '#ffffff'
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.backgroundColors[this.value]
        ctx.fillRect(this.position.x, this.position.y, this.cellHeight, this.cellHeight)
        ctx.font = '60px sans-serif'
        ctx.fillStyle = this.fontColors[this.value]
        ctx.fillText(String(this.value), this.position.x + 40, this.position.y + 80)
    }
    
    get top() { return this.position.y }
    get right() { return this.position.x + this.cellHeight }
    get bottom() { return this.position.y + this.cellHeight }
    get left() { return this.position.x }

    checkCollusion(cell) {
        if (
            this.bottom < cell.top
            || this.left > cell.right
            || this.top > cell.bottom
            || this.right < cell.left) {
                this.topColided = false
                this.bottomColided = false
                this.rightColided = false
                this.leftColided = false
            return false
        } else {
            if ((this.speed < 0) && this.movementAxis === 'y') {

                this.topColided = true
                console.log('top to bottom collide')
                this.speed = 0
                this.position['y'] = cell.position.y + this.padding + this.cellHeight
            }
            else if (this.speed > 0 && this.movementAxis === 'y') {

                this.bottomColided = true
                console.log('bottom to top collide')
                this.speed = 0
                this.position['y'] = cell.position.y - this.padding - this.cellHeight
            }
            else if (this.speed > 0 && this.movementAxis === 'x') {

                this.rightColided = true
                console.log('left to right collide')
                this.speed = 0
                this.position['x'] = cell.position.x - this.padding - this.cellHeight
            }
            else if (this.speed < 0 && this.movementAxis === 'x') {

                this.leftColided = true
                console.log('right to left collide')
                this.speed = 0
                this.position['x'] = cell.position.x + this.padding + this.cellHeight
            }
            // now check if the other cell is moving and 'this' is not
            else if ((cell.speed < 0) && cell.movementAxis === 'y') {

                cell.topColided = true
                console.log('top to bottom collide')
                cell.speed = 0
                cell.position['y'] = this.position.y + cell.padding + cell.cellHeight
            }
            else if (cell.speed > 0 && cell.movementAxis === 'y') {

                cell.bottomColided = true
                console.log('bottom to top collide')
                cell.speed = 0
                cell.position['y'] = this.position.y - cell.padding - cell.cellHeight
            }
            else if (cell.speed > 0 && cell.movementAxis === 'x') {
                cell.rightColided = true
                console.log('left to right collide')
                cell.speed = 0
                cell.position['x'] = this.position.x - cell.padding - cell.cellHeight
            }
            else if (cell.speed < 0 && cell.movementAxis === 'x') {

                cell.leftColided = true
                console.log('right to left collide')
                cell.speed = 0
                cell.position['x'] = this.position.x + cell.padding + cell.cellHeight
            }
            
            this.isCollided = true
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
        // if (this.rightColided) return
        this.movementAxis = 'x'
        this.speed = this.maxSpeed
    }

    moveLeft() {
        if (this.speed != 0) return
        // if (this.leftColided) return
        this.movementAxis = 'x'
        this.speed = -this.maxSpeed
    }

    moveUp() {
        if (this.speed != 0) return
        // if (this.topColided) return
        this.movementAxis = 'y'
        this.speed = -this.maxSpeed // Because canvas axis go from the top left of screen
    }

    moveDown() {
        if (this.speed != 0) return
        // if (this.bottomColided) return
        this.movementAxis = 'y'
        this.speed = this.maxSpeed
    }
}