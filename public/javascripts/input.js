export class InputHandler {
    constructor(cell) {
        document.addEventListener('keydown', (e) => {
            if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                e.preventDefault();
            }
            if (e.repeat) return
            switch (e.keyCode) {
                case 38:
                case 87:
                    cell.moveUp()
                    break;
                case 39:
                case 68:
                    cell.moveRight()
                    break;
                case 40:
                case 83:
                    cell.moveDown()
                    break;
                case 37:
                case 65:
                    cell.moveLeft()
                    break;
                default:
                    break;
            }
        })
    }
}