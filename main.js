var sceneryFrames = [
    {transform: 'translateY(100%)'},
    {transform: 'translateY(-100%)'},
]

var sceneryTiming = {
    duration: 10000,
    iteration: Infinity,
    playback: -2
}

var background = document.getElementById("space10")

var backgroundMovement = background.animate(sceneryFrames, sceneryTiming)

backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration / 2

setInterval ( function () {

    if (backgroundMovement.playbackRate > 0.4) {
        backgroundMovement.playbackRate *= .9
    }
}, 3000)

var flyFaster = function () {
    backgroundMovement.playbackRate *= 1.1
}

document.addEventListener("click", flyFaster)