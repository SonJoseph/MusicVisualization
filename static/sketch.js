// hard refresh so don't have to refresh cache every time
// Windows: Fn+Ctrl+F5
// Mac: Cmd+Shift+R

var path = "/static/music/happy.mp3"
var slider

function setup() {
    createCanvas(200, 200)
    song = loadSound(path, loaded)
    slider = createSlider(0, 1, .5, .01)
}

function loaded() { // song loading callback
    song.play()
}

function draw() {
    background(0)
    song.setVolume(slider.value())
}
