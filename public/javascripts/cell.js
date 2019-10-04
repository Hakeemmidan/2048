export class Cell {
    constructor(game, location) {
        this.cellHeight = game.cellHeight
        this.gameHeight = game.gameHeight
        this.padding = game.padding
        this.position = {
            x: location[0],
            y: location[1]
        }
        this.maxSpeed = 70
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
        if (this.rightColided) return
        // objective : if there is a cell right next to you then do not move
        // methhod : get the array of yesCellLocations and check if the position that the cell plans to move to already
        // has a cell do not move (v1)
            // v2 : check if there is an empty space to the right of the cell that you are trying to over take its place
            // if there is, then move both
        this.movementAxis = 'x'
        this.speed = this.maxSpeed
    }

    moveLeft() {
        if (this.speed != 0) return
        if (this.leftColided) return
        this.movementAxis = 'x'
        this.speed = -this.maxSpeed
    }

    moveUp() {
        if (this.speed != 0) return
        if (this.topColided) return
        this.movementAxis = 'y'
        this.speed = -this.maxSpeed // Because canvas axis go from the top left of screen
    }

    moveDown() {
        if (this.speed != 0) return
        if (this.bottomColided) return
        this.movementAxis = 'y'
        this.speed = this.maxSpeed
    }
}