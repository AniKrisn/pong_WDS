import Ball from './Ball.js'

const ball = new Ball(document.getElementById("ball"))

function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
    }


    
    window.requestAnimationFrame(update)
}
