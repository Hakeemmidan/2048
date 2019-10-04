export class InputHandler {
    constructor(cell) {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 38:
                case 87:
                    if (cell.topColided) return
                    cell.moveUp()
                    break;
                case 39:
                case 68:
                    if (cell.rightColided) return
                    cell.moveRight()
                    break;
                case 40:
                case 83:
                    if (cell.bottomColided) return
                    cell.moveDown()
                    break;
                case 37:
                case 65:
                    if (cell.leftColided) return
                    cell.moveLeft()
                    break;
                default:
                    break;
            }
        })
    }
}