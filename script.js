import Ball from './Ball.js'
import Paddle from './Paddle.js'

const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const ball = new Ball(document.getElementById("ball"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")

let lastTime
function update(time) {

    if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
        computerPaddle.update(delta, ball.y)

        if (isLose()) handleLose()
        if (isStart()) handleStart()
    }

    lastTime = time
    window.requestAnimationFrame(update)
}

function isStart() {
    return parseInt(playerScoreElem.textContent) == 0 && parseInt(computerScoreElem.textContent) == 0
}

function handleStart() {
    // need to add alert that says "first to 5"
}

function isLose() {
    const rect = ball.rect()
    return rect.right >= window.innerWidth|| rect.left <= 0
}

function handleLose() {
    const rect = ball.rect()
    if (rect.right >= window.innerWidth) {
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    } else {
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    }
    ball.reset()
    computerPaddle.reset()

    if (playerScoreElem.textContent == 5) {
        alert("win")
    } else if (computerScoreElem.textContent == 5) {
        alert("lose")
    }

}

document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)