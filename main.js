const playButton = document.getElementById("audio")

const sound = new Audio("test.mp3")

playButton.addEventListener( "click", () => {
    sound.play()
})