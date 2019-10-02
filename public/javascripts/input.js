export class InputHandler {
    constructor(cell) {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 38:
                case 87:
                    console.log('up')
                    break;
                case 39:
                case 68:
                    cell.moveRight()
                    console.log('right')
                    break;
                case 40:
                case 83:
                    console.log('down')
                    break;
                case 37:
                case 65:
                    console.log('left')
                    break;
                default:
                    break;
            }
        })
    }
}