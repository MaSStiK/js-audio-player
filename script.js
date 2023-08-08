const audio = document.querySelector(".audio")
const play = document.querySelector(".play")
const progressContainer = document.querySelector(".progress-container")
const progressBar = document.querySelector(".progress-bar")

let isStop = true
audio.volume = 0.2


play.addEventListener("click", () => {
    if (isStop) {
        audio.play()
        isStop = !isStop
        play.innerHTML = "| |"
    } else {
        audio.pause()
        isStop = !isStop
        play.innerHTML = "▶"
    }
})


audio.addEventListener("timeupdate", (event) => {
    progressBar.style.width  = (event.target.currentTime / event.target.duration) * 100+ "%"
})


progressContainer.addEventListener("click", (event) => {
    let width = progressContainer.clientWidth
    let clickX = event.offsetX
    let duration = audio.duration

    audio.currentTime = (clickX / width) * duration
})