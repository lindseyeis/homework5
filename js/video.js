// Add js here.

var video = document.getElementById("videoplayer");
var playButton = document.getElementById("play")
var pauseButton = document.getElementById("pause")
var slowerButton = document.getElementById("slower")
var fasterButton = document.getElementById("faster")
var skipButton = document.getElementById("skip")
var muteButton = document.getElementById("mute")
var sliderButton = document.getElementById("slider")
var volumeInput = document.getElementById("volume")

function onLoad() {
    video.preload = "auto"
    video.removeAttribute("autoplay")
    video.removeAttribute("loop")
}
video.addEventListener("load", onLoad())

function playVideo() {
    video.play();
}

playButton.addEventListener("click", playVideo)

function pauseVideo() {
    video.pause();
}

pauseButton.addEventListener("click", pauseVideo)


function slowPlaySpeed() {
    if (video.playbackRate == 0.5){
        alert('Video is at slowest speed!')
    }
    else{
        video.playbackRate = video.playbackRate / 2;
    }
  }

function fastPlaySpeed() {
    if (video.playbackRate == 2){
        alert('Video is at fastest speed!')
    }
    else{
        video.playbackRate = video.playbackRate * 2;
    }
  }

slowerButton.addEventListener("click", slowPlaySpeed)
fasterButton.addEventListener("click", fastPlaySpeed)

function skip() {
    video.currentTime = video.currentTime + 15;
    if (video.currentTime >= video.duration){
        video.currentTime = 0;
    }
  }

skipButton.addEventListener("click", skip)

function mute() {
    if (video.muted === false) {
        video.muted = true
        muteButton.textContent = 'Unmute'
        volumeInput.textContent = 0
        sliderButton.value = 0
    }
    else {
        video.muted = false
        muteButton.textContent = 'Mute'
        volumeInput.textContent = 100
        sliderButton.value = 100
    }
}

muteButton.addEventListener("click", mute)

function slider() {
    video.volume = sliderButton.value / 100
    volumeInput.textContent = `${sliderButton.value} %`
}

sliderButton.addEventListener("input", slider)