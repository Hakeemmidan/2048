import { Game } from './game';


document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('game-canvas')
    let ctx = canvas.getContext('2d')

    const currentScoreCanvas = document.getElementById('current-score-value-canvas')
    const currentScoreCtx = currentScoreCanvas.getContext('2d')

    const bestScoreCanvas = document.getElementById('best-score-value-canvas')
    const bestScoreCtx = bestScoreCanvas.getContext('2d')

    
    const padding = 10
    const GAME_HEIGHT = 500
    const CELL_HEIGHT = (GAME_HEIGHT / 4) - padding
    ctx.clearRect(0, 0, GAME_HEIGHT, GAME_HEIGHT)
    
    let game = new Game(GAME_HEIGHT, CELL_HEIGHT, padding)
    game.start()
    game.addCell()

    document.getElementById('new-game-button').addEventListener('click', () => {
        ctx.clearRect(0, 0, GAME_HEIGHT, GAME_HEIGHT)
        currentScoreCtx.clearRect(0, 0, 65, 50)
        bestScoreCtx.clearRect(0, 0, 80, 50)
        game.currentScore = 0
        game.gameMovingObjects = []
        game.gameOverBool = false
        game.start()
        game.addCell()
        gameLoop()
    })

    // Disable arrow key scrolling
    // Source : https://stackoverflow.com/a/8916697/7974948
    document.addEventListener("keydown", function (e) {
        if (e.repeat) return
        if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            game.addCell();
        }
    }, false);

    // Add cell on-click of AWSD as well
    document.addEventListener("keydown", function (e) {
        if ([87, 65, 83, 68].indexOf(e.keyCode) > -1) {
            if (e.repeat) return
            game.addCell();
        }
    }, false);
    
    let lastTime = 0;
    function gameLoop(timeStamp) {
        let deltaTime = timeStamp - lastTime
        lastTime = timeStamp
        currentScoreCtx.clearRect(0, 0, 65, 50)
        bestScoreCtx.clearRect(0, 0, 80, 50)
        ctx.clearRect(0, 0, GAME_HEIGHT, GAME_HEIGHT)
    
        game.update(deltaTime)
        game.draw(ctx, currentScoreCtx, bestScoreCtx)
        const myReq = requestAnimationFrame(gameLoop)

        if (game.checkGameOver()) {
            cancelAnimationFrame(myReq)
            ctx.fillStyle = '#000000'
            ctx.globalAlpha = 0.85
            ctx.fillRect(0, 0, GAME_HEIGHT - 10, GAME_HEIGHT - 10)
            ctx.font = '50px sans-serif'
            ctx.fillStyle = '#ffffff'
            ctx.fillText('Game over', GAME_HEIGHT / 4, GAME_HEIGHT / 2)
        }
    }

    gameLoop()
})