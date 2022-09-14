import Ball from './Ball.js'
import Paddle from './Paddle.js'

const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const ball = new Ball(document.getElementById("ball"))

let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        // ball.update(delta)
        computerPaddle.update(delta, ball.y)

        if (isLose()) {
            console.log("lose")
        }
    }

    lastTime = time
    window.requestAnimationFrame(update)
}

function isLose() {
    const rect = ball.rect()
    return rect.right >= window.innerWidth|| rect.left <= 0
}

document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)